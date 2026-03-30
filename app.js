// OpenClaw Skills Website - Main Application

document.addEventListener('DOMContentLoaded', () => {
    initStats();
    renderSkills(skillsData);
    setupSearch();
});

function initStats() {
    document.getElementById('skill-count').textContent = metadata.totalCount;
    document.getElementById('last-update').textContent = metadata.lastUpdated;
}

function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    
    if (skills.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>😕 未找到匹配的技能</h3>
                <p>尝试其他搜索关键词</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = skills.map(skill => createSkillCard(skill)).join('');
}

function createSkillCard(skill) {
    const featuresHTML = skill.features.map(f => 
        `<li class="feature-item">✓ ${f}</li>`
    ).join('');
    
    const requiresHTML = skill.requires.length > 0 ? `
        <div class="meta-tag">
            <span class="icon">📦</span>
            <span>${skill.requires.join(', ')}</span>
        </div>
    ` : '';
    
    const homepageHTML = skill.homepage ? `
        <a href="${skill.homepage}" target="_blank" class="meta-tag" style="text-decoration: none;">
            <span class="icon">🔗</span>
            <span>主页</span>
        </a>
    ` : '';
    
    return `
        <div class="skill-card" data-name="${skill.name}" data-description="${skill.description}">
            <div class="skill-header">
                <div class="skill-emoji">${skill.emoji}</div>
                <div class="skill-info">
                    <div class="skill-name">${skill.name}</div>
                    <span class="skill-version">v${skill.version}</span>
                </div>
            </div>
            
            <div class="skill-description">${skill.description}</div>
            
            <div class="skill-meta">
                <div class="meta-tag">
                    <span class="icon">📁</span>
                    <span>${skill.category}</span>
                </div>
                <div class="meta-tag">
                    <span class="icon">👤</span>
                    <span>${skill.author}</span>
                </div>
                ${requiresHTML}
                ${homepageHTML}
            </div>
            
            <div class="skill-features">
                <ul class="feature-list">
                    ${featuresHTML}
                </ul>
            </div>
        </div>
    `;
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            renderSkills(skillsData);
            return;
        }
        
        const filtered = skillsData.filter(skill => 
            skill.name.toLowerCase().includes(query) ||
            skill.description.toLowerCase().includes(query) ||
            skill.category.toLowerCase().includes(query) ||
            skill.features.some(f => f.toLowerCase().includes(query)) ||
            skill.triggers.some(t => t.toLowerCase().includes(query))
        );
        
        renderSkills(filtered);
    });
}

// Add keyboard shortcut for search (Ctrl/Cmd + K)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('search-input').focus();
    }
});
