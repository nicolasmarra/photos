let currentImgIndex = 0
let currentImgIndex_Gallery = 0
let currentVille = "Strasbourg"
let images_index = [];

let defilement_image = false;
var intervalId = null;


const currentPage = window.location.pathname
let element_body = document.body

const ongoingTouches = [];

const images_gallery = {
  Strasbourg: [
    { src: "./assets/Strasbourg/Strasbourg_4.jpeg", description: "Couple amoureux - Strasbourg 2022", index: false },
    { src: "./assets/Strasbourg/Strasbourg_3.jpeg", description: "Couple amoureux - Strasbourg 2022",index:true },
    { src: "./assets/Strasbourg/Strasbourg_7.jpeg", description: "Couple amoureux - Strasbourg 2022", index: false},
    { src: "./assets/Strasbourg/Strasbourg_2.jpeg", description: "Couple amoureux - Strasbourg 2022", index: false},
    { src: "./assets/Strasbourg/Strasbourg_8.jpeg", description: "Enfants joyeux  - Strasbourg 2022", index: false},
    { src: "./assets/Strasbourg/Strasbourg_10.jpeg", description: "Jeune allongé - Strasbourg 2022", index: false},
    { src: "./assets/Strasbourg/Strasbourg_5.jpeg", description: "SDF - Strasbourg 2022", index: false},
    { src: "./assets/Strasbourg/Strasbourg_9.jpeg", description: "Rue - Strasbourg 2022", index:true},
    { src: "./assets/Strasbourg/Strasbourg_11.jpeg", description: "Voiture - Strasbourg 2022", index: false},
    { src: "./assets/Strasbourg/Strasbourg_1.jpeg", description: "Winston Churchil - Strasbourg 2022", index: true}
  ],
  Paris: [
    { src: "./assets/Paris/Paris_1.jpeg", description: "Paris 2022", index: true },
    { src: "./assets/Paris/Paris_2.jpeg", description: "Paris 2022", index: false }
  ],
  Metz: [
    { src: "./assets/Metz/Metz_1.jpeg", description: "Metz 2022", index: true},
    { src: "./assets/Metz/Metz_2.jpeg", description: "Metz 2022", index: true},
    { src: "./assets/Metz/Metz_3.jpeg", description: "Metz 2022", index: false},
    { src: "./assets/Metz/Metz_4.jpeg", description: "Metz 2022", index: false},
    { src: "./assets/Metz/Metz_5.JPG", description: "Metz 2022", index: false },
    { src: "./assets/Metz/Metz_6.jpeg", description: "Metz 2022", index: false }
  ],
  Lisbonne: [
    { src: "./assets/Lisbonne/Lisbonne_1.jpeg", description: "Lisbonne 2022", index: true },
    { src: "./assets/Lisbonne/Lisbonne_2.JPG", description: "Lisbonne 2022", index: true },
    { src: "./assets/Lisbonne/Lisbonne_3.jpeg", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_4.JPG", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_5.jpeg", description: "Lisbonne 2022", index: true },
    { src: "./assets/Lisbonne/Lisbonne_6.jpeg", description: "Lisbonne 2022", index: true },
    { src: "./assets/Lisbonne/Lisbonne_7.jpeg", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_8.jpeg", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_9.jpeg", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_10.jpeg", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_11.jpeg", description: "Lisbonne 2022", index: true },
    { src: "./assets/Lisbonne/Lisbonne_12.jpeg", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_13.jpeg", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_14.JPG", description: "Lisbonne 2022", index: false },
    { src: "./assets/Lisbonne/Lisbonne_15.jpeg", description: "Lisbonne 2022", index: true },
    { src: "./assets/Lisbonne/Lisbonne_16.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_17.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_18.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_19.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_20.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_21.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_22.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_23.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_24.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_25.JPG", description: "Lisbonne 2024", index: false },
    { src: "./assets/Lisbonne/Lisbonne_26.JPG", description: "Lisbonne 2024", index: false }
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
  element_body.style.overflow = 'auto' 
}

function OpenFullImg(source, description) {
  fullImgBox.style.display = 'flex'
  fullImg.src = source
  span.innerHTML = description
  element_body.style.overflow = 'hidden'  
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
  currentImgIndex_Gallery = 0
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
  currentImgIndex_Gallery++
  if (currentImgIndex_Gallery >= gallery.length) currentImgIndex_Gallery = 0

  OpenFullImg(gallery[currentImgIndex_Gallery].src, gallery[currentImgIndex_Gallery].description)
}

function PrevImageGallery()
{
  const gallery = images_gallery[currentVille]
  currentImgIndex_Gallery--
  if (currentImgIndex_Gallery < 0) currentImgIndex_Gallery = gallery.length - 1

  OpenFullImg(gallery[currentImgIndex_Gallery].src, gallery[currentImgIndex_Gallery].description)

}

function defilerImages()
{
    defilement_image = !defilement_image;
    var element_play_button = document.getElementById('play_button');
    var element_pause_button = document.getElementById('pause_button');
    if(defilement_image === true)
    {

      if(currentPage === '/') intervalId = setInterval(NextImageIndex, 3000);
      else if(currentPage.startsWith('/gallery')) intervalId = setInterval(NextImageGallery, 3000);
      else if(currentPage.startsWith('/index')) intervalId = setInterval(NextImageIndex, 3000);
      element_play_button.style.display = 'none';
      element_pause_button.style.display = 'block';


    }
    else 
    {
      clearInterval(intervalId);
      element_play_button.style.display = 'block';
      element_pause_button.style.display = 'none';
    }

}

document.addEventListener('keydown', function(event) {
  
  if (fullImgBox.style.display !== 'flex') return

  if (event.code === 'ArrowLeft') {   

    if(currentPage === '/') PrevImageIndex();
    else if(currentPage.startsWith('/gallery')) PrevImageGallery();
    else if(currentPage.startsWith('/index')) PrevImageIndex();

  } else if (event.code === 'ArrowRight') { 

    if(currentPage === '/') NextImageIndex();
    else if(currentPage.startsWith('/gallery')) NextImageGallery();
    else if(currentPage.startsWith('/index')) NextImageIndex();

  } else if(event.code === 'Escape') {
    if(fullImgBox.style.display === 'flex')
    CloseImgBox();
  }

});

function AddMenuGallery()
{

  const main = document.getElementById('photos')
  const links = document.createElement('div')
  links.className = "links"
  const ul = document.createElement('ul')
  main.appendChild(links)
  links.appendChild(ul)
  
  for (const ville in images_gallery) 
  {
    const li = document.createElement('li')
    li.className = "link"
    li.id = "Option" + ville
    li.onclick = () => SeeCity(ville,li.id)
    li.innerHTML = ville
    ul.appendChild(li)

  }

}

function AddPhotosIndex()
{
  const main = document.getElementById('photos')
  let currentUL = null

  let count = 0
  Object.values(images_gallery).forEach(ville=> {
    ville.forEach(image=>{
    
        
         if(image.index === true)
          {
            if(count % 2 == 0)
            {
              currentUL = document.createElement('ul')
              main.appendChild(currentUL)
            }
          
             const li = document.createElement('li')
             const img = document.createElement('img')
             img.src = image.src
             img.alt = image.description
             img.onclick = () => OpenFullImg(image.src, image.description) 
            
       
            li.appendChild(img)
            currentUL.appendChild(li)
            images_index.push(image)
            count ++
         }
      });
  });
}
function AddPhotosGallery() 
{
  AddMenuGallery()
  const main = document.getElementById('photos')
  let currentUL = null

  for (const ville in images_gallery)
  {
    const villeDiv = document.createElement('div')
    villeDiv.classList.add('city')
    if (ville === 'Strasbourg')
    {
      console.log(ville)
      villeDiv.classList.add('on')
    }
    villeDiv.id = ville
    main.appendChild(villeDiv)

    
    images_gallery[ville].forEach ((image,index) =>  
    {
      if(index % 2 == 0)
      {
        currentUL = document.createElement('ul')
        villeDiv.appendChild(currentUL)
      }
      const li = document.createElement('li')
      const img = document.createElement('img')
      img.src = image.src
      img.alt = image.description
      img.onclick = () => OpenFullImg(image.src, image.description) 
      
      li.appendChild(img)
      currentUL.appendChild(li)
      
    });
  }

  SeeCity('Strasbourg','OptionStrasbourg')
}

function AddPhotosGalleryByVille(ville_affichage)
{
  AddMenuGallery()
  const main = document.getElementById('photos')
  let currentUL = null

  for (const ville in images_gallery)
  {
    const villeDiv = document.createElement('div')
    villeDiv.classList.add('city')
    if (ville === ville_affichage)
    {
      console.log(ville)
      villeDiv.classList.add('on')
    
    villeDiv.id = ville
    main.appendChild(villeDiv)

    
    images_gallery[ville].forEach ((image,index) =>  
    {
      if(index % 2 == 0)
      {
        currentUL = document.createElement('ul')
        main.appendChild(currentUL)
      }
      const li = document.createElement('li')
      const img = document.createElement('img')
      img.src = image.src
      img.alt = image.description
      img.onclick = () => OpenFullImg(image.src, image.description) 
      
      li.appendChild(img);
      currentUL.appendChild(li);
      
    });
  }

}
}

function AddPhotos()
{
  if(currentPage === '/') AddPhotosIndex()
  else if(currentPage.startsWith('/gallery')) AddPhotosGallery()
  else if(currentPage.startsWith('/index')) AddPhotosIndex()
}

function navigation()
{
  
  fullImgBox.addEventListener("touchstart", handleStart);
  fullImgBox.addEventListener("touchend", handleEnd);
  fullImgBox.addEventListener("touchcancel", handleMove);
  fullImgBox.addEventListener("touchmove", handleMove);

  console.log('navigation')
}

document.addEventListener('DOMContentLoaded', AddPhotos);

//document.addEventListener('DOMContentLoaded', navigation);