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

## Quick start

```bash
# Clone and explore
$ git clone https://github.com/juliusbrussee/the-prompt-library.git
$ cd prompt-library

# List available prompts
$ ./scripts/list_prompts.sh
```

Or in Python:

```python
from pathlib import Path
import yaml

prompt_path = Path("prompts/content-writing/editorial.prompt.yaml")
print(yaml.safe_load(prompt_path.read_text()))
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
├── scripts/                # Helper CLI & CI scripts
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
