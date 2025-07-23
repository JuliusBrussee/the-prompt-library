import os
import yaml

PROJECT_ROOT = "/Users/julb/Desktop/GitHub/the-prompt-library"
PROMPTS_DIR = os.path.join(PROJECT_ROOT, "prompts")

def add_tags_to_prompts():
    print("Adding tags to prompt files based on directory names...")
    for root, dirs, files in os.walk(PROMPTS_DIR):
        # Only process direct subdirectories of PROMPTS_DIR that contain .prompt.yaml files
        if os.path.normpath(root) == os.path.normpath(PROMPTS_DIR):
            continue # Skip the root prompts directory itself

        # Get the directory name to use as a tag
        dir_name = os.path.basename(root)
        tag_to_add = dir_name.lower().replace(" ", "-") # Normalize to kebab-case

        for file in files:
            if file.endswith(".prompt.yaml"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        prompt_data = yaml.safe_load(f)

                    if prompt_data is None:
                        prompt_data = {}

                    if "tags" not in prompt_data or not isinstance(prompt_data["tags"], list):
                        prompt_data["tags"] = []
                    
                    if tag_to_add not in prompt_data["tags"]:
                        prompt_data["tags"].append(tag_to_add)
                        prompt_data["tags"] = sorted(list(set(prompt_data["tags"]))) # Ensure uniqueness and sort
                        
                        with open(file_path, 'w', encoding='utf-8') as f:
                            yaml.dump(prompt_data, f, sort_keys=False, default_flow_style=False, allow_unicode=True)
                        print(f"Added tag '{tag_to_add}' to {file_path}")

                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
    print("Tagging complete.")

if __name__ == "__main__":
    add_tags_to_prompts()
