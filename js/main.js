document.getElementById('mobile-menu').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
    
});
// RECOMMENDED IMAGE SLIDE START

document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const carouselInner = document.querySelector('.carousel-inner1');
    const items = document.querySelectorAll('.carousel-item1');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 300; // 300 is the width of each carousel item
        carouselInner.style.transform = `translateX(${offset}px)`;
    }
});


// RECOMMENDED IMAGE SLIDE END
// RECOMMENDED IMAGE SLIDE 2 START

document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn1');
    const prevBtn = document.getElementById('prevBtn1');
    const carouselInner = document.querySelector('.carousel-inner2');
    const items = document.querySelectorAll('.carousel-item2');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 300; // 300 is the width of each carousel item
        carouselInner.style.transform = `translateX(${offset}px)`;
    }
});

// STREAM PAGE JS

// let currentIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-item');
//     const totalSlides = slides.length;

//     if (index >= totalSlides) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = totalSlides - 1;
//     } else {
//         currentIndex = index;
//     }

//     const offset = -currentIndex * 100;
//     document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn2');
    const prevBtn = document.getElementById('prevBtn2');
    const carouselInner = document.querySelector('.carousel-inner2');
    const items = document.querySelectorAll('.carousel-item2');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 300; // 300 is the width of each carousel item
        carouselInner.style.transform = `translateX(${offset}px)`;
    }
});
// slider 3
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn3');
    const prevBtn = document.getElementById('prevBtn3');
    const carouselInner = document.querySelector('.carousel-inner3');
    const items = document.querySelectorAll('.carousel-item3');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 300; // 300 is the width of each carousel item
        carouselInner.style.transform = `translateX(${offset}px)`;
    }
});
// slider 4
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('nextBtn4');
    const prevBtn = document.getElementById('prevBtn4');
    const carouselInner = document.querySelector('.carousel-inner4');
    const items = document.querySelectorAll('.carousel-item4');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 300; // 300 is the width of each carousel item
        carouselInner.style.transform = `translateX(${offset}px)`;
    }
});