const promptsContainer = document.getElementById('prompts-container');
const searchInput = document.getElementById('search');
const tagFiltersContainer = document.getElementById('tag-filters');
const toastContainer = document.getElementById('toast-container');
const randomPromptBtn = document.getElementById('random-prompt-btn');
const clearFiltersBtn = document.getElementById('clear-filters-btn');

const sortByBtn = document.getElementById('sort-by-btn');
const sortByDropdown = document.getElementById('sort-by-dropdown');

const sidebar = document.querySelector('.sidebar'); // kept for responsive CSS open/close class if needed
const themeToggle = document.getElementById('theme-toggle');

const resultsCount = document.getElementById('results-count');
const activeFilters = document.getElementById('active-filters');
const promptCountElement = document.getElementById('prompt-count-footer');

const tagSearchInput = document.getElementById('tag-search');

let activeTags = [];
let currentSortOrder = 'default';

/* Toasts */
const showToast = (message) => {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 3000);
};

/* Sorting */
const sortPrompts = (promptsToSort) => {
  return promptsToSort.slice().sort((a, b) => {
    if (currentSortOrder === 'default') return a.role.localeCompare(b.role);
    if (currentSortOrder === 'usage') {
      const tagOrder = ['coding-software-development', 'business-strategy-entrepreneurship', 'creative-writing'];
      const aTags = a.tags || [];
      const bTags = b.tags || [];
      const ai = tagOrder.findIndex(t => aTags.includes(t));
      const bi = tagOrder.findIndex(t => bTags.includes(t));
      if (ai === -1 && bi === -1) return a.role.localeCompare(b.role);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi || a.role.localeCompare(b.role);
    }
    if (currentSortOrder === 'reverse') return b.role.localeCompare(a.role);
    return 0;
  });
};

/* Sort dropdown */
sortByBtn.addEventListener('click', () => {
  const open = sortByDropdown.classList.toggle('show');
  sortByBtn.setAttribute('aria-expanded', String(open));
});
sortByDropdown.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    currentSortOrder = e.target.dataset.sort;
    sortByDropdown.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.dataset.sort === currentSortOrder));
    updateSortButtonText();
    filterPrompts();
    sortByDropdown.classList.remove('show');
    sortByBtn.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('click', (e) => {
  if (!sortByBtn.contains(e.target) && !sortByDropdown.contains(e.target)) {
    sortByDropdown.classList.remove('show');
    sortByBtn.setAttribute('aria-expanded', 'false');
  }
});

/* Filtering */
const filterPrompts = () => {
  const searchTerm = (searchInput.value || '').toLowerCase().trim();
  const filtered = prompts.filter(p => {
    if (!p) return false;
    const role = (p.role || '').toLowerCase();
    const objective = (p.objective || '').toLowerCase();
    const tagsStr = (p.tags || []).join(' ').toLowerCase();
    const matchesSearch = role.includes(searchTerm) || objective.includes(searchTerm) || tagsStr.includes(searchTerm);
    const matchesTags = activeTags.length === 0 || activeTags.every(t => p.tags && p.tags.includes(t));
    return matchesSearch && matchesTags;
  });
  const sorted = sortPrompts(filtered);
  displayPrompts(sorted);
  updateActiveFilterChips();
  resultsCount.textContent = String(sorted.length);
};

/* Tag list */
const createTagElement = (tag, count) => {
  const button = document.createElement('button');
  button.className = 'tag-filter';
  button.type = 'button';
  button.textContent = tag;
  const countEl = document.createElement('span');
  countEl.className = 'tag-count';
  countEl.textContent = count ?? '';
  button.appendChild(countEl);
  button.dataset.tag = tag;
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    if (activeTags.includes(tag)) activeTags = activeTags.filter(t => t !== tag);
    else activeTags.push(tag);
    filterPrompts();
  });
  return button;
};

const initializeTagFilters = () => {
  const allTags = [...new Set(prompts.flatMap(p => (p && p.tags) || []))].sort();
  const counts = {};
  prompts.forEach(p => (p?.tags || []).forEach(t => counts[t] = (counts[t] || 0) + 1));
  tagFiltersContainer.innerHTML = '';
  allTags.forEach(tag => tagFiltersContainer.appendChild(createTagElement(tag, counts[tag])));

  // Tag search filter
  tagSearchInput?.addEventListener('input', () => {
    const q = tagSearchInput.value.toLowerCase().trim();
    [...tagFiltersContainer.children].forEach(el => {
      const on = el.dataset.tag.toLowerCase().includes(q);
      el.style.display = on ? '' : 'none';
    });
  });
};

/* Cards */
const displayPrompts = (list) => {
  promptsContainer.innerHTML = '';
  list.forEach(prompt => {
    if (!prompt) return;
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open "${prompt.role}"`);

    const title = document.createElement('h3');
    title.textContent = prompt.role;

    const objective = document.createElement('p');
    const TRUNCATE_LENGTH = 180;
    const obj = prompt.objective || '';
    objective.textContent = obj.length > TRUNCATE_LENGTH ? obj.slice(0, TRUNCATE_LENGTH) + '…' : obj;

    card.addEventListener('click', () => openPromptDetailModal(prompt));
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPromptDetailModal(prompt); } });

    card.appendChild(title);
    card.appendChild(objective);

    if (prompt.tags?.length) {
      const tags = document.createElement('div');
      tags.className = 'tags';
      prompt.tags.forEach(t => {
        const s = document.createElement('span');
        s.textContent = t;
        tags.appendChild(s);
      });
      card.appendChild(tags);
    }

    const actions = document.createElement('div');
    actions.className = 'actions';
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Prompt';
    copyButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = `Role: ${prompt.role}
Objective: ${prompt.objective}`;
      navigator.clipboard.writeText(textToCopy).then(() => showToast('Prompt copied to clipboard!'), () => showToast('Failed to copy prompt.'));
    });
    actions.appendChild(copyButton);
    card.appendChild(actions);

    promptsContainer.appendChild(card);
  });
};

/* Modal */
const promptDetailModal = document.getElementById('prompt-detail-modal');
const closeModalButton = promptDetailModal.querySelector('.close-button');
const modalRole = document.getElementById('modal-role');
const modalObjective = document.getElementById('modal-objective');
const modalOutputFormatSection = document.getElementById('modal-output-format-section');
const modalOutputFormat = document.getElementById('modal-output-format');
const modalPlaceholdersSection = document.getElementById('modal-placeholders-section');
const modalPlaceholdersInputs = document.getElementById('modal-placeholders-inputs');
const modalTagsSection = document.getElementById('modal-tags-section');
const modalTags = document.getElementById('modal-tags');
const modalAuthorSection = document.getElementById('modal-author-section');
const modalRequirementsSection = document.getElementById('modal-requirements-section');
const modalRequirements = document.getElementById('modal-requirements');
const modalSystemInstructionsSection = document.getElementById('modal-system-instructions-section');
const modalSystemInstructions = document.getElementById('modal-system-instructions');
const modalCopyButton = document.getElementById('modal-copy-button');
const authorBadge = document.getElementById('modal-author-badge');

const openPromptDetailModal = (prompt) => {
  modalRole.textContent = prompt.role || '';
  modalObjective.textContent = prompt.objective || '';

  if (prompt.output_format) {
    modalOutputFormat.textContent = prompt.output_format;
    modalOutputFormatSection.hidden = false;
  } else {
    modalOutputFormatSection.hidden = true;
  }

  modalPlaceholdersInputs.innerHTML = '';
  if (prompt.placeholders?.length) {
    prompt.placeholders.forEach(ph => {
      const div = document.createElement('div');
      div.className = 'placeholder-input-group';
      const label = document.createElement('label');
      label.textContent = `${ph}:`;
      label.setAttribute('for', `ph-${ph}`);
      const input = document.createElement('input');
      input.type = 'text';
      input.id = `ph-${ph}`;
      input.placeholder = `Enter value for ${ph}`;
      input.dataset.placeholderName = ph;
      div.appendChild(label);
      div.appendChild(input);
      modalPlaceholdersInputs.appendChild(div);
    });
    modalPlaceholdersSection.hidden = false;
  } else {
    modalPlaceholdersSection.hidden = true;
  }

  modalTags.innerHTML = '';
  if (prompt.tags?.length) {
    prompt.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      modalTags.appendChild(span);
    });
    modalTagsSection.hidden = false;
  } else {
    modalTagsSection.hidden = true;
  }

  if (prompt.system_instructions) {
    modalSystemInstructions.textContent = prompt.system_instructions;
    modalSystemInstructionsSection.hidden = false;
    modalRequirementsSection.hidden = true;
  } else {
    modalSystemInstructionsSection.hidden = true;
    modalRequirements.innerHTML = '';
    if (prompt.requirements?.length) {
      prompt.requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        modalRequirements.appendChild(li);
      });
      modalRequirementsSection.hidden = false;
    } else {
      modalRequirementsSection.hidden = true;
    }
  }

  if (prompt.author) {
    authorBadge.hidden = false;
    authorBadge.textContent = `Author: ${prompt.author}`;
  } else {
    authorBadge.hidden = true;
  }

  modalCopyButton.onclick = () => {
    let roleToCopy = prompt.role || '';
    let objectiveToCopy = prompt.objective || '';
    let requirementsToCopy = prompt.requirements ? [...prompt.requirements] : [];

    const placeholderInputs = modalPlaceholdersInputs.querySelectorAll('input');
    placeholderInputs.forEach(input => {
      const placeholderName = input.dataset.placeholderName;
      const inputValue = input.value.trim();
      if (inputValue) {
        const regex = new RegExp(`\\{${placeholderName}\\}`, 'g');
        roleToCopy = roleToCopy.replace(regex, inputValue);
        objectiveToCopy = objectiveToCopy.replace(regex, inputValue);
        requirementsToCopy = requirementsToCopy.map(r => r.replace(regex, inputValue));
      }
    });

    const textToCopy = `Role: ${roleToCopy}
Objective: ${objectiveToCopy}
${prompt.output_format ? `Output Format: ${prompt.output_format}
` : ''}${prompt.system_instructions ? `System Instructions: ${prompt.system_instructions}
` : ''}${requirementsToCopy?.length ? `Requirements: ${requirementsToCopy.join(', ')}
` : ''}${prompt.tags?.length ? `Tags: ${prompt.tags.join(', ')}
` : ''}${prompt.author ? `Author: ${prompt.author}` : ''}`;
    navigator.clipboard.writeText(textToCopy).then(() => showToast('Prompt copied to clipboard!'), () => showToast('Failed to copy prompt.'));
  };

  promptDetailModal.style.display = 'flex';
  promptDetailModal.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    if (window.hljs) window.hljs.highlightAll();
  }, 0);
};

const closePromptDetailModal = () => {
  promptDetailModal.style.display = 'none';
  promptDetailModal.setAttribute('aria-hidden', 'true');
};

promptDetailModal.addEventListener('click', (e) => {
  if (e.target === promptDetailModal) closePromptDetailModal();
});
closeModalButton.addEventListener('click', closePromptDetailModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && promptDetailModal.style.display === 'flex') closePromptDetailModal();
});

/* UI helpers */
const updateSortButtonText = () => {
  const label = `Sort By: ${currentSortOrder.charAt(0).toUpperCase()}${currentSortOrder.slice(1)}`;
  sortByBtn.querySelector('span').textContent = label;
};

const updateActiveFilterChips = () => {
  activeFilters.innerHTML = '';
  activeTags.forEach(tag => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `<span>${tag}</span>`;
    const remove = document.createElement('button');
    remove.setAttribute('aria-label', `Remove filter ${tag}`);
    remove.textContent = '✕';
    remove.addEventListener('click', () => {
      activeTags = activeTags.filter(t => t !== tag);
      const btn = [...tagFiltersContainer.children].find(el => el.dataset.tag === tag);
      btn?.classList.remove('active');
      filterPrompts();
    });
    chip.appendChild(remove);
    activeFilters.appendChild(chip);
  });
};

/* Random */
const displayRandomPrompt = () => {
  if (!prompts.length) return;
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  displayPrompts([randomPrompt]);
  resultsCount.textContent = '1';
};

/* Reset filters (also clears tag search and re-shows hidden tags) */
const resetFilters = () => {
  searchInput.value = '';
  if (tagSearchInput) tagSearchInput.value = '';
  activeTags = [];
  currentSortOrder = 'default';
  document.querySelectorAll('.tag-filter.active').forEach(b => b.classList.remove('active'));
  if (tagFiltersContainer) [...tagFiltersContainer.children].forEach(el => { el.style.display = ''; });
  updateSortButtonText();
  filterPrompts();
};

/* Events */
searchInput.addEventListener('input', filterPrompts);
randomPromptBtn.addEventListener('click', displayRandomPrompt);
clearFiltersBtn.addEventListener('click', resetFilters);

/* Keyboard shortcuts (no sidebar toggle) */
document.addEventListener('keydown', (e) => {
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && e.key !== 'Escape') return;
  if (e.key === '/') { e.preventDefault(); searchInput.focus(); }
  if (e.key.toLowerCase() === 'r') { displayRandomPrompt(); }
  if (e.key.toLowerCase() === 'c') { resetFilters(); showToast('Filters cleared'); }
  if (e.key.toLowerCase() === 't') { toggleTheme(); }
});

/* Theme toggle with persistence */
const applyTheme = (mode) => {
  if (mode === 'light' || mode === 'dark') {
    document.documentElement.setAttribute('data-theme', mode);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
};
const getSavedTheme = () => localStorage.getItem('tpl-theme');
const setSavedTheme = (mode) => localStorage.setItem('tpl-theme', mode);

// Initialize theme once on load
(() => {
  const saved = getSavedTheme();
  if (saved) applyTheme(saved);
})();

const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  setSavedTheme(next);
};
themeToggle?.addEventListener('click', toggleTheme);

/* Initial load */
const validPrompts = (prompts || []).filter(Boolean).sort((a, b) => a.role.localeCompare(b.role));
initializeTagFilters();
updateSortButtonText();
displayPrompts(validPrompts);
resultsCount.textContent = String(validPrompts.length);
if (promptCountElement) promptCountElement.textContent = validPrompts.length;