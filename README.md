# Prompt Library

> **A curated collection of production‑ready AI prompts, organised for humans and machines alike.**

![Stars](https://img.shields.io/github/stars/juliusbrussee/the-prompt-library?style=social)
![CI](https://github.com/juliusbrussee/the-prompt-library/actions/workflows/ci.yml/badge.svg)
![Prompts](https://img.shields.io/badge/prompts-300-blue)
![License](https://img.shields.io/github/license/juliusbrussee/the-prompt-library)

---

## Why this library?

* **Ready‑to‑run** – Each prompt is self‑contained YAML with a clear `role`, `objective`, and `requirements` block.
* **Searchable & hackable** – Browse by category or pull them programmatically.
* **Quality‑gated** – Every commit is linted and validated by CI.
* **Community‑driven** – Contributions welcome via Discussions, Issues, or PRs.

---

## Website

Explore the Prompt Library on our website: [The Prompt Library](https://juliusbrussee.github.io/the-prompt-library/)

---

## Quick Start: The MCP Tool (WIP)

### MCP Server

The Prompt Library now includes an MCP server that exposes the library's functionality over the Model Context Protocol. This allows you to connect to the library from any MCP-compatible client, such as Claude for Desktop.

**Running the Server**

1.  **Install Dependencies:** Make sure you have `uv` installed and have run `uv add -r mcp_tool/requirements.txt` in your virtual environment.

2.  **Start the Server:**

    ```bash
    uv run -m mcp_tool.mcp_server
    ```

**Available Tools**

The server exposes the following tools:

*   `list_prompts()`: Lists all available prompts in the library.
*   `get_prompt(id: str)`: Retrieves the full details of a specific prompt by its ID.
*   `search_prompts(query: str)`: Searches for prompts using a query.

**Connecting with a Client**

To connect with a client like Claude for Desktop, you'll need to configure the client to connect to the server. Here is an example configuration for `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "prompt-library": {
      "command": "uv",
      "args": [
        "run",
        "-m",
        "mcp_tool.mcp_server"
      ],
      "cwd": "/ABSOLUTE/PATH/TO/the-prompt-library"
    }
  }
}
```

Make sure to replace `/ABSOLUTE/PATH/TO/the-prompt-library` with the actual absolute path to your project directory.


The Model Context Protocol (MCP) tool is the primary way to interact with this library. It allows you to intelligently find and retrieve prompts from the command line or your own Python scripts.

**First, build the search index:**

```bash
python3 -m mcp_tool.build_index
```

### 1. Finding and Using Prompts (CLI & Interactive)

The `mcp_tool.mcp` command provides two ways to get prompts:

*   **`find <query>`**: Searches the library for prompts matching your keywords and lists them.
*   **`get <query>`**: Retrieves the single best-matching prompt and displays its full, ready-to-use text.
*   **`get <query> --interactive`**: Provides a guided, interactive experience to select a prompt and fill its placeholders.

**Examples:**

```bash
# Find relevant prompts by keyword
$ python3 -m mcp_tool.mcp find "code documentation"

# Get the best prompt for a task (non-interactive)
$ python3 -m mcp_tool.mcp get "Create a unit test for my function"

# Get a prompt in interactive mode (you will be prompted for input)
$ python3 -m mcp_tool.mcp get "code review" --interactive
```

**Interactive Mode Tutorial:**

When you run `python3 -m mcp_tool.mcp get <query> --interactive`, the tool will:
1.  Display the top 5 matching prompts and ask you to select one by number.
2.  Once selected, it will list all placeholders (`{like_this}`) within that prompt.
3.  For each placeholder, it will prompt you to enter a value.
4.  Finally, it will print the complete, filled-in prompt, ready for you to copy and use with your LLM.

### 2. Running Workflows (CLI)

Workflows allow you to chain multiple prompts together to accomplish complex, multi-step tasks. Workflows are defined in `.workflow.yaml` files.

**Example Workflow: User Story to Code & Test (`workflows/user-story-to-code-test.workflow.yaml`)**

```yaml
name: User Story to Code & Test
description: Transforms a user story into acceptance criteria, generates a code snippet, and then creates unit tests for that code.
steps:
  - step_name: generate_acceptance_criteria
    prompt_query: "user story acceptance criteria"
    output_key: "acceptance_criteria"
    inputs:
      user_story: "As a user, I want to be able to log in to the system using my email and password, so that I can access my personalized dashboard."
  - step_name: generate_code_snippet
    prompt_query: "code snippet generator"
    output_key: "code_snippet"
    inputs:
      language: "Python"
      functionality: "a user login function based on the following acceptance criteria: {steps.generate_acceptance_criteria.acceptance_criteria}"
  - step_name: generate_unit_tests
    prompt_query: "unit test generator"
    output_key: "unit_tests"
    inputs:
      language: "Python"
      code_snippet: "{steps.generate_code_snippet.code_snippet}"
      testing_framework: "pytest"
```

**Example Workflow: Content Marketing Campaign (`workflows/content-marketing-campaign.workflow.yaml`)**

```yaml
name: Content Marketing Campaign
description: Generates blog post ideas, outlines a chosen idea, and drafts social media posts.
steps:
  - step_name: generate_blog_ideas
    prompt_query: "blog post idea generator"
    output_key: "blog_ideas"
    inputs:
      topic: "AI in healthcare"
      audience: "healthcare professionals"
  - step_name: outline_blog_post
    prompt_query: "blog post outliner"
    output_key: "blog_outline"
    inputs:
      topic: "AI in healthcare"
      key_points: "{steps.generate_blog_ideas.blog_ideas}"
  - step_name: generate_social_posts
    prompt_query: "social media post generator"
    output_key: "social_posts"
    inputs:
      platform: "LinkedIn"
      content_summary: "{steps.outline_blog_post.blog_outline}"
```

**Example Workflow: Academic Research Assistant (`workflows/academic-research-assistant.workflow.yaml`)**

```yaml
name: Academic Research Assistant
description: Summarizes a paper, extracts key findings, and generates research questions.
steps:
  - step_name: summarize_paper
    prompt_query: "paper summarizer"
    output_key: "summary"
    inputs:
      topic: "the impact of AI on climate modeling"
      paper_content: "(Paste the full content of the academic paper here)"
  - step_name: extract_findings
    prompt_query: "key findings extractor"
    output_key: "findings"
    inputs:
      topic: "the impact of AI on climate modeling"
      academic_text: "{steps.summarize_paper.summary}"
  - step_name: generate_questions
    prompt_query: "research question generator"
    output_key: "research_questions"
    inputs:
      topic: "the impact of AI on climate modeling"
      key_findings: "{steps.extract_findings.findings}"
```

**How to Run:**

```bash
# Run a defined workflow
$ python3 -m mcp_tool.mcp run-workflow workflows/user-story-to-code-test.workflow.yaml
$ python3 -m mcp_tool.mcp run-workflow workflows/content-marketing-campaign.workflow.yaml
$ python3 -m mcp_tool.mcp run-workflow workflows/academic-research-assistant.workflow.yaml
```

**Workflow Explanation:**
*   `name` and `description`: Self-explanatory metadata for the workflow.
*   `steps`: A list of individual prompt execution steps.
    *   `step_name`: A unique identifier for this step.
    *   `prompt_query`: The query used to find the best prompt for this step.
    *   `output_key`: The key under which the simulated output of this step will be stored.
    *   `inputs`: A dictionary mapping prompt placeholders to their values. Values can be static strings or references to outputs from previous steps using the `{steps.<step_name>.<output_key>}` syntax.

### 3. Testing Prompts (CLI)

The testing framework allows you to define test cases for your prompts and validate their behavior against expected outputs. Tests are defined in `.test.yaml` files. You can configure which LLM to use for testing via command-line arguments or a `mcp_config.yaml` file.

**Example Test File (`tests/unit_test_generator.test.yaml`):**

```yaml
prompt_path: coding-software-development/unit-test-generator.prompt.yaml
test_cases:
  - name: Basic Python Function Test
    inputs:
      language: Python
      code_snippet: |
        def add(a, b):
            return a + b
      testing_framework: pytest
    assertions:
      - type: contains
        value: "def test_add():"
      - type: contains
        value: "assert add(1, 2) == 3"
  - name: Edge Case Test
    inputs:
      language: Python
      code_snippet: |
        def divide(a, b):
            return a / b
      testing_framework: unittest
    assertions:
      - type: contains
        value: "def test_divide_by_zero(self):"
      - type: not_contains
        value: "import pytest"
```

**How to Run:**

```bash
# Run tests using default LLM configured in mcp_config.yaml
$ python3 -m mcp_tool.mcp test tests/unit_test_generator.test.yaml

# Run tests specifying LLM provider and model
$ python3 -m mcp_tool.mcp test tests/unit_test_generator.test.yaml --llm-provider gemini --llm-model gemini-pro

# Run tests with OpenAI
$ python3 -m mcp_tool.mcp test tests/unit_test_generator.test.yaml --llm-provider openai --llm-model gpt-4
```

**LLM Integration & Configuration:**

To use real LLMs for testing, you need to:
1.  **Install necessary libraries:** For Gemini, `pip install google-generativeai`. For OpenAI, `pip install openai`.
2.  **Set API Keys:** Store your API keys as environment variables (e.g., `GEMINI_API_KEY`, `OPENAI_API_KEY`). This is the recommended secure practice.
3.  **Configure `mcp_config.yaml` (Optional):** You can set default LLM provider and model in `mcp_config.yaml` at the project root:

    ```yaml
    # mcp_config.yaml
    llm_config:
      default_provider: gemini
      default_model: gemini-pro
    ```

**Testing Framework Explanation:**
*   `prompt_path`: The relative path to the prompt file being tested.
*   `test_cases`: A list of individual test scenarios.
    *   `name`: A descriptive name for the test case.
    *   `inputs`: A dictionary mapping prompt placeholders to their test values. These values will be used to prepare the prompt for the LLM call.
    *   `assertions`: A list of checks to perform on the LLM's output.
        *   `type`: The type of assertion (`contains`, `not_contains`, `regex_matches`).
        *   `value`: The string or regex pattern to check against the output.

**Important Note on LLM Calls:**
The `mcp_tool/testing.py` module now makes actual API calls to the configured LLM. Ensure your API keys are correctly set and you are aware of any costs associated with LLM usage.

---

## Folder structure

```
prompt-library/
├── prompts/                # Individual YAML prompts split by domain
│   ├── content-writing/
│   ├── academic/
│   ├── creative/
│   ├── coding/
│   ├── data/
│   ├── business/
│   ├── marketing/
│   ├── education/
│   ├── design/
│   └── productivity/
├── data/                   # CSV / JSON bulk exports
├── mcp_tool/               # Helper CLI & CI scripts
├── workflows/              # Definitions for multi-step prompt sequences
├── tests/                  # Definitions for prompt test cases
└── docs/                   # GitHub Pages site (auto‑generated)
```

---

## Prompt YAML schema

| Field           | Description                               |
| --------------- | ----------------------------------------- |
| `role`          | Persona framing the assistant             |
| `objective`     | One‑sentence goal of the task             |
| `requirements`  | Bullet list of must‑haves                 |
| `placeholders`  | List of dynamic tokens like `{topic}`     |
| `output_format` | Expected structure (e.g., Markdown table) |
| `tags`          | Optional keywords for search              |

Schema file: [`prompt.schema.yaml`](prompt.schema.yaml)

---

## Contributing

We love new prompts! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for style guidelines and open a PR.
If you’re unsure, create a Discussion first.

---

## License

MIT © Julius Brussee

If you use this library in academic work, please cite it:

```bibtex
@software{juliusbrussee_the_prompt_library_2025,
  author       = {Julius Brussee},
  title        = {{The Prompt Library}},
  year         = 2025,
  publisher    = {GitHub},
  url          = {https://github.com/juliusbrussee/the-prompt-library}
}
```

---

## Roadmap

See [`changes.md`](changes.md) for our full roadmap and planned features.

* [ ] Automated prompt count badge
* [ ] NPM/PyPI package
* [ ] Category filters in playground

---

*Star the repo, open an Issue, or drop a PR — let’s build better prompts together!*
