

import os
import json
import argparse
import yaml
import re
import itertools

def find_prompts(query):
    """
    Searches the prompt index for prompts matching the query using a weighted scoring algorithm.
    """
    index_path = os.path.join(os.path.dirname(__file__), 'prompt_index.json')
    with open(index_path, 'r') as f:
        index = json.load(f)
    
    query_tokens = set(query.lower().split())
    matches = []
    
    # Simple stop words list
    stop_words = set(['a', 'an', 'the', 'in', 'on', 'for', 'of', 'to', 'is', 'are', 'was', 'were', 'and', 'or', 'but'])
    query_tokens = query_tokens - stop_words

    for prompt in index:
        role_score = 0
        objective_score = 0
        tag_score = 0

        if prompt.get('role'):
            role_tokens = set(prompt['role'].lower().split())
            role_score = len(query_tokens.intersection(role_tokens))

        if prompt.get('objective'):
            # Remove placeholders ({word} or **{word}**) and split
            objective_text = re.sub(r'(\*\*|)\{.+?}(\*\*|)', '', prompt['objective'].lower())
            objective_tokens = set(objective_text.split())
            objective_score = len(query_tokens.intersection(objective_tokens - stop_words))

        if prompt.get('tags'):
            # Split multi-word tags into individual tokens
            tag_tokens = set(itertools.chain.from_iterable(t.lower().split() for t in prompt['tags']))
            tag_score = len(query_tokens.intersection(tag_tokens))

        # Apply weights: role and tags are more significant
        total_score = (role_score * 3) + (tag_score * 3) + objective_score
        
        if total_score > 0:
            matches.append((total_score, prompt))
    
    matches.sort(key=lambda x: x[0], reverse=True)
    return [match[1] for match in matches]

def get_prompt(query):
    """
    Returns the best matching prompt for a given query.
    """
    results = find_prompts(query)
    if results:
        return results[0]
    return None

def get_full_prompt(prompt_path):
    """
    Loads the full YAML content of a prompt.
    """
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'prompts'))
    full_path = os.path.join(base_dir, prompt_path)
    with open(full_path, 'r') as f:
        return yaml.safe_load(f)

def main():
    parser = argparse.ArgumentParser(description='Model Context Protocol (MCP) CLI')
    subparsers = parser.add_subparsers(dest='command')

    find_parser = subparsers.add_parser('find', help='Find prompts')
    find_parser.add_argument('query', help='Query to search for prompts')

    get_parser = subparsers.add_parser('get', help='Get a prompt')
    get_parser.add_argument('query', help='Query to find the best prompt for')

    args = parser.parse_args()

    if args.command == 'find':
        results = find_prompts(args.query)
        if results:
            for result in results:
                print(f"- {result['path']}: {result['role']} - {result['objective']}")
        else:
            print("No prompts found.")
    elif args.command == 'get':
        best_prompt_info = get_prompt(args.query)
        if best_prompt_info:
            prompt_content = get_full_prompt(best_prompt_info['path'])
            print(f"Found prompt: '{prompt_content['role']}' ({best_prompt_info['path']})\n")
            print("-" * 50)
            print(f"ROLE:\n{prompt_content['role']}\n")
            print(f"OBJECTIVE:\n{prompt_content['objective']}\n")
            print("REQUIREMENTS:")
            if prompt_content.get('requirements'):
                for req in prompt_content['requirements']:
                    print(f"- {req}")
            print(f"\nOUTPUT FORMAT:\n{prompt_content.get('output_format', 'Not specified')}\n")
            if prompt_content.get('placeholders'):
                print("PLACEHOLDOLDERS TO FILL:")
                for ph in prompt_content['placeholders']:
                    print(f"- {ph}")
            print("-" * 50)
        else:
            print("No suitable prompt was found.")

if __name__ == '__main__':
    main()
