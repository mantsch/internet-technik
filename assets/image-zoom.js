/* wait till website is loaded */
document.addEventListener('DOMContentLoaded', websiteLoaded);

function websiteLoaded() {
  if (document.querySelector('.image-gallery')) {
    generateGalleryZoom();
  }
}

function generateGalleryZoom() {
  const images = document.querySelectorAll('.image-gallery img');
  console.log(images);

  for (let i = 0; images.length > i; i++) {
    images[i].onclick = function () {
      this.classList.toggle('zoom');
    };
  }
}
