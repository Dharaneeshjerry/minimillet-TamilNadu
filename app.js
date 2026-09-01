// app.js - Millet Tamil Nadu

document.addEventListener('DOMContentLoaded', () => {
    renderMilletsGrid();
});

// 1. Render the Sacred Eight Millet Cards dynamically
function renderMilletsGrid() {
    const grid = document.getElementById('milletsGrid');
    if (!grid || typeof milletsData === 'undefined') return;

    grid.innerHTML = milletsData.map(millet => `
        <div class="millet-item" onclick="openPanel('${millet.id}')" style="cursor: pointer;">
            <h4>${millet.emoji || '🌾'} ${millet.name}</h4>
            <p>${millet.tagline || millet.description || 'Explore nutritional benefits and traditional recipes.'}</p>
        </div>
    `).join('');
}

// 2. Open Detail Panel and Populate Data
function openPanel(id) {
    if (typeof milletsData === 'undefined') return;
    const millet = milletsData.find(m => m.id === id);
    if (!millet) return;

    document.getElementById('panelEmoji').textContent = millet.emoji || '🌾';
    document.getElementById('panelName').textContent = millet.name;
    document.getElementById('panelTagline').textContent = millet.tagline || '';

    // Populate Nutrition Bars
    const nutrientBarsContainer = document.getElementById('nutrientBars');
    if (millet.nutrition && nutrientBarsContainer) {
        nutrientBarsContainer.innerHTML = millet.nutrition.map(n => `
            <div style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 500; margin-bottom: 4px;">
                    <span>${n.label}</span>
                    <span>${n.value}</span>
                </div>
                <div style="background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden;">
                    <div style="background: #2d6a4f; width: ${n.percentage || 60}%; height: 100%; border-radius: 4px;"></div>
                </div>
            </div>
        `).join('');
    }

    // Populate Benefits
    const benefitsListContainer = document.getElementById('benefitsList');
    if (millet.benefits && benefitsListContainer) {
        benefitsListContainer.innerHTML = millet.benefits.map(b => `
            <div style="background: #f8f9fa; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-size: 13.5px;">
                ✅ ${b}
            </div>
        `).join('');
    }

    // Populate Recipes
    if (millet.recipes && millet.recipes.length > 0) {
        renderRecipes(millet.recipes);
    }

    // Display Panel
    const panel = document.getElementById('detailPanel');
    panel.classList.remove('hidden');
    panel.style.display = 'block';
}

// 3. Close Detail Panel
function closePanel() {
    const panel = document.getElementById('detailPanel');
    panel.classList.add('hidden');
    panel.style.display = 'none';
}

// 4. Tab Switching Logic
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    const targetContent = document.getElementById(`tab-${tabName}`);
    if (targetContent) targetContent.classList.add('active');

    // Find and highlight matching tab button
    const clickedBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => 
        btn.textContent.toLowerCase().includes(tabName)
    );
    if (clickedBtn) clickedBtn.classList.add('active');
}

// 5. Render Recipes inside the Panel
function renderRecipes(recipes) {
    const selector = document.getElementById('recipeSelector');
    const detail = document.getElementById('recipeDetail');
    if (!selector || !detail) return;

    selector.innerHTML = recipes.map((r, index) => `
        <button class="sub-recipe-btn" onclick="selectRecipe(${index})" style="padding: 6px 12px; margin-right: 8px; margin-bottom: 8px; border: 1px solid #2d6a4f; background: #fff; border-radius: 4px; cursor: pointer; font-size: 12.5px;">${r.name}</button>
    `).join('');

    displayRecipe(recipes[0]);
    window.currentRecipesData = recipes;
}

window.selectRecipe = function(index) {
    if (window.currentRecipesData && window.currentRecipesData[index]) {
        displayRecipe(window.currentRecipesData[index]);
    }
}

function displayRecipe(recipe) {
    const detail = document.getElementById('recipeDetail');
    if (!detail) return;
    
    const ingredientsHtml = Array.isArray(recipe.ingredients) 
        ? recipe.ingredients.map(i => `<li>${i}</li>`).join('') 
        : `<li>${recipe.ingredients}</li>`;
        
    const stepsHtml = Array.isArray(recipe.steps) 
        ? recipe.steps.map(s => `<li>${s}</li>`).join('') 
        : `<li>${recipe.steps}</li>`;

    detail.innerHTML = `
        <h4 style="color: #1b4332; margin-top: 0;">${recipe.name}</h4>
        <strong style="font-size: 13px; color: #2d6a4f;">Ingredients:</strong>
        <ul style="margin: 5px 0 15px 20px; font-size: 13px; color: #444;">${ingredientsHtml}</ul>
        <strong style="font-size: 13px; color: #2d6a4f;">Instructions:</strong>
        <ol style="margin: 5px 0 0 20px; font-size: 13px; color: #444;">${stepsHtml}</ol>
    `;
}

// Make functions globally accessible for HTML event listeners
window.openPanel = openPanel;
window.closePanel = closePanel;
window.switchTab = switchTab;


