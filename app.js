// ===== APP.JS — Millet Section =====

// ── Image helpers ──

function milletImgHTML(m) {
  if (m.image) {
    return '<img src="' + m.image + '" alt="' + m.name + '" class="card-img" onerror="this.style.display=\'none\'">';
  }
  return '<div class="card-img-placeholder" style="background:linear-gradient(135deg,' + m.color + '25,' + m.color + '55);"><span class="card-img-emoji">' + m.emoji + '</span></div>';
}

function recipeImgHTML(recipe, color) {
  if (recipe.image) {
    return '<img src="' + recipe.image + '" alt="' + recipe.name + '" class="recipe-img" onerror="this.style.display=\'none\'">';
  }
  return '<div class="recipe-img-placeholder" style="background:linear-gradient(135deg,' + color + '20,' + color + '45);"><span class="recipe-img-emoji">🍽</span></div>';
}

// ── Render Millet Cards ──
function renderCards() {
  const grid = document.getElementById('milletsGrid');
  grid.innerHTML = '';
  MILLETS.forEach((m) => {
    const card = document.createElement('div');
    card.className = 'millet-card';
    card.style.setProperty('--card-color', m.color);
    card.innerHTML = `
      <div class="card-color-bar"></div>
      ${milletImgHTML(m)}
      <div class="card-body">
        <div class="card-header-row">
          <div>
            <div class="card-name">${m.name}</div>
            <div class="card-aka">${m.aka}</div>
          </div>
        </div>
        <div class="card-desc">${m.description}</div>
        <div class="card-tags">${m.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
        <div class="card-foot">
          <span class="card-link">View Details →</span>
          <span class="card-count">${m.recipes.length} recipes</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openPanel(m));
    grid.appendChild(card);
  });
}

// ── Detail Panel ──
let activeRecipeIndex = 0;
let activeMillet = null;

function openPanel(millet) {
  activeMillet = millet;
  activeRecipeIndex = 0;
  const panel = document.getElementById('detailPanel');
  panel.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  document.getElementById('panelEmoji').textContent = millet.emoji;
  document.getElementById('panelName').textContent = millet.name;
  document.getElementById('panelTagline').textContent = millet.tagline;

  switchTab('nutrition');
}

function closePanel() {
  document.getElementById('detailPanel').classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('detailPanel').addEventListener('click', (e) => {
  if (e.target === document.getElementById('detailPanel')) closePanel();
});

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    const tabs = ['nutrition', 'benefits', 'recipes'];
    btn.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');

  if (tab === 'nutrition') renderNutrition(activeMillet);
  if (tab === 'benefits')  renderBenefits(activeMillet);
  if (tab === 'recipes')   renderRecipes(activeMillet);
}

function renderNutrition(millet) {
  const container = document.getElementById('nutrientBars');
  container.innerHTML = '';
  Object.entries(millet.nutrition).forEach(([key, data]) => {
    const pct = Math.min((data.value / data.max) * 100, 100);
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    const row = document.createElement('div');
    row.className = 'nutrient-row';
    row.innerHTML = `
      <div class="nutrient-meta">
        <span class="nutrient-name">${label}</span>
        <span class="nutrient-val">${data.value}${data.unit}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:0%" data-target="${pct}%"></div>
      </div>
    `;
    container.appendChild(row);
  });
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.target;
    });
  }, 50);
}

function renderBenefits(millet) {
  const container = document.getElementById('benefitsList');
  container.innerHTML = millet.benefits.map(b => `
    <div class="benefit-item">
      <div class="benefit-icon">${b.icon}</div>
      <div class="benefit-title">${b.title}</div>
      <div class="benefit-text">${b.text}</div>
    </div>
  `).join('');
}

function renderRecipes(millet) {
  const selector = document.getElementById('recipeSelector');
  selector.innerHTML = millet.recipes.map((r, i) => `
    <button class="recipe-btn ${i === activeRecipeIndex ? 'active' : ''}"
      onclick="selectRecipe(${i})">${r.name}</button>
  `).join('');
  showRecipe(millet.recipes[activeRecipeIndex]);
}

function selectRecipe(index) {
  activeRecipeIndex = index;
  document.querySelectorAll('.recipe-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  showRecipe(activeMillet.recipes[index]);
}

function showRecipe(recipe) {
  const container = document.getElementById('recipeDetail');
  container.innerHTML = `
    ${recipeImgHTML(recipe, activeMillet.color)}
    <div class="recipe-title">${recipe.name}</div>
    <div class="recipe-meta-row">
      <div class="recipe-meta">⏱ Time: <span>${recipe.time}</span></div>
      <div class="recipe-meta">🍽 Serves: <span>${recipe.servings}</span></div>
      <div class="recipe-meta">📊 Level: <span>${recipe.difficulty}</span></div>
    </div>
    <div class="recipe-section-title">Ingredients</div>
    <div class="ingredient-list">
      ${recipe.ingredients.map(ing => `
        <div class="ingredient-row">
          <span class="ing-name">${ing.name}</span>
          <span class="ing-amount">${ing.amount}</span>
        </div>
      `).join('')}
    </div>
    <div class="recipe-section-title">Method</div>
    <div class="steps-list">
      ${recipe.steps.map((step, i) => `
        <div class="step-item">
          <div class="step-num">${i + 1}</div>
          <div class="step-text">${step}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});

const tnMilletRegions = [
  { district:"Dharmapuri", lat:12.1211, lng:78.1582, millets:["Ragi (Finger Millet)","Foxtail Millet"], color:"#8B4513", emoji:"🌾", note:"One of the largest Ragi-producing districts in TN. Rich red soil supports excellent finger millet cultivation." },
  { district:"Salem", lat:11.6643, lng:78.1460, millets:["Ragi","Sorghum (Cholam)"], color:"#D2691E", emoji:"🌿", note:"Salem's semi-arid climate is ideal for Ragi and Sorghum farming practiced by small-scale farmers." },
  { district:"Namakkal", lat:11.2189, lng:78.1674, millets:["Foxtail Millet","Little Millet"], color:"#DAA520", emoji:"🌱", note:"Known for foxtail and little millet cultivation, Namakkal contributes significantly to TN's millet output." },
  { district:"Tiruvannamalai", lat:12.2253, lng:79.0747, millets:["Ragi","Kodo Millet"], color:"#6B8E23", emoji:"🌾", note:"Dryland farming of Ragi and Kodo millet is prominent here, especially in rain-shadow zones." },
  { district:"Vellore", lat:12.9165, lng:79.1325, millets:["Sorghum","Pearl Millet (Kambu)"], color:"#708090", emoji:"🌻", note:"Vellore's northern region has a long tradition of Kambu (Pearl Millet) and Sorghum cultivation." },
  { district:"Madurai", lat:9.9252, lng:78.1198, millets:["Pearl Millet","Sorghum"], color:"#CD853F", emoji:"🍃", note:"Madurai and surrounding areas have rich millet culture tied to local cuisine and traditional farming." },
  { district:"Dindigul", lat:10.3624, lng:77.9695, millets:["Ragi","Thinai (Foxtail)"], color:"#8B6914", emoji:"🌾", note:"Hill-adjacent terrain in Dindigul supports Ragi and traditional Thinai (foxtail millet) cultivation." },
  { district:"Erode", lat:11.3410, lng:77.7172, millets:["Kambu (Pearl Millet)","Little Millet"], color:"#5F9EA0", emoji:"🌱", note:"Erode's agricultural belt grows Kambu and little millet, often used in local folk recipes." },
  { district:"Krishnagiri", lat:12.5186, lng:78.2137, millets:["Ragi","Foxtail Millet"], color:"#8B4513", emoji:"🌿", note:"Bordering Karnataka, Krishnagiri shares the Ragi belt and produces quality finger millet for local markets." },
  { district:"Virudhunagar", lat:9.5851, lng:77.9624, millets:["Sorghum","Bajra"], color:"#B8860B", emoji:"🌻", note:"Southern TN's dryland belt supports sorghum and bajra as hardy crops for food security." }
];

const tnMap = L.map('tnMap',{center:[11.1271,78.6569],zoom:7,zoomControl:true,scrollWheelZoom:false});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:13}).addTo(tnMap);

function makeIcon(color,emoji){
  return L.divIcon({className:'',html:`<div class="map-marker-pin" style="background:${color}">${emoji}</div>`,iconSize:[38,38],iconAnchor:[19,38]});
}

const legendContainer = document.getElementById('mapLegendItems');

tnMilletRegions.forEach(region=>{
  const marker = L.marker([region.lat,region.lng],{icon:makeIcon(region.color,region.emoji)}).addTo(tnMap);
  marker.on('click',()=>{
    document.getElementById('mapInfoDistrict').textContent = `${region.emoji} ${region.district} District`;
    document.getElementById('mapInfoMillets').innerHTML = region.millets.map(m=>`<span class="millet-tag" style="background:${region.color}22;border-color:${region.color}66;color:${region.color}">${m}</span>`).join('');
    document.getElementById('mapInfoNote').textContent = region.note;
    document.getElementById('mapInfoBox').classList.add('visible');
    tnMap.setView([region.lat,region.lng],8,{animate:true});
  });

  const item = document.createElement('div');
  item.className = 'legend-item';
  item.innerHTML = `<span class="legend-dot" style="background:${region.color}"></span><span class="legend-label">${region.district}</span>`;
  item.addEventListener('click', () => marker.fire('click'));
  legendContainer.appendChild(item);
});

// ===== APP.JS — Millet Section =====

// ── Image helpers ──

function milletImgHTML(m) {
  if (m.image) {
    return '<img src="' + m.image + '" alt="' + m.name + '" class="card-img" onerror="this.style.display=\'none\'">';
  }
  return '<div class="card-img-placeholder" style="background:linear-gradient(135deg,' + m.color + '25,' + m.color + '55);"><span class="card-img-emoji">' + m.emoji + '</span></div>';
}

function recipeImgHTML(recipe, color) {
  if (recipe.image) {
    return '<img src="' + recipe.image + '" alt="' + recipe.name + '" class="recipe-img" onerror="this.style.display=\'none\'">';
  }
  return '<div class="recipe-img-placeholder" style="background:linear-gradient(135deg,' + color + '20,' + color + '45);"><span class="recipe-img-emoji">🍽</span></div>';
}

// ── Render Millet Cards ──
function renderCards() {
  const grid = document.getElementById('milletsGrid');
  grid.innerHTML = '';
  MILLETS.forEach((m) => {
    const card = document.createElement('div');
    card.className = 'millet-card';
    card.style.setProperty('--card-color', m.color);
    card.innerHTML = `
      <div class="card-color-bar"></div>
      ${milletImgHTML(m)}
      <div class="card-body">
        <div class="card-header-row">
          <div>
            <div class="card-name">${m.name}</div>
            <div class="card-aka">${m.aka}</div>
          </div>
        </div>
        <div class="card-desc">${m.description}</div>
        <div class="card-tags">${m.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
        <div class="card-foot">
          <span class="card-link">View Details →</span>
          <span class="card-count">${m.recipes.length} recipes</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openPanel(m));
    grid.appendChild(card);
  });
}

// ── Detail Panel ──
let activeRecipeIndex = 0;
let activeMillet = null;

function openPanel(millet) {
  activeMillet = millet;
  activeRecipeIndex = 0;
  const panel = document.getElementById('detailPanel');
  panel.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  document.getElementById('panelEmoji').textContent = millet.emoji;
  document.getElementById('panelName').textContent = millet.name;
  document.getElementById('panelTagline').textContent = millet.tagline;

  switchTab('nutrition');
}

function closePanel() {
  document.getElementById('detailPanel').classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('detailPanel').addEventListener('click', (e) => {
  if (e.target === document.getElementById('detailPanel')) closePanel();
});

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    const tabs = ['nutrition', 'benefits', 'recipes'];
    btn.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');

  if (tab === 'nutrition') renderNutrition(activeMillet);
  if (tab === 'benefits')  renderBenefits(activeMillet);
  if (tab === 'recipes')   renderRecipes(activeMillet);
}

function renderNutrition(millet) {
  const container = document.getElementById('nutrientBars');
  container.innerHTML = '';
  Object.entries(millet.nutrition).forEach(([key, data]) => {
    const pct = Math.min((data.value / data.max) * 100, 100);
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    const row = document.createElement('div');
    row.className = 'nutrient-row';
    row.innerHTML = `
      <div class="nutrient-meta">
        <span class="nutrient-name">${label}</span>
        <span class="nutrient-val">${data.value}${data.unit}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:0%" data-target="${pct}%"></div>
      </div>
    `;
    container.appendChild(row);
  });
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.target;
    });
  }, 50);
}

function renderBenefits(millet) {
  const container = document.getElementById('benefitsList');
  container.innerHTML = millet.benefits.map(b => `
    <div class="benefit-item">
      <div class="benefit-icon">${b.icon}</div>
      <div class="benefit-title">${b.title}</div>
      <div class="benefit-text">${b.text}</div>
    </div>
  `).join('');
}

function renderRecipes(millet) {
  const selector = document.getElementById('recipeSelector');
  selector.innerHTML = millet.recipes.map((r, i) => `
    <button class="recipe-btn ${i === activeRecipeIndex ? 'active' : ''}"
      onclick="selectRecipe(${i})">${r.name}</button>
  `).join('');
  showRecipe(millet.recipes[activeRecipeIndex]);
}

function selectRecipe(index) {
  activeRecipeIndex = index;
  document.querySelectorAll('.recipe-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  showRecipe(activeMillet.recipes[index]);
}

function showRecipe(recipe) {
  const container = document.getElementById('recipeDetail');
  container.innerHTML = `
    ${recipeImgHTML(recipe, activeMillet.color)}
    <div class="recipe-title">${recipe.name}</div>
    <div class="recipe-meta-row">
      <div class="recipe-meta">⏱ Time: <span>${recipe.time}</span></div>
      <div class="recipe-meta">🍽 Serves: <span>${recipe.servings}</span></div>
      <div class="recipe-meta">📊 Level: <span>${recipe.difficulty}</span></div>
    </div>
    <div class="recipe-section-title">Ingredients</div>
    <div class="ingredient-list">
      ${recipe.ingredients.map(ing => `
        <div class="ingredient-row">
          <span class="ing-name">${ing.name}</span>
          <span class="ing-amount">${ing.amount}</span>
        </div>
      `).join('')}
    </div>
    <div class="recipe-section-title">Method</div>
    <div class="steps-list">
      ${recipe.steps.map((step, i) => `
        <div class="step-item">
          <div class="step-num">${i + 1}</div>
          <div class="step-text">${step}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});

