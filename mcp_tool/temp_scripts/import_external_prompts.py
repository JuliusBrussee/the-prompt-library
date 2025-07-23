import os
import shutil
import yaml
import re

# Define the path to the project root
PROJECT_ROOT = "/Users/julb/Desktop/GitHub/the-prompt-library"
TEMP_CLONED_PROMPTS_DIR = os.path.join(PROJECT_ROOT, "temp_cloned_prompts")
TARGET_PROMPTS_DIR = os.path.join(PROJECT_ROOT, "prompts") # Now directly into prompts

# List of authors whose prompts should use 'system_instructions' instead of 'requirements'
AI_AGENT_AUTHORS = [
    "cluely", "cursor", "devinai", "dia", "junie", "lovable",
    "manusagenttools&prompt", "opensourceprompts", "orchids.app",
    "perplexity", "replit", "same.dev", "spawn", "trae", "v0",
    "vscodeagent", "warp.dev", "windsurf", "xcode"
]

def clone_repo(url, target_dir):
    """Clones the specified GitHub repository into the target directory."""
    print(f"Cloning {url} into {target_dir}...")
    if os.path.exists(target_dir):
        shutil.rmtree(target_dir, ignore_errors=True) # Ensure clean slate
    os.system(f"git clone {url} {target_dir}")
    print("Cloning complete.")

def find_prompt_files(repo_path):
    """Recursively finds all .txt files within the cloned repository, excluding .github."""
    prompt_files = []
    for root, _, files in os.walk(repo_path):
        if ".github" in root or "docs" in root: # Exclude .github and docs folders
            continue
        for file in files:
            if file.endswith(".txt"):
                prompt_files.append(os.path.join(root, file))
    return prompt_files

def parse_source_prompt(file_path, is_ai_agent_prompt):
    """
    Parses a source prompt file and extracts role, objective, requirements,
    placeholders, and output_format. For AI agent prompts, it also extracts
    system_instructions.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    parsed_data = {
        "role": "",
        "objective": "",
        "requirements": [],
        "placeholders": [],
        "output_format": "Markdown with H2 headers", # Default based on observation
        "system_instructions": None # New field
    }

    # Extract Role and Objective from <core_identity>
    role_objective_match = re.search(r"<core_identity>\s*You are an assistant called (.*?)(?:, developed and created by .*?)?, whose sole purpose is (.*?)\s*</core_identity>", content, re.DOTALL)
    if role_objective_match:
        parsed_data["role"] = role_objective_match.group(1).strip()
        parsed_data["objective"] = role_objective_match.group(2).strip()
        # Remove the core_identity block from content for system_instructions
        system_instructions_content = re.sub(r"<core_identity>.*?</core_identity>\s*", "", content, flags=re.DOTALL).strip()
    else:
        # Fallback for role and objective if specific pattern not found
        first_line = content.split('\n')[0].strip()
        if first_line:
            parsed_data["role"] = f"AI Assistant ({os.path.basename(os.path.dirname(file_path))})"
            parsed_data["objective"] = f"Assist the user based on the prompt: {os.path.basename(file_path).replace('.txt', '')}"
        system_instructions_content = content.strip()

    if is_ai_agent_prompt:
        parsed_data["system_instructions"] = system_instructions_content
        parsed_data["requirements"] = [] # Clear requirements for AI agent prompts
    else:
        # Extract requirements from sections for non-AI agent prompts
        all_requirements = set() # Use a set to ensure uniqueness
        sections = re.findall(r"<(\w+?)>\s*(.*?)\s*</\1>", content, re.DOTALL)
        for section_name, section_content in sections:
            lines = [line.strip() for line in section_content.split('\n') if line.strip()]
            for line in lines:
                # Remove bullet points and extra spaces
                if line.startswith('- ') or line.startswith('* '):
                    cleaned_line = line[2:].strip()
                else:
                    cleaned_line = line.strip()
            
                # Remove any leading/trailing quotes that might have been parsed incorrectly
                if cleaned_line.startswith("'") and cleaned_line.endswith("'"):
                    cleaned_line = cleaned_line[1:-1]
                
                # Replace escaped dollar signs for LaTeX math
                cleaned_line = cleaned_line.replace("\\$", "$")

                if cleaned_line:
                    all_requirements.add(cleaned_line)
        parsed_data["requirements"] = sorted(list(all_requirements)) # Sort for consistent output

    # Placeholder extraction (applies to both types)
    placeholders = re.findall(r"\{([a-zA-Z0-9_]+)\}", content)
    parsed_data["placeholders"] = sorted(list(set([f"{{{p}}}" for p in placeholders])))

    return parsed_data

def map_to_schema(parsed_data, author):
    """Maps parsed data to the prompt.schema.yaml structure."""
    schema_data = {
        "role": parsed_data.get("role", "AI Assistant"),
        "objective": parsed_data.get("objective", "Perform a task."),
        "placeholders": parsed_data.get("placeholders", []),
        "output_format": parsed_data.get("output_format", "Plain text"),
        "author": author
    }

    if parsed_data["system_instructions"] is not None:
        schema_data["system_instructions"] = parsed_data["system_instructions"]
    else:
        schema_data["requirements"] = parsed_data.get("requirements", [])
        
    return schema_data

def save_prompt_yaml(prompt_data, target_dir, filename):
    """Saves the schema-compliant prompt data as a new .prompt.yaml file."""
    os.makedirs(target_dir, exist_ok=True)
    file_path = os.path.join(target_dir, filename)
    with open(file_path, 'w', encoding='utf-8') as f:
        yaml.dump(prompt_data, f, sort_keys=False, default_flow_style=False, allow_unicode=True)
    print(f"Saved: {file_path}")

def main():
    repo_url = "https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools"
    
    clone_repo(repo_url, TEMP_CLONED_PROMPTS_DIR)

    prompt_files = find_prompt_files(TEMP_CLONED_PROMPTS_DIR)
    print(f"Found {len(prompt_files)} potential prompt files.")

    for file_path in prompt_files:
        relative_path = os.path.relpath(file_path, TEMP_CLONED_PROMPTS_DIR)
        
        # Determine author from the first directory after the cloned repo root
        path_parts = relative_path.split(os.sep)
        if len(path_parts) > 1:
            author_raw = path_parts[0]
            author = author_raw.replace(" ", "").lower() # Normalize author name
        else:
            author = "unknown" # Fallback

        is_ai_agent_prompt = author in AI_AGENT_AUTHORS
        parsed_data = parse_source_prompt(file_path, is_ai_agent_prompt)
        schema_compliant_data = map_to_schema(parsed_data, author)

        # Create a clean filename for the new YAML file
        original_filename = os.path.basename(file_path)
        prompt_name = original_filename.replace(".txt", "").replace(" ", "-").lower()
        yaml_filename = f"{prompt_name}.prompt.yaml"

        # Determine the target subdirectory within prompts/
        target_author_dir = os.path.join(TARGET_PROMPTS_DIR, author)
        
        save_prompt_yaml(schema_compliant_data, target_author_dir, yaml_filename)

    print("Cleaning up temporary cloned repository...")
    shutil.rmtree(TEMP_CLONED_PROMPTS_DIR, ignore_errors=True)
    print("Cleanup complete.")

if __name__ == "__main__":
    main()