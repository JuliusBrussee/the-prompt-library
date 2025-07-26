#!/usr/bin/env python3
"""
csv_to_yaml.py
----------------------------------
Read the master_100_ai_prompts.csv (or any compatible CSV) and convert each row
into an individual *.prompt.yaml file placed in the correct category folder.

Usage:
  python scripts/csv_to_yaml.py data/master_100_ai_prompts.csv

Dependencies:
  pip install pandas pyyaml python-slugify
"""

import re
import sys
from pathlib import Path

import pandas as pd
import yaml
from slugify import slugify

# ---------------------------------------------------------------------------
# Helper functions
# ---------------------------------------------------------------------------

SECTION_PATTERNS = {
    "role": re.compile(r"^ROLE:\s*(.*)", re.IGNORECASE),
    "objective": re.compile(r"^OBJECTIVE:\s*(.*)", re.IGNORECASE),
    "requirements": re.compile(r"^REQUIREMENTS?:", re.IGNORECASE),
    "output_format": re.compile(r"^OUTPUT(?: FORMAT)?:\s*(.*)", re.IGNORECASE),
    "author": re.compile(r"^AUTHOR:\s*(.*)", re.IGNORECASE),
}


def extract_sections(prompt_text: str):
    """Parse the structured prompt and return a dict with schema keys."""
    lines = prompt_text.strip().splitlines()
    data = {k: None for k in ["role", "objective", "requirements", "output_format", "author"]}
    current_section = None
    buffer = []

    def flush():
        nonlocal buffer, current_section
        if current_section == "requirements":
            # Strip bullets and empty lines
            items = [re.sub(r"^[\s\-•*]+", "", l).strip() for l in buffer if l.strip()]
            data[current_section] = items
        elif current_section and buffer:
            data[current_section] = " ".join([l.strip() for l in buffer]).strip()
        buffer = []

    for line in lines:
        if match := SECTION_PATTERNS["role"].match(line):
            flush()
            current_section = "role"
            data["role"] = match.group(1).strip()
        elif match := SECTION_PATTERNS["objective"].match(line):
            flush()
            current_section = "objective"
            data["objective"] = match.group(1).strip()
        elif SECTION_PATTERNS["requirements"].match(line):
            flush()
            current_section = "requirements"
        elif match := SECTION_PATTERNS["output_format"].match(line):
            flush()
            current_section = "output_format"
            data["output_format"] = match.group(1).strip()
        elif match := SECTION_PATTERNS["author"].match(line):
            flush()
            current_section = "author"
            data["author"] = match.group(1).strip()
        else:
            buffer.append(line)
    flush()
    return data


def find_placeholders(text: str):
    return sorted(set(re.findall(r"\{([^}]+)\}", text)))


# ---------------------------------------------------------------------------
# Main routine
# ---------------------------------------------------------------------------

def main(csv_path: str, base_dir: str = "."):
    csv_file = Path(csv_path)
    if not csv_file.exists():
        sys.exit(f"CSV not found: {csv_file}")

    df = pd.read_csv(csv_file)
    required_cols = {"Category", "Prompt", "author"}
    if not required_cols.issubset(df.columns):
        sys.exit(f"CSV must have columns: {', '.join(required_cols)}")

    for _, row in df.iterrows():
        category = slugify(row["Category"], separator="-").lower()
        prompt_text = row["Prompt"]
        author = row["author"]

        # Parse structured text into fields
        sections = extract_sections(prompt_text)
        sections["author"] = author
        sections["placeholders"] = find_placeholders(prompt_text)
        sections["tags"] = [category]

        # Validate minimal required fields
        missing = [k for k, v in sections.items() if k in ["role", "objective"] and not v]
        if missing:
            print(f"⚠️  Skipping prompt with missing {missing}: {sections['role'] or 'UNKNOWN'}")
            continue

        # Determine output path
        out_dir = Path(base_dir) / "prompts" / category
        out_dir.mkdir(parents=True, exist_ok=True)
        filename = f"{slugify(sections['role'])[:60]}.prompt.yaml"
        out_path = out_dir / filename

        # Dump YAML (keep key order)
        with out_path.open("w", encoding="utf-8") as f:
            yaml.safe_dump(sections, f, sort_keys=False, allow_unicode=True)

        print(f"✅  Wrote {out_path.relative_to(base_dir)}")

    print("\nAll prompts exported!")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("Usage: python scripts/csv_to_yaml.py <path/to/csv>")
    main(sys.argv[1])
