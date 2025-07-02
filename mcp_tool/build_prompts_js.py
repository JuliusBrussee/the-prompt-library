
import yaml
import json
import glob
import os

prompts = []
for filepath in glob.glob('prompts/**/*.prompt.yaml', recursive=True):
    with open(filepath, 'r') as f:
        try:
            data = yaml.safe_load(f)
            if data:
                prompts.append(data)
        except yaml.YAMLError as exc:
            print(f"Error parsing YAML file {filepath}: {exc}")

output_dir = 'docs'
os.makedirs(output_dir, exist_ok=True)

with open(os.path.join(output_dir, 'prompts.js'), 'w') as f:
    f.write('const prompts = ')
    json.dump(prompts, f, indent=2)

print(f"Successfully generated {os.path.join(output_dir, 'prompts.js')}")
