const BASE = "./img/"; //Ordner
let images = [ //Array edie Bilder und Information enthält
  { file: "fantasy-2925250_1280.jpg", title: "Fantasy-Landschaft", desc: "Burg in einer Fantasiewelt mit Wasserfall." },
  { file: "godafoss-1840758_1280.jpg", title: "Goðafoss Wasserfall", desc: "Breiter Wasserfall in Island." },
  { file: "gothic-3631291_1280.jpg", title: "Gotische Architektur", desc: "Dunkle Kathedrale im Nebel." },
  { file: "hot-air-balloon-2411851_1280.jpg", title: "Heißluftballon", desc: "Ballonfahrt bei Sonnenaufgang." },
  { file: "mountains-9606525_1280.jpg", title: "Bergkette", desc: "Schneebedeckte Gipfel im Abendlicht." },
  { file: "night-2193483_1280.jpg", title: "Sternenacht", desc: "Milchstraße über einem See." },
  { file: "photoshop-4947170_1280.jpg", title: "Digital Art", desc: "Photoshop-Compositing mit Fantasieelementen." },
  { file: "plum-2679782_1280.jpg", title: "Pflaume", desc: "Makroaufnahme einer Pflaume mit Tau." },
  { file: "siberia-9680842_1280.jpg", title: "Sibirische Landschaft", desc: "Gefrorener Fluss im Winter." },
  { file: "sunrise-5084755_1280.jpg", title: "Sonnenaufgang", desc: "Orangefarbener Himmel über einem Feld." }
];

function renderImages() {
  const imgRef = document.getElementById("allpicture");
  imgRef.innerHTML = ""; //entleert 

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    imgRef.innerHTML += `
      <img class="images"
           src="${BASE}${img.file}"
           alt="${img.title}"
           onclick="openImageOverlay(${i})"    
           onerror="console.error('Etwas stimmt nicht:', this.src)">
    `;
  }
}


function openImageOverlay(index) {
  toggleOverlay(true);
  showImageOverlay(index);
}

function toggleOverlay(show) {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("d_none", !show);
}


function showBigImage(index) {
  const { file, title, desc } = images[index];
  document.getElementById("big_picture_section").innerHTML = `   
      <img class="showBigImage" src="${BASE}${file}" alt="${title}">
  `;
}

function showImageInfoWithCloseButton(index) {
  const { title, desc } = images[index]; //Deatils zum Bild
    document.getElementById("info_picture_section").innerHTML =`
    <div class="img_meta">
     <strong class="img_title">${title}</strong><br>
       <small class="img_desc">${desc}</small>
    </div>
    <img onclick="toggleOverlay(false)" id="closebutton" class="overlay_closebutton" src="./img/24490a18-dcbf-4a42-abb4-065c5b14220e.png">
  `;
}


function skipNavigation(index) {
  document.getElementById("left_right_close_section").innerHTML = `
    <img onclick="nextImageL(${index})" class="skip_arrowLeft" src="./img/arrow_left_blue_mystic.png">
    <h3>${index + 1} / ${images.length}</h3>
    <img onclick="nextImageR(${index})" class="skip_arrowRight" src="./img/arrow_right_blue_mystic.png">
  `;
}

const nextImageR = index => showImageOverlay((index + 1) % images.length);//rechts
const nextImageL = index => showImageOverlay((index - 1 + images.length) % images.length);//links

function showImageOverlay(i) {
  skipNavigation(i); //7rechts,links
  showBigImage(i); //zeigt Bild groß
  showImageInfoWithCloseButton(i); //Beschreibung von dem Bild und Kreuz
}
