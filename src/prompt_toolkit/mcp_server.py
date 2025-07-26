import os
import json
from typing import Any, List
from mcp.server.fastmcp import FastMCP
from .core import find_prompts, get_full_prompt

# Initialize FastMCP server
mcp = FastMCP("prompt-library")

def get_prompt_index() -> List[dict[str, Any]]:
    """Loads the prompt index from the JSON file."""
    index_path = os.path.join(os.path.dirname(__file__), 'prompt_index.json')
    with open(index_path, 'r') as f:
        return json.load(f)

@mcp.tool()
async def list_prompts() -> str:
    """List all available prompts in the library."""
    try:
        index = get_prompt_index()
        # Format the output to be readable
        formatted_prompts = []
        for prompt in index:
            formatted_prompts.append(
                f"ID: {prompt.get('id')}\n"
                f"Role: {prompt.get('role')}\n"
                f"Objective: {prompt.get('objective')}\n"
                f"Tags: {', '.join(prompt.get('tags', []))}"
            )
        return "\n---\n".join(formatted_prompts)
    except FileNotFoundError:
        return "Error: The prompt index file (prompt_index.json) was not found."
    except Exception as e:
        return f"An unexpected error occurred: {e}"

@mcp.tool()
async def get_prompt(query: str) -> str:
    """Get the full details of a specific prompt by its query.
    Args:
        query: The query to search for the prompt.
    """
    try:
        matches = find_prompts(query)
        if not matches:
            return f"Error: Prompt with query '{query}' not found."

        # Return the top match
        prompt_info = matches[0]
        prompt_path = prompt_info.get('path')
        if not prompt_path:
            return f"Error: Path not found for prompt with query '{query}'."

        full_prompt = get_full_prompt(prompt_path)
        return json.dumps(full_prompt, indent=2)
    except FileNotFoundError:
        return f"Error: The file for prompt with query '{query}' was not found at the expected path."
    except Exception as e:
        return f"An unexpected error occurred while fetching prompt '{query}': {e}"


@mcp.tool()
async def search_prompts(query: str) -> str:
    """Search for prompts using a query.

    Args:
        query: The search term to find relevant prompts.
    """
    try:
        matches = find_prompts(query)
        if not matches:
            return "No prompts found matching your query."

        formatted_matches = []
        for prompt in matches:
            formatted_matches.append(
                f"ID: {prompt.get('id')}\n"
                f"Role: {prompt.get('role')}\n"
                f"Objective: {prompt.get('objective')}\n"
                f"Tags: {', '.join(prompt.get('tags', []))}"
            )
        return "\n---\n".join(formatted_matches)
    except FileNotFoundError:
        return "Error: The prompt index file (prompt_index.json) was not found for searching."
    except Exception as e:
        return f"An unexpected error occurred during search: {e}"

if __name__ == "__main__":
    mcp.run(transport='stdio')