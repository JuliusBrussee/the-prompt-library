# Contributing to The Prompt Library

First off, thank you for considering contributing! We love new prompts and are excited to see what you come up with. This document provides guidelines for adding new prompts to the library to ensure they are consistent, high-quality, and easy for others to use.

## How to Add a New Prompt

Adding a new prompt involves creating a new `.prompt.yaml` file in the appropriate category within the `prompts/` directory. Here’s a step-by-step guide:

### 1. Find the Right Category

Browse the existing folders in the `prompts/` directory to find the best fit for your prompt. If your prompt doesn’t fit into an existing category, you can create a new one. Category folders should be named in `kebab-case`.

### 2. Create a New Prompt File

Create a new file in the chosen category directory. The filename must be in `kebab-case` and end with the `.prompt.yaml` extension.

For example, if you are adding a prompt for generating SQL queries, you might create a file named `sql-query-generator.prompt.yaml` in the `prompts/coding-software-development/` directory.

### 3. Fill Out the Prompt Fields

Your prompt file must contain the following fields, as defined in the `prompt.schema.yaml`:

*   `role`: A short, descriptive persona for the AI (e.g., "Senior Database Administrator").
*   `objective`: A one-sentence goal for the prompt (e.g., "Generate a SQL query to retrieve all users from the `users` table.").
*   `requirements`: A list of constraints or must-haves for the prompt’s output.
*   `placeholders`: A list of dynamic tokens that users will replace with their own content. Placeholders must be in the format `{placeholder_name}`.
*   `output_format`: The expected format of the AI’s response (e.g., "SQL", "JSON", "Markdown").
*   `author`: Your name or GitHub username.
*   `tags`: (Optional) A list of lowercase keywords that will help others find your prompt.

### Prompt Template

Here is a template you can use for your new prompt file. Copy and paste this into your new file and fill in the fields:

```yaml
role: [A short, descriptive persona for the AI]
objective: [A one-sentence goal for the prompt]
author: [Your name or GitHub username]
requirements:
  - [A requirement for the prompt's output]
  - [Another requirement]
output_format: [The expected format of the AI's response]
placeholders:
  - '{placeholder_1}'
  - '{placeholder_2}'
tags:
  - [a-relevant-tag]
  - [another-tag]
```

### 4. Submit a Pull Request

Once you have created your new prompt file, commit it and open a pull request. We will review your submission and, if it meets the guidelines, merge it into the library.

## Bulk-Adding Prompts

If you have a large number of prompts to add, you can use the `mcp_tool/csv_to_yaml.py` script to convert a CSV file into individual `.prompt.yaml` files.

### 1. Create a CSV File

Create a CSV file with the following columns:

*   `Category`: The category of the prompt (e.g., "Content Writing & Blogging").
*   `Prompt`: The full text of the prompt, including the `ROLE`, `OBJECTIVE`, `REQUIREMENTS`, and `OUTPUT FORMAT` sections.
*   `author`: The name of the prompt author.

### 2. Run the Script

Run the following command to convert the CSV file into individual prompt files:

```bash
python3 mcp_tool/csv_to_yaml.py path/to/your/file.csv
```

The script will create a new directory for each category and place the generated `.prompt.yaml` files inside.


## Style Guide

*   **Clarity and Conciseness:** Prompts should be easy to understand and to the point.
*   **Consistency:** Follow the file naming and prompt structure conventions.
*   **Quality:** Ensure your prompt is well-written and produces high-quality results.

Thank you for helping us build a better prompt library together!
