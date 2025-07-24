# The Prompt Library

> **A curated collection of production-ready AI prompts, organised for humans and machines alike.**

[![Stars](https://img.shields.io/github/stars/juliusbrussee/the-prompt-library?style=social)](https://github.com/juliusbrussee/the-prompt-library/stargazers)
[![Prompts](https://img.shields.io/badge/prompts-476-blue)](https://juliusbrussee.github.io/the-prompt-library/)
[![License](https://img.shields.io/github/license/juliusbrussee/the-prompt-library)](LICENSE)

---

## Why this library?

*   **Ready-to-Run:** Each prompt is a self-contained YAML file with a clear `role`, `objective`, and `requirements`.
*   **Searchable & Hackable:** Browse prompts on the website or access them programmatically with the provided tools.
*   **Quality-Gated:** Every contribution is linted and validated by CI to maintain high standards.
*   **Community-Driven:** Contributions are welcome via Discussions, Issues, or Pull Requests.

---

## Getting Started

Follow these steps to set up the project and its tools on your local machine.

### 1. Set Up the Project

First, clone the repository and navigate into the project directory:

```bash
git clone https://github.com/juliusbrussee/the-prompt-library.git
cd the-prompt-library
```

### 2. Install Dependencies

It is recommended to use a virtual environment. Then, install the required Python packages using `pip`:

```bash
# Create and activate a virtual environment (optional but recommended)
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r mcp_tool/requirements.txt
```

### 3. Build the Search Index

The library uses a JSON index for fast prompt searching. Build it by running:

```bash
python3 -m mcp_tool.build_index
```
You only need to run this once initially, or whenever you add or modify prompt files.

---

## Usage

You can interact with the prompt library in several ways: as a command-line tool, by running automated workflows, or by connecting to it as an MCP server.

### 1. Find and Use Prompts (CLI)

The interactive script (`mcp_tool/interactive.py`) is the primary way to find and use prompts.

*   **`find <query>`**: Searches the library for prompts matching your keywords.
*   **`get <query>`**: Retrieves the single best-matching prompt.
*   **`get <query> --interactive`**: Starts a guided session to select a prompt and fill in its placeholders.

**Examples:**

```bash
# Find relevant prompts by keyword
python3 -m mcp_tool.interactive find "code documentation"

# Get the best prompt for a task
python3 -m mcp_tool.interactive get "Create a unit test for my function"

# Use interactive mode to get help with a code review
python3 -m mcp_tool.interactive get "code review" --interactive
```

### 2. Run Automated Workflows

Workflows chain multiple prompts together to accomplish complex tasks. They are defined in `.workflow.yaml` files inside the `/workflows` directory.

**How to Run a Workflow:**

Use the `mcp_tool/workflow.py` script to execute a workflow file.

```bash
# Example: Transform a user story into code and tests
python3 -m mcp_tool.workflow run workflows/user-story-to-code-test.workflow.yaml

# Example: Generate a content marketing campaign
python3 -m mcp_tool.workflow run workflows/content-marketing-campaign.workflow.yaml
```

### 3. Test Prompts (WIP)

The testing framework validates a prompt's output against a set of assertions using a real LLM. Tests are defined in `.test.yaml` files in the `/tests` directory.

**LLM Configuration:**

1.  **Install LLM Libraries:**
    ```bash
    pip install google-generativeai openai
    ```
2.  **Set API Keys:** For the tool to work, you must set your LLM provider's API key as an environment variable.
    ```bash
    export GEMINI_API_KEY="YOUR_API_KEY"
    export OPENAI_API_KEY="YOUR_API_KEY"
    ```
3.  **Configure Defaults (Optional):** You can set a default LLM provider and model in a `mcp_config.yaml` file at the project root.
    ```yaml
    # mcp_config.yaml
    llm_config:
      default_provider: gemini
      default_model: gemini-pro
    ```

**How to Run Tests:**

Use the `mcp_tool/testing.py` script to run a test file.

```bash
# Run a test file using the default configured LLM
python3 -m mcp_tool.testing tests/unit_test_generator.test.yaml

# Override the LLM provider and model for a specific run
python3 -m mcp_tool.testing tests/unit_test_generator.test.yaml --llm-provider openai --llm-model gpt-4
```

### 4. Use as an MCP Server

The library includes a server that exposes its tools over the Model Context Protocol (MCP), allowing clients like the Gemini CLI to connect to it.

**Running the Server:**

Once you have installed dependencies and built the index, you can start the server:

```bash
python3 -m mcp_tool.mcp_server
```

**Connecting with Gemini CLI:**

To connect the Gemini CLI to the server, create a `.gemini/settings.json` file in the root of this project with the following content:

```json
{
    "mcpServers": {
        "prompt-library": {
            "command": "python3",
            "args": [
                "-m",
                "mcp_tool.mcp_server"
            ],
            "transport": "stdio",
            "trust": "trusted"
        }
    }
}
```
With this file in place, running `/mcp` in the Gemini CLI from this directory will connect to the server and list its available tools.

---

## Project Structure

```
prompt-library/
├── prompts/                # Individual YAML prompts split by domain
├── mcp_tool/               # Helper CLI & CI scripts
├── workflows/              # Definitions for multi-step prompt sequences
├── tests/                  # Definitions for prompt test cases
├── docs/                   # Website source code
└── data/                   # CSV / JSON bulk exports
```

---

## Prompt Schema

All prompts adhere to a standard YAML format for consistency and machine readability.

| Field           | Description                               |
| --------------- | ----------------------------------------- |
| `role`          | Persona framing the assistant             |
| `objective`     | One-sentence goal of the task             |
| `requirements`  | Bullet list of must-haves                 |
| `placeholders`  | List of dynamic tokens like `{topic}`     |
| `output_format` | Expected structure (e.g., Markdown table) |
| `tags`          | Optional keywords for search              |

The official schema is defined in [`prompt.schema.yaml`](prompt.schema.yaml).

---

## Contributing

We love new prompts! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for style guidelines and open a PR. If you’re unsure, create a Discussion first.

---

## License

MIT © Julius Brussee

If you use this library in academic work, please cite it.
