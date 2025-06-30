# Prompt Library

> **A curated collection of production‑ready AI prompts, organised for humans and machines alike.**

![Stars](https://img.shields.io/github/stars/juliusbrussee/the-prompt-library?style=social)
![CI](https://github.com/juliusbrussee/the-prompt-library/actions/workflows/ci.yml/badge.svg)
![Prompts](https://img.shields.io/badge/prompts-100-blue)
![License](https://img.shields.io/github/license/juliusbrussee/the-prompt-library)

---

## Why this library?

* **Ready‑to‑run** – Each prompt is self‑contained YAML with a clear `role`, `objective`, and `requirements` block.
* **Searchable & hackable** – Browse by category or pull them programmatically.
* **Quality‑gated** – Every commit is linted and validated by CI.
* **Community‑driven** – Contributions welcome via Discussions, Issues, or PRs.

---

## Quick Start: The MCP Tool

The Model Context Protocol (MCP) tool is the primary way to interact with this library. It allows you to intelligently find and retrieve prompts from the command line or your own Python scripts.

**First, build the search index:**

```bash
python3 -m mcp_tool.build_index
```

### Finding and Using Prompts (CLI)

Use the `find` command to search for prompts by keyword and the `get` command to retrieve the full text of the best match.

```bash
# Find relevant prompts
$ python3 -m mcp_tool.mcp find "unit test"

# Get the best prompt for a task, ready to use
$ python3 -m mcp_tool.mcp get "Create a unit test for my function"
```

### Integrating with Python

You can easily integrate the prompt library into your own tools. The `mcp_tool` package exposes functions to find and retrieve prompts.

```python
from mcp_tool import get_prompt

# Get the best prompt object for a specific task
prompt = get_prompt("generate a git commit message")

if prompt:
    print(f"Found prompt: {prompt['path']}")
    # You can now use the prompt's details to format a request
    # to your language model.
    # For example, to get the full text:
    # from mcp_tool.mcp import get_full_prompt
    # full_prompt_text = get_full_prompt(prompt['path'])
```


Need live testing? Try the [GitHub Pages playground](https://juliusbrussee.github.io/prompt-library) (bring your own API key).

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

* [ ] Automated prompt count badge
* [ ] NPM/PyPI package
* [ ] Category filters in playground

---

*Star the repo, open an Issue, or drop a PR — let’s build better prompts together!*
