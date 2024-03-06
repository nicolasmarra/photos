let currentImgIndex = 0
let currentVille = "Strasbourg"

let touchstartX = 0
let touchEndX = 0

const currentPage = document.location.pathname.split('/').pop();

const images_index = [
  {
    src: "./assets/home/Vendeur.JPG",
    description: "Feira do Relógio - Lisboa 2022"
  },
  {
    src: "./assets/home/Fille.JPG",
    description: "Feira do Relógio - Lisboa 2022"
  },
  {
    src: "./assets/home/Metz.JPG",
    description: "Metz 2022"
  },
  {
    src: "./assets/home/Gare_Metz.JPG",
    description: "Gare de Metz - Metz 2022"
  },
  {
    src: "./assets/home/winstonchurchill.JPG",
    description: "Winston Churchil - Strasbourg 2022"
  },
  {
    src: "./assets/home/Paris.JPG",
    description: "Paris 2022"
  },
  {
    src: "./assets/home/Avenida.JPG",
    description: "Avenida da Liberdade - Lisboa 2022"
  },
  {
    src: "./assets/home/Lisboa.JPG",
    description: "Lisboa 2022"
  },
  {
    src: "./assets/home/rue.JPG",
    description: "Rue - Strasbourg 2022"
  },
  {
    src: "./assets/home/couple.JPG",
    description: "Couple amoureux - Strasbourg 2022"
  }
];

const images_gallery = {
  Strasbourg: [
    { src: "./assets/Strasbourg/Strasbourg_4.JPG", description: "Couple amoureux - Strasbourg 2022" },
    { src: "./assets/Strasbourg/Strasbourg_3.JPG", description: "Couple amoureux - Strasbourg 2022" },
    { src: "./assets/Strasbourg/Strasbourg_7.JPG", description: "Couple amoureux - Strasbourg 2022"},
    { src: "./assets/Strasbourg/Strasbourg_2.JPG", description: "Couple amoureux - Strasbourg 2022"},
    { src: "./assets/Strasbourg/Strasbourg_8.JPG", description: "Enfants joyeux  - Strasbourg 2022"},
    { src: "./assets/Strasbourg/Strasbourg_10.JPG", description: "Jeune allongé - Strasbourg 2022"},
    { src: "./assets/Strasbourg/Strasbourg_5.JPG", description: "SDF - Strasbourg 2022"},
    { src: "./assets/Strasbourg/Strasbourg_9.JPG", description: "Rue - Strasbourg 2022"},
    { src: "./assets/Strasbourg/Strasbourg_11.JPG", description: "Voiture - Strasbourg 2022"},
    { src: "./assets/Strasbourg/Strasbourg_1.JPG", description: "Winston Churchil - Strasbourg 2022"}
  ],
  Paris: [
    { src: "./assets/Paris/Paris_1.JPG", description: "Paris 2022" },
    { src: "./assets/Paris/Paris_2.JPG", description: "Paris 2022" }
  ],
  Metz: [
    { src: "./assets/Metz/Metz_1.JPG", description: "Metz 2022" },
    { src: "./assets/Metz/Metz_2.JPG", description: "Metz 2022" },
    { src: "./assets/Metz/Metz_3.JPG", description: "Metz 2022" },
    { src: "./assets/Metz/Metz_4.JPG", description: "Metz 2022" },
    { src: "./assets/Metz/Metz_5.JPG", description: "Metz 2022" },
    { src: "./assets/Metz/Metz_6.JPG", description: "Metz 2022" }
  ],
  Lisbonne: [
    { src: "./assets/Lisbonne/Lisbonne_1.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_2.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_3.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_4.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_5.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_6.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_7.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_8.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_9.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_10.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_11.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_12.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_13.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_14.JPG", description: "Lisbonne 2022" },
    { src: "./assets/Lisbonne/Lisbonne_15.JPG", description: "Lisbonne 2022" }
    
  ]
};


const fullImgBox = document.getElementById('full_img_box')
const fullImg = document.getElementById('full_img')
const span = document.getElementById('description')

const footer = document.getElementById('footer')
const main = document.getElementById('photos')
const menu = document.getElementById('menu')
const open_menu = document.getElementById('open_menu')


function CloseImgBox() {
  fullImgBox.style.display = 'none'
}

function OpenFullImg(source, description) {
  fullImgBox.style.display = 'flex'
  fullImg.src = source
  span.innerHTML = description
}

function OnMenu() {
  if (open_menu.classList.contains('close')) {
    main.style.display = 'block'
    footer.style.display = 'block'
    menu.style.display = 'none'
    open_menu.classList.remove('close')
    open_menu.classList.add('open')
  } else {
    main.style.display = 'none'
    footer.style.display = 'none'
    menu.style.display = 'flex'
    open_menu.classList.remove('open')
    open_menu.classList.add('close')
  }
}


function SeeCity(nameCity,optionCity){
  
  ClearCity()

  const city = document.getElementById(nameCity)
  currentVille = nameCity
  const optioncity = document.getElementById(optionCity)

  city.classList.add('on')
  optioncity.classList.add('on')
}

function ClearCity(){
  
  const cities = document.querySelectorAll('.city')

  cities.forEach(city =>{
    city.classList.remove('on')
  })

  const links = document.querySelectorAll('.link')

  links.forEach(link =>{
    link.classList.remove('on')
  })
}



function NextImageIndex()
{
  currentImgIndex++
  if (currentImgIndex >= images_index.length) currentImgIndex = 0

  OpenFullImg(images_index[currentImgIndex].src, images_index[currentImgIndex].description)
}

function PrevImageIndex()
{
  currentImgIndex--
  if (currentImgIndex < 0) currentImgIndex = images_index.length - 1

  OpenFullImg(images_index[currentImgIndex].src, images_index[currentImgIndex].description)

}


function NextImageGallery()
{
  const gallery = images_gallery[currentVille]
  currentImgIndex++
  if (currentImgIndex >= gallery.length) currentImgIndex = 0

  OpenFullImg(gallery[currentImgIndex].src, gallery[currentImgIndex].description)
}

function PrevImageGallery()
{
  const gallery = images_gallery[currentVille]
  currentImgIndex--
  if (currentImgIndex < 0) currentImgIndex = gallery.length - 1

  OpenFullImg(gallery[currentImgIndex].src, gallery[currentImgIndex].description)

}

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowLeft') { 
    if (currentPage === 'index.html') PrevImageIndex();
    else if (currentPage === 'gallery.html') PrevImageGallery();
    
  } else if (event.code === 'ArrowRight') { 
    if (currentPage === 'index.html') NextImageIndex();
     else if (currentPage === 'gallery.html') NextImageGallery();
    
  }
});

function handleTouchStart(e)
{
  touchstartX = e.touches[0].clientX;
}

function handleTouchEnd(e)
{
  touchEndX = e.touches[0].clientX;

}

function handleTouchMove()
{
  const limite = 100;

  const diffX = touchEndX - touchstartX;

  if (Math.abs(diffX) > limite)
  {
    if (diffX > 0) {
      if (currentPage === 'index.html') PrevImageIndex();
      else if (currentPage === 'gallery.html') PrevImageGallery();
    } else {
      if (currentPage === 'index.html') NextImageIndex();
      else if (currentPage === 'gallery.html') NextImageGallery();
    }
  }
}

const images = document.querySelectorAll('.img');
images.forEach(img => {
  img.addEventListener('click', function() {
    img.addEventListener('touchstart', handleTouchStart);
    img.addEventListener('touchend', handleTouchEnd);
    img.addEventListener('touchmove', handleTouchMove);
  })
})
