import Swiper from 'swiper/bundle';
import 'swiper/css'; 

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


document.querySelectorAll('.project-btn').forEach((button) => {
    button.addEventListener('click', () => {
        window.open('https://github.com/Bohdan-Potopliak/free-azov', '_blank');
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        swiper.slideNext();
    } else if (event.key === 'ArrowLeft') {
        swiper.slidePrev();
    } else if (event.key === 'Tab') {
        event.preventDefault();
        if (event.shiftKey) {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    }
});

let startX = 0;
document.querySelector('.swiper').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector('.swiper').addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX) {
        swiper.slideNext();
    } else if (startX < endX) {
        swiper.slidePrev();
    }
});
