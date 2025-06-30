import os
import json
import argparse
import yaml
import re
import itertools
from .core import find_prompts, get_full_prompt
from .interactive import run_interactive_session
from .workflow import run_workflow
from .testing import run_tests

def get_prompt(query):
    """
    Returns the best matching prompt for a given query.
    """
    results = find_prompts(query)
    if results:
        return results[0]
    return None

def main():
    parser = argparse.ArgumentParser(description='Model Context Protocol (MCP) CLI')
    subparsers = parser.add_subparsers(dest='command', required=True)

    # Find command
    find_parser = subparsers.add_parser('find', help='Find prompts by keyword')
    find_parser.add_argument('query', help='Query to search for prompts')

    # Get command
    get_parser = subparsers.add_parser('get', help='Get the full text of the best prompt for a task')
    get_parser.add_argument('query', help='Query to find the best prompt for')
    get_parser.add_argument('-i', '--interactive', action='store_true', help='Run in interactive mode')

    # Workflow command
    workflow_parser = subparsers.add_parser('run-workflow', help='Run a workflow from a file')
    workflow_parser.add_argument('workflow_path', help='Path to the .workflow.yaml file')

    # Test command
    test_parser = subparsers.add_parser('test', help='Run tests for a prompt')
    test_parser.add_argument('test_path', help='Path to the .test.yaml file')

    args = parser.parse_args()

    if args.command == 'find':
        results = find_prompts(args.query)
        if results:
            for result in results:
                print(f"- {result['path']}: {result['role']} - {result['objective']}")
        else:
            print("No prompts found.")
    elif args.command == 'get':
        if args.interactive:
            run_interactive_session(args.query)
        else:
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
    elif args.command == 'run-workflow':
        run_workflow(args.workflow_path)
    elif args.command == 'test':
        run_tests(args.test_path)

if __name__ == '__main__':
    main()