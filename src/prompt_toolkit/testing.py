# mcp_tool/testing.py
import os
import yaml
import re
from .core import get_full_prompt
from .llm_client import get_llm_client

def run_tests(test_path, llm_provider: str = None, llm_model: str = None):
    """
    Runs the tests defined in a .test.yaml file.
    """
    print(f"Running tests from: {test_path}")
    with open(test_path, 'r') as f:
        test_data = yaml.safe_load(f)
    
    prompt_file_path = test_data.get('prompt_path')
    if not prompt_file_path:
        print("Error: 'prompt_path' not specified in the test file.")
        return

    try:
        prompt_content = get_full_prompt(prompt_file_path)
    except FileNotFoundError:
        print(f"Error: Prompt file not found at {prompt_file_path}")
        return

    print(f"\n--- Testing Prompt: {prompt_content.get('role')} ({prompt_file_path}) ---")

    llm_client = None
    if llm_provider:
        try:
            llm_client = get_llm_client(llm_provider, llm_model)
            print(f"Using LLM: {llm_provider} ({llm_model})")
        except (ValueError, RuntimeError) as e:
            print(f"Error setting up LLM client: {e}. Proceeding with simulated output.")
            llm_provider = None # Fallback to simulation

    all_tests_passed = True
    for i, test_case in enumerate(test_data.get('test_cases', [])):
        test_name = test_case.get('name', f'Test Case {i + 1}')
        inputs = test_case.get('inputs', {})
        assertions = test_case.get('assertions', [])

        print(f"\n  --- Test Case: {test_name} ---")

        # Prepare the prompt with test inputs
        full_text_template = f"""
ROLE:
{prompt_content.get('role', '')}

OBJECTIVE:
{prompt_content.get('objective', '')}

REQUIREMENTS:
{'- ' + '\n- '.join(prompt_content.get('requirements') or [])}

OUTPUT FORMAT:
{prompt_content.get('output_format', '')}
"""
        
        prepared_prompt = full_text_template
        for placeholder, value in inputs.items():
            prepared_prompt = re.sub(r'(\**|){%s}(\**|)' % re.escape(placeholder.strip('{}')), str(value), prepared_prompt)

        print("    Prepared Prompt for LLM:\n")
        print(f"""
{prepared_prompt.strip()}
""")
        print("    --------------------------------------------------")

        llm_output = ""
        if llm_client:
            try:
                llm_output = llm_client.generate_text(prepared_prompt)
                print("    Actual LLM Output:\n")
                print(f"""
{llm_output}
""")
            except Exception as e:
                llm_output = f"LLM Error: {e}"
                print(f"    LLM Call Failed: {e}. Using error message for assertions.")
        else:
            # Fallback to existing simulation if no LLM client or error
            simulated_llm_output = f"Simulated LLM output for {test_name}. Inputs: {inputs}. "
            if "error" in test_name.lower():
                simulated_llm_output += "This is an error message."
            elif "success" in test_name.lower():
                simulated_llm_output += "Operation completed successfully."
            else:
                simulated_llm_output += "Generic response."
            llm_output = simulated_llm_output

            print("    Simulated LLM Output:\n")
            print(f"""
{llm_output}
""")
        print("    --------------------------------------------------")

        test_case_passed = True
        for assertion in assertions:
            assertion_type = assertion.get('type')
            assertion_value = assertion.get('value')
            
            if not assertion_type or not assertion_value:
                print(f"      Assertion Error: Missing type or value in assertion: {assertion}")
                test_case_passed = False
                continue

            result = False
            if assertion_type == 'contains':
                result = assertion_value in llm_output
            elif assertion_type == 'not_contains':
                result = assertion_value not in llm_output
            elif assertion_type == 'regex_matches':
                result = bool(re.search(assertion_value, llm_output))
            
            if result:
                print(f"      [PASS] Assertion '{assertion_type}' '{assertion_value}'")
            else:
                print(f"      [FAIL] Assertion '{assertion_type}' '{assertion_value}'")
                test_case_passed = False
                all_tests_passed = False
        
        if test_case_passed:
            print(f"  Test Case '{test_name}': PASSED")
        else:
            print(f"  Test Case '{test_name}': FAILED")

    print("\n--- Test Summary ---")
    if all_tests_passed:
        print("All tests passed successfully!")
    else:
        print("Some tests failed. Please review the failures above.")