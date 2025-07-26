

# mcp_tool/workflow.py
import yaml
import re
from .core import find_prompts, get_full_prompt

def run_workflow(workflow_path):
    """
    Parses and executes a workflow file.
    """
    print(f"Running workflow from: {workflow_path}")
    with open(workflow_path, 'r') as f:
        workflow_data = yaml.safe_load(f)
    
    print(f"\n--- Workflow: {workflow_data.get('name')} ---")
    print(f"Description: {workflow_data.get('description')}\n")

    step_outputs = {}

    for i, step in enumerate(workflow_data['steps']):
        step_name = step['step_name']
        prompt_query = step['prompt_query']
        output_key = step['output_key']
        step_inputs = step.get('inputs', {})

        print(f"\n--- Step {i + 1}: {step_name} ---")
        print(f"Finding prompt for: '{prompt_query}'")

        best_prompt_info = find_prompts(prompt_query)
        if not best_prompt_info:
            print(f"Error: No prompt found for query '{prompt_query}'. Skipping step.")
            continue
        
        # Take the first best match
        chosen_prompt_info = best_prompt_info[0]
        prompt_content = get_full_prompt(chosen_prompt_info['path'])

        print(f"Using prompt: '{prompt_content['role']}' ({chosen_prompt_info['path']})")

        # Resolve inputs, including references to previous step outputs
        resolved_inputs = {}
        for placeholder, value in step_inputs.items():
            if isinstance(value, str) and value.startswith('{steps.') and value.endswith('}'):
                # Reference to a previous step's output
                try:
                    # Example: {steps.step_name.output_key}
                    parts = value[len('{steps.'):-1].split('.')
                    ref_step_name = parts[0]
                    ref_output_key = parts[1]
                    resolved_inputs[placeholder] = step_outputs[ref_step_name][ref_output_key]
                except (KeyError, IndexError):
                    print(f"Warning: Could not resolve reference '{value}'. Using empty string.")
                    resolved_inputs[placeholder] = ""
            else:
                resolved_inputs[placeholder] = value
        
        # Construct the final prompt text for this step
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
        
        final_prompt = full_text_template
        for placeholder, value in resolved_inputs.items():
            # Regex to handle placeholders with or without markdown emphasis
            final_prompt = re.sub(r'(\**|){%s}(\**|)' % re.escape(placeholder.strip('{}')), str(value), final_prompt)

        print("\n--- Prepared Prompt for LLM ---")
        print(final_prompt.strip())
        print("-------------------------------")
        print(f"\n(Simulating LLM call for step '{step_name}'...) ")
        
        # Simulate LLM output for demonstration. In a real scenario, this would be the LLM's actual response.
        simulated_output = {output_key: f"Simulated output for {step_name} with input {resolved_inputs}"}
        step_outputs[step_name] = simulated_output
        print(f"Stored output for '{step_name}': {simulated_output}\n")

    print("--- Workflow Finished ---")
    print("Final collected outputs:")
    for step_name, outputs in step_outputs.items():
        print(f"  {step_name}: {outputs}")

