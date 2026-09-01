// map.js - Millet Tamil Nadu (Leaflet Map Integration)

document.addEventListener('DOMContentLoaded', () => {
    initMap();
});

function initMap() {
    // Ensure the map container exists on the page
    const mapContainer = document.getElementById('tnMap');
    if (!mapContainer) return;

    // Initialize Leaflet map centered on Tamil Nadu (Coordinates: ~11.1271, 78.6569)
    const tnMap = L.map('tnMap').setView([11.1271, 78.6569], 7);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(tnMap);

    // Define key millet growing regions in Tamil Nadu
    const milletRegions = [
        {
            name: "Villupuram",
            coords: [11.9401, 79.4861],
            millets: "Kambu (Pearl Millet), Varagu (Kodo Millet)",
            description: "Known for extensive cultivation of Pearl Millet and Kodo Millet under dryland farming conditions."
        },
        {
            name: "Jawadhu Hills",
            coords: [12.5833, 78.8833],
            millets: "Samai (Little Millet), Thinai (Foxtail Millet)",
            description: "Hilly terrain ideal for cultivating nutritious small millets practiced by traditional tribal farmers."
        },
        {
            name: "Dharmapuri",
            coords: [12.1238, 78.1582],
            millets: "Ragi (Finger Millet), Cholam (Sorghum)",
            description: "A major hub for Finger Millet and Sorghum production in North-Western Tamil Nadu."
        },
        {
            name: "Ariyalur",
            coords: [11.1401, 79.0789],
            millets: "Kambu, Varagu, and Cholam",
            description: "Thrives on rainfed black and red soils well-suited for hardy coarse grains."
        },
        {
            name: "Theni",
            coords: [9.7087, 77.4722],
            millets: "Panivaragu (Proso Millet) & Ragi",
            description: "Grown across the Western Ghat foothills taking advantage of favorable micro-climates."
        }
    ];

    // Loop through regions and add interactive markers with custom popups
    milletRegions.forEach(region => {
        const marker = L.marker(region.coords).addTo(tnMap);
        
        const popupContent = `
            <div style="font-family: 'Outfit', sans-serif; padding: 4px; max-width: 200px;">
                <h4 style="margin: 0 0 4px 0; color: #1b4332; font-size: 13.5px; text-transform: uppercase;">🌾 ${region.name}</h4>
                <p style="margin: 0 0 4px 0; font-size: 11.5px; font-weight: 600; color: #d4a373;">Key Millets: ${region.millets}</p>
                <p style="margin: 0; font-size: 11px; color: #444; line-height: 1.4;">${region.description}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });
}
