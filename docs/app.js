
const promptsContainer = document.getElementById('prompts-container');
const searchInput = document.getElementById('search');

const displayPrompts = (filteredPrompts) => {
    promptsContainer.innerHTML = '';
    filteredPrompts.forEach(prompt => {
        const card = document.createElement('div');
        card.className = 'prompt-card';

        const title = document.createElement('h3');
        title.textContent = prompt.role;
        card.appendChild(title);

        const objective = document.createElement('p');
        objective.textContent = prompt.objective;
        card.appendChild(objective);

        if (prompt.tags) {
            const tags = document.createElement('div');
            tags.className = 'tags';
            tags.textContent = `Tags: ${prompt.tags.join(', ')}`;
            card.appendChild(tags);
        }

        promptsContainer.appendChild(card);
    });
};

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPrompts = prompts.filter(prompt => {
        const role = prompt.role ? prompt.role.toLowerCase() : '';
        const objective = prompt.objective ? prompt.objective.toLowerCase() : '';
        const tags = prompt.tags ? prompt.tags.join(' ').toLowerCase() : '';
        return role.includes(searchTerm) || objective.includes(searchTerm) || tags.includes(searchTerm);
    });
    displayPrompts(filteredPrompts);
});

displayPrompts(prompts);
