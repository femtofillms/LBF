document.addEventListener("DOMContentLoaded", function() {
  const images = [
    "images/ETALOS_GRIBOUILLE_V1_1.34.1.PRE.jpg",
    "images/ETALOS_GRIBOUILLE_V1_1.15.1.PRE.jpg",
    "images/PULSION_ETALOS_V1_1.24.1.png",
    "images/PULSION_ETALOS_V1_1.20.1.png",
    "images/PULSION_ETALOS_V1_1.42.1.png",
    "images/PULSION_ETALOS_V1_1.73.1.png",
    "images/PULSION_ETALOS_V1_2.1.1.png",
    "images/ETALOS_RUPTUR_VDEF_1.41.1.png",
    "images/ETALOS_RUPTUR_VDEF_1.117.1.png",
    "images/ETALOS_RUPTUR_VDEF_1.126.1.png",
    "images/ETALOS_ADLC_V1_1.30.1.jpg",
    "images/ETALOS_ADLC_V1_1.34.1.jpg",
    "images/DSC01970.JPG",
    "images/IMG_3622.jpg",
    "images/DSC03241.JPG",
    "images/IMG_3851.jpg",
    "images/Photo 16-03-2024 08 56 01.jpg"
  ];

  const placements = [
    // Bande du haut (décalage régulier)
    {left: "1%",  top: "2%",  width: 400, height: 400},    // carré haut gauche
    {left: "27%", top: "2%",  width: 440, height: 240},    // horizontal haut centre-gauche
    {left: "56%", top: "2%",  width: 260, height: 420},    // vertical haut centre-droit
    {left: "78%", top: "4%",  width: 280, height: 280},    // carré haut droite
  
    // Côté gauche (plus bas)
    {left: "3%",  top: "48%", width: 220, height: 400},    // vertical centre-gauche
    {left: "2%",  top: "82%", width: 320, height: 200},    // horizontal bas gauche
    {left: "20%", top: "64%", width: 220, height: 320},    // vertical bas centre-gauche
  
    // Côté droit
    {left: "78%", top: "40%", width: 220, height: 400},    // vertical centre-droite
    {left: "80%", top: "70%", width: 320, height: 180},    // horizontal bas droite
    {left: "65%", top: "77%", width: 200, height: 280},    // vertical bas centre-droit
  
    // Bande du bas
    {left: "32%", top: "90%", width: 520, height: 160},    // horizontal bas centre
    {left: "56%", top: "91%", width: 220, height: 220},    // carré bas centre-droit
  
    // Autour du logo, espacés et décalés
    {left: "46%", top: "25%", width: 180, height: 180},    // petit carré, au-dessus du logo
    {left: "60%", top: "45%", width: 180, height: 260},    // vertical proche du logo, à droite
    {left: "36%", top: "54%", width: 220, height: 160},    // horizontal, proche du logo, à gauche
    {left: "20%", top: "40%", width: 180, height: 200},    // vertical proche logo, bas droit
    {left: "20%", top: "7%", width: 200, height: 200}     // carré sous le logo
  ];
  
  

  const scale = 1; // Essaie 1.3, 1.5, 2... selon ton besoin
placements.forEach(p => {
  p.width = Math.round(p.width * scale);
  p.height = Math.round(p.height * scale);
});


  const container = document.getElementById("collage-container");
  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "photo collage";
    img.className = "collage-photo";
    const pos = placements[i] || {};
    img.style.left = pos.left || "50%";
    img.style.top = pos.top || "50%";
    img.style.width = (pos.width||200)+"px";
    img.style.height = (pos.height||200)+"px";
    container.appendChild(img);
  });
});
