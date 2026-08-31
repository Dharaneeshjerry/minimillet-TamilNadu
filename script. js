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
