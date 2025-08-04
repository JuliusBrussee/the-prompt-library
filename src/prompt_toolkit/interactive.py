
# mcp_tool/interactive.py
import re
from .core import find_prompts, get_full_prompt

def run_interactive_session(query):
    """
    Guides the user through an interactive prompt selection and execution session.
    """
    print(f"Searching for prompts matching: '{query}'...")
    top_prompts = find_prompts(query)[:5]

    if not top_prompts:
        print("No matching prompts found.")
        return

    print("\n--- Top 5 Matches ---")
    for i, prompt in enumerate(top_prompts):
        print(f"{i + 1}. {prompt['role']} - {prompt['path']}")
    print("---------------------")

    choice = -1
    while choice < 1 or choice > len(top_prompts):
        try:
            user_input = input(f"Select a prompt (1-{len(top_prompts)}): ")
            choice = int(user_input)
        except (ValueError, IndexError):
            print("Invalid selection. Please enter a number from the list.")
            continue

    chosen_prompt_info = top_prompts[choice - 1]
    prompt_content = get_full_prompt(chosen_prompt_info['path'])
    
    print(f"\nYou selected: '{prompt_content['role']}'")

    placeholders = prompt_content.get('placeholders', [])
    if not placeholders:
        print("\nThis prompt has no placeholders. Here is the full text:")
    else:
        print("\nPlease provide values for the following placeholders:")

    filled_values = {}
    for placeholder in placeholders:
        user_value = input(f"  {placeholder}: ")
        filled_values[placeholder] = user_value

    # Combine all text parts to perform substitution
    requirements = prompt_content.get('requirements') or []
    requirements_str = '- ' + '\n- '.join(requirements) if requirements else ''
    full_text_template = f"""ROLE:
{prompt_content.get('role', '')}

OBJECTIVE:
{prompt_content.get('objective', '')}

REQUIREMENTS:
{requirements_str}

OUTPUT FORMAT:
{prompt_content.get('output_format', '')}"""
    
    # Substitute placeholder values
    final_prompt = full_text_template
    for placeholder, value in filled_values.items():
        # Regex to handle placeholders with or without markdown emphasis
        final_prompt = re.sub(r'(\*\*|){%s}(\*\*|)' % re.escape(placeholder.strip('{}')), value, final_prompt)

    print("\n--- Your Final, Ready-to-Use Prompt ---")
    print(final_prompt.strip())
    print("---------------------------------------")
