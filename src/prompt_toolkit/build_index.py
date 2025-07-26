
import os
import yaml
import json

def build_index():
    """
    Scans the prompts directory, extracts metadata from each .prompt.yaml file,
    and saves it to a JSON file named prompt_index.json.
    """
    prompts_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'prompts'))
    index = []
    for root, _, files in os.walk(prompts_dir):
        for file in files:
            if file.endswith('.prompt.yaml'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r') as f:
                    try:
                        prompt_data = yaml.safe_load(f)
                        index.append({
                            'path': os.path.relpath(file_path, prompts_dir),
                            'role': prompt_data.get('role'),
                            'objective': prompt_data.get('objective'),
                            'tags': prompt_data.get('tags', [])
                        })
                    except yaml.YAMLError as e:
                        print(f"Error reading {file_path}: {e}")
    
    index_path = os.path.join(os.path.dirname(__file__), 'prompt_index.json')
    with open(index_path, 'w') as f:
        json.dump(index, f, indent=2)
    print(f"Index built successfully at {index_path}")

if __name__ == '__main__':
    build_index()
