

const promptsContainer = document.getElementById('prompts-container');
const searchInput = document.getElementById('search');
const tagFiltersContainer = document.getElementById('tag-filters');
const toastContainer = document.getElementById('toast-container');

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
        objective.textContent = prompt.objective;
        card.appendChild(objective);

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
            const textToCopy = `Role: ${prompt.role}\nObjective: ${prompt.objective}`;
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

searchInput.addEventListener('input', filterPrompts);

// Initial load
const validPrompts = prompts.filter(p => p);
initializeTagFilters();
displayPrompts(validPrompts);

