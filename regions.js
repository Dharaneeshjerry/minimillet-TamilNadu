const REGIONS = {
  villupuram: {
    name: "Villupuram",
    tagline: "Plains belt — Kambu, Ragi & Varagu",
    millets: ["Kambu (Pearl Millet)", "Ragi (Finger Millet)", "Varagu (Kodo Millet)"],
    recipes: [
      { name: "Kambu Koozh", desc: "Fermented pearl millet porridge — the traditional Villupuram staple." },
      { name: "Ragi Kali", desc: "Steamed ragi dumplings served with a spicy kara kuzhambu." },
      { name: "Varagu Rice", desc: "Kodo millet cooked plain, used as a substitute for polished rice." }
    ],
    videos: ["Kambu Koozh Preparation", "Millets of Villupuram — Farmer Interview"]
  },
  jawadhar: {
    name: "Jawadhar Hills",
    tagline: "Tribal hill belt — Kuthiraivali, Panivaragu & Ragi",
    millets: ["Kuthiraivali (Barnyard Millet)", "Panivaragu (Proso Millet)", "Ragi (Finger Millet)"],
    recipes: [
      { name: "Kuthiraivali Upma", desc: "A quick, everyday barnyard millet breakfast." },
      { name: "Panivaragu Payasam", desc: "A festive proso millet sweet made with jaggery." },
      { name: "Ragi Kanji", desc: "A simple porridge traditionally eaten by the Malayali tribal community." }
    ],
    videos: ["Shifting Cultivation in Jawadhar Hills", "Kuthiraivali Upma Recipe"]
  },
  dharmapuri: {
    name: "Dharmapuri",
    tagline: "Red-soil hills — Ragi, Thinai & Samai",
    millets: ["Ragi (Finger Millet)", "Thinai (Foxtail Millet)", "Samai (Little Millet)"],
    recipes: [
      { name: "Ragi Mudde", desc: "Steamed ragi balls eaten with sambar — a Dharmapuri classic." },
      { name: "Thinai Pongal", desc: "Foxtail millet cooked with jaggery and moong dal." },
      { name: "Samai Idli", desc: "Soft steamed idlis made from fermented little millet batter." }
    ],
    videos: ["Ragi Mudde Recipe", "Millet Farming in Dharmapuri"]
  }
};

function openRegion(key) {
  const r = REGIONS[key];
  if (!r) return;

  document.getElementById('regionName').textContent = r.name;
  document.getElementById('regionTagline').textContent = r.tagline;

  document.getElementById('regionMillets').innerHTML =
    r.millets.map(m => `<span class="region-tag">${m}</span>`).join('');

  document.getElementById('regionRecipes').innerHTML =
    r.recipes.map(rec => `
      <div class="region-recipe-item">
        <div class="region-recipe-name">${rec.name}</div>
        <div class="region-recipe-desc">${rec.desc}</div>
      </div>
    `).join('');

  document.getElementById('regionVideos').innerHTML =
    r.videos.map(v => `
      <div class="region-video-card">
        <div class="region-video-placeholder">▶ Play Video</div>
        <div class="region-video-title">${v}</div>
      </div>
    `).join('');

  document.getElementById('regionPanel').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeRegionPanel() {
  document.getElementById('regionPanel').classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('regionPanel').addEventListener('click', (e) => {
  if (e.target.id === 'regionPanel') closeRegionPanel();
});
