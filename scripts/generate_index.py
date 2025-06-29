#!/usr/bin/env python3
"""
generate_index.py
----------------------------------
Walk every `prompts/<category>/*.prompt.yaml` file, extract a one‑line summary,
and create (or overwrite) an `INDEX.md` inside each category folder.

Run from repo root:
  python scripts/generate_index.py

Requirements: PyYAML (already in requirements.txt)
"""

from pathlib import Path
import textwrap
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
PROMPTS_DIR = REPO_ROOT / "prompts"
INDEX_FILENAME = "INDEX.md"


def summary_line(prompt_data: dict) -> str:
    """Return a concise one‑liner e.g. 'Veteran Tech Opinion Columnist – Craft a 1,200‑word editorial…'"""
    role = prompt_data.get("role", "<missing role>")
    obj = prompt_data.get("objective", "<missing objective>")
    # Truncate objective to 80 chars for neatness
    obj_short = textwrap.shorten(obj, width=80, placeholder="…")
    return f"**{role}** — {obj_short}"


def build_index_for_category(cat_path: Path):
    prompt_files = sorted(cat_path.glob("*.prompt.yaml"))
    if not prompt_files:
        return

    lines = [f"# {cat_path.name.replace('-', ' ').title()} Prompts", ""]

    for f in prompt_files:
        data = yaml.safe_load(f.read_text())
        line = summary_line(data)
        rel_path = f.name  # link within same folder
        lines.append(f"* [{line}]({rel_path})")

    index_path = cat_path / INDEX_FILENAME
    index_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"📝  Wrote {index_path.relative_to(REPO_ROOT)}")


def main():
    if not PROMPTS_DIR.exists():
        raise SystemExit("prompts/ directory not found. Run from repo root.")

    for cat_dir in PROMPTS_DIR.iterdir():
        if cat_dir.is_dir():
            build_index_for_category(cat_dir)

    print("\n✅  Category indexes generated!")


if __name__ == "__main__":
    main()
