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
