
import os
import json
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

def get_full_prompt(prompt_path):
    """
    Loads the full YAML content of a prompt.
    """
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'prompts'))
    full_path = os.path.join(base_dir, prompt_path)
    with open(full_path, 'r') as f:
        return yaml.safe_load(f)
