const promptsContainer = document.getElementById('prompts-container');
const searchInput = document.getElementById('search');
const tagFiltersContainer = document.getElementById('tag-filters');
const toastContainer = document.getElementById('toast-container');
const randomPromptBtn = document.getElementById('random-prompt-btn');
const logoHeader = document.querySelector('.logo');

let activeTags = [];

const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
};

const filterPrompts = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPrompts = prompts.filter(prompt => {
        if (!prompt) return false;

        const role = prompt.role ? prompt.role.toLowerCase() : '';
        const objective = prompt.objective ? prompt.objective.toLowerCase() : '';
        const tags = prompt.tags ? prompt.tags.join(' ').toLowerCase() : '';

        const matchesSearch = role.includes(searchTerm) || objective.includes(searchTerm) || tags.includes(searchTerm);
        const matchesTags = activeTags.length === 0 || activeTags.every(tag => prompt.tags && prompt.tags.includes(tag));

        return matchesSearch && matchesTags;
    });

    displayPrompts(filteredPrompts);
};

const displayPrompts = (filteredPrompts) => {
    promptsContainer.innerHTML = '';
    filteredPrompts.forEach(prompt => {
        if (!prompt) return;
        const card = document.createElement('div');
        card.className = 'prompt-card';

        const title = document.createElement('h3');
        title.textContent = prompt.role;
        card.appendChild(title);

        const objective = document.createElement('p');
        const TRUNCATE_LENGTH = 150; // Define your desired truncate length
        objective.textContent = prompt.objective.length > TRUNCATE_LENGTH ?
                                prompt.objective.substring(0, TRUNCATE_LENGTH) + '...' :
                                prompt.objective;
        objective.dataset.fullObjective = prompt.objective; // Store full objective
        objective.classList.add('objective-text'); // Add a class for styling

        card.appendChild(objective);

        card.addEventListener('click', () => {
            openPromptDetailModal(prompt);
        });

        if (prompt.tags && prompt.tags.length > 0) {
            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tags';
            prompt.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
            card.appendChild(tagsContainer);
        }

        const actions = document.createElement('div');
        actions.className = 'actions';
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy Prompt';
        copyButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const textToCopy = `Role: ${prompt.role}
Objective: ${prompt.objective}`;
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast('Prompt copied to clipboard!');
            }, () => {
                showToast('Failed to copy prompt.');
            });
        });
        actions.appendChild(copyButton);
        card.appendChild(actions);

        promptsContainer.appendChild(card);
    });
};

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
const modalAuthor = document.getElementById('modal-author');
const modalCopyButton = document.getElementById('modal-copy-button');

const openPromptDetailModal = (prompt) => {
    modalRole.textContent = prompt.role;
    modalObjective.textContent = prompt.objective;

    // Output Format
    if (prompt.output_format) {
        modalOutputFormat.textContent = prompt.output_format;
        modalOutputFormatSection.style.display = 'block';
    } else {
        modalOutputFormatSection.style.display = 'none';
    }

    // Placeholders
    modalPlaceholdersInputs.innerHTML = '';
    if (prompt.placeholders && prompt.placeholders.length > 0) {
        prompt.placeholders.forEach(ph => {
            const div = document.createElement('div');
            div.className = 'placeholder-input-group';

            const label = document.createElement('label');
            label.textContent = ph + ':';
            label.setAttribute('for', `ph-${ph}`);
            div.appendChild(label);

            const input = document.createElement('input');
            input.type = 'text';
            input.id = `ph-${ph}`;
            input.placeholder = `Enter value for ${ph}`;
            input.dataset.placeholderName = ph; // Store original placeholder name
            div.appendChild(input);

            modalPlaceholdersInputs.appendChild(div);
        });
        modalPlaceholdersSection.style.display = 'block';
    } else {
        modalPlaceholdersSection.style.display = 'none';
    }

    // Tags
    modalTags.innerHTML = '';
    if (prompt.tags && prompt.tags.length > 0) {
        prompt.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            modalTags.appendChild(span);
        });
        modalTagsSection.style.display = 'block';
    } else {
        modalTagsSection.style.display = 'none';
    }

    // Requirements
    const modalRequirementsSection = document.getElementById('modal-requirements-section');
const modalRequirements = document.getElementById('modal-requirements');
const modalSystemInstructionsSection = document.getElementById('modal-system-instructions-section');
const modalSystemInstructions = document.getElementById('modal-system-instructions');

// System Instructions or Requirements
if (prompt.system_instructions) {
    modalSystemInstructions.textContent = prompt.system_instructions;
    modalSystemInstructionsSection.style.display = 'block';
    modalRequirementsSection.style.display = 'none'; // Hide requirements if system_instructions is present
} else {
    modalSystemInstructionsSection.style.display = 'none'; // Hide system_instructions if not present
    modalRequirements.innerHTML = '';
    if (prompt.requirements && prompt.requirements.length > 0) {
        prompt.requirements.forEach(req => {
            const li = document.createElement('li');
            li.textContent = req;
            modalRequirements.appendChild(li);
        });
        modalRequirementsSection.style.display = 'block';
    } else {
        modalRequirementsSection.style.display = 'none';
    }
}

    // Author
    if (prompt.author) {
        modalAuthor.textContent = prompt.author;
        modalAuthorSection.style.display = 'block';
    } else {
        modalAuthorSection.style.display = 'none';
    }

    // Copy button logic for modal
    modalCopyButton.onclick = () => {
        let roleToCopy = prompt.role;
        let objectiveToCopy = prompt.objective;
        let requirementsToCopy = prompt.requirements ? [...prompt.requirements] : []; // Create a copy

        // Get placeholder values and substitute
        const placeholderInputs = modalPlaceholdersInputs.querySelectorAll('input');
        placeholderInputs.forEach(input => {
            const placeholderName = input.dataset.placeholderName;
            const inputValue = input.value.trim();
            if (inputValue) {
                const regex = new RegExp(`\{${placeholderName}\}`, 'g');
                roleToCopy = roleToCopy.replace(regex, inputValue);
                objectiveToCopy = objectiveToCopy.replace(regex, inputValue);
                requirementsToCopy = requirementsToCopy.map(req => req.replace(regex, inputValue));
            }
        });

        const textToCopy = `Role: ${roleToCopy}
Objective: ${objectiveToCopy}
${prompt.output_format ? `Output Format: ${prompt.output_format}
` : ''}${prompt.system_instructions ? `System Instructions: ${prompt.system_instructions}
` : ''}${requirementsToCopy && requirementsToCopy.length > 0 ? `Requirements: ${requirementsToCopy.join(', ')}
` : ''}${prompt.tags && prompt.tags.length > 0 ? `Tags: ${prompt.tags.join(', ')}
` : ''}${prompt.author ? `Author: ${prompt.author}` : ''}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast('Prompt copied to clipboard!');
        }, () => {
            showToast('Failed to copy prompt.');
        });
    };

    promptDetailModal.style.display = 'flex'; // Use flex to center content
};

const closePromptDetailModal = () => {
    promptDetailModal.style.display = 'none';
};

closeModalButton.addEventListener('click', closePromptDetailModal);
window.addEventListener('click', (event) => {
    if (event.target == promptDetailModal) {
        closePromptDetailModal();
    }
});

const initializeTagFilters = () => {
    const allTags = [...new Set(prompts.flatMap(p => p && p.tags || []))];
    allTags.sort();

    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-filter';
        button.textContent = tag;
        button.dataset.tag = tag;
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            if (activeTags.includes(tag)) {
                activeTags = activeTags.filter(t => t !== tag);
            } else {
                activeTags.push(tag);
            }
            filterPrompts();
        });
        tagFiltersContainer.appendChild(button);
    });
};

const displayRandomPrompt = () => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    displayPrompts([randomPrompt]);
}

const resetFilters = () => {
    searchInput.value = '';
    activeTags = [];
    document.querySelectorAll('.tag-filter.active').forEach(button => {
        button.classList.remove('active');
    });
    filterPrompts();
};

searchInput.addEventListener('input', filterPrompts);
randomPromptBtn.addEventListener('click', displayRandomPrompt);
logoHeader.addEventListener('click', resetFilters);

// Initial load
const validPrompts = prompts.filter(p => p);
initializeTagFilters();
displayPrompts(validPrompts);