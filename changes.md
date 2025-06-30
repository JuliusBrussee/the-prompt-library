# Upcoming Changes & Roadmap

This document outlines planned features and improvements for the prompt library and the MCP tool.

---

### 1. Semantic Search with AI Embeddings

- **Concept:** Upgrade the current keyword-based search to a semantic search model. This involves generating AI embeddings (vector representations) for each prompt's objective and using cosine similarity to match a user's natural language query to the most conceptually similar prompt.
- **Benefit:** This will make the `find` and `get` commands dramatically more accurate and intuitive, moving beyond simple keyword matching to understanding the user's intent.

### 2. Interactive Prompt Selection and Execution (Implemented)

- **Concept:** Enhanced the `mcp_tool get` command to be interactive. It now presents the top 3-5 matches, allows the user to choose one, and then guides them through filling in the required `{placeholders}`.
- **Benefit:** This creates a more user-friendly, guided experience, turning the tool into a true "prompt assistant" and lowering the barrier to using the library effectively.

### 3. Prompt Chaining and Workflows (Implemented)

- **Concept:** Introduced a new `workflow.yaml` file type that defines a sequence of prompts to be executed in a specific order. This allows for building complex, multi-step AI tasks where the output of one prompt can be used as the input for the next.
- **Benefit:** This elevates the project from a simple library of individual prompts to a powerful automation engine capable of handling more sophisticated workflows.

**New Workflows Added:**
- **User Story to Code & Test:** Transforms a user story into acceptance criteria, generates a code snippet, and then creates unit tests for that code.
- **Content Marketing Campaign:** Generates blog post ideas, outlines a chosen idea, and drafts social media posts for it.
- **Academic Research Assistant:** Summarizes a paper, extracts key findings, and generates research questions.

### 4. Automated Prompt Testing and Quality Assurance (Implemented)

- **Concept:** Built a testing framework to validate the effectiveness of prompts. For each prompt, a corresponding test file provides example inputs and defines criteria for a "good" output (e.g., using regex, keyword checks, or even another LLM to grade the result). A `mcp_tool test` command runs these tests.
- **LLM Integration:** The testing framework now supports integration with real LLMs (Gemini, OpenAI) via API calls, configurable through CLI arguments or `mcp_config.yaml`.
- **Benefit:** This significantly improves the reliability and maintainability of the library, ensuring prompts remain high-quality over time and making it safer to accept community contributions.
