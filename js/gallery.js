/*---------------- 
 Responsive Navbar 
-----------------*/

// Show Responsive version of Navbar
function showSidenav() {
  const sidebar = document.querySelector('.responsive-nav')
  sidebar.style.display = 'flex'
}

// Hide Responsive version of Navbar
function hideSidenav() {
  const sidebar = document.querySelector('.responsive-nav')
  sidebar.style.display = 'none'
}


// gallery image slider

 // Modal elements
 const modal = document.getElementById("myModal");
 const modalImg = document.getElementById("modal-img");
 const closeImageModalBtn = document.querySelector(".close");
 const nextImageBtn = document.querySelector(".next");
 const prevImageBtn = document.querySelector(".prev");

 const images = document.querySelectorAll(".gallery-item img");
 let currentImageIndex;

 // Open modal and show the clicked image
 images.forEach((img, index) => {
   img.addEventListener("click", () => {
     modal.style.display = "flex";
    //  modal.style.display = "grid";
     modalImg.src = img.src;
     currentImageIndex = index;
   });
 });

 // Close modal
 closeImageModalBtn.addEventListener("click", () => {
   modal.style.display = "none";
 });

 // Navigate to next image
 nextImageBtn.addEventListener("click", () => {
   currentImageIndex = (currentImageIndex + 1) % images.length;
   modalImg.src = images[currentImageIndex].src;
 });

 // Navigate to previous image
 prevImageBtn.addEventListener("click", () => {
   currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
   modalImg.src = images[currentImageIndex].src;
 });

 const galleryItems = document.querySelectorAll('.gallery-item');


 


 /*---------------- 
   Scroll to Top
-----------------*/
const scrollToTop = document.querySelector('.scroll-to-top');
const chatOnWA = document.querySelector('.chat-on-wa');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTop.classList.add("active");
        chatOnWA.classList.add("nudge-up");
    }
    else {
        scrollToTop.classList.remove("active");
        chatOnWA.classList.remove("nudge-up");
    }
})