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


/*---------------- 
 Language Dropdown 
-----------------*/

// Show Language Dropdown Menu
function toggleLanguageDropdown() {
    let dropdown = document.querySelector('.lang-dropdown-menu')
    // dropdown.style.display = 'flex'

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}


/*-------------------- 
  Home : Image Slider
---------------------*/
const sliderTrack = document.querySelectorAll('image-slider');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    sliderTrack.forEach((slide) => {
        slide.setAttribute('data-animated: true');

        const infiniteScroll = sliderTrack.querySelector(".infinite__scroll");
        const scrollContent = Array.from(infiniteScroll.children);

        scrollContent.forEach((scroll) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            infiniteScroll.append(duplicatedItem)
        });
    });
}


/*--------------------- 
  Home : Video Gallery
----------------------*/
let videoSlider = document.querySelector(".video-slider");
let prevBtn = document.getElementById("video-slider-btn-left");
let nextBtn = document.getElementById("video-slider-btn-right");

videoSlider.addEventListener("wheel", (e) => {
    e.preventDefault();
    videoSlider.scrollLeft += e.deltaY;
    videoSlider.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    videoSlider.scrollLeft += 512;
    videoSlider.style.scrollBehavior = "smooth";
});

prevBtn.addEventListener("click", () => {
    videoSlider.scrollLeft -= 512;
    videoSlider.style.scrollBehavior = "smooth";
});

let reelSlider = document.querySelector(".reel-slider");
let prevReelBtn = document.getElementById("reel-slider-btn-left");
let nextReelBtn = document.getElementById("reel-slider-btn-right");

reelSlider.addEventListener("wheel", (e) => {
    e.preventDefault();
    reelSlider.scrollLeft += e.deltaY;
    reelSlider.style.scrollBehavior = "auto";
});

nextReelBtn.addEventListener("click", () => {
    reelSlider.scrollLeft += (240 + 16);
    reelSlider.style.scrollBehavior = "smooth";
});

prevReelBtn.addEventListener("click", () => {
    reelSlider.scrollLeft -= (240 + 16);
    reelSlider.style.scrollBehavior = "smooth";
});


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



