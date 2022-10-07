const fullImgBox = document.getElementById('full_img_box')
const fullImg = document.getElementById('full_img')

function CloseImgBox() {
  fullImgBox.style.display = 'none'
}

function OpenFullImg(reference) {
  fullImgBox.style.display = 'flex'
  fullImg.src = reference
}
