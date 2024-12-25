import Swiper from 'swiper/bundle';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperProjects = new Swiper('.swiper' && '.swiper-projects', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    modules: [Navigation, Keyboard ],
    speed: 500,
     keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlidesBounds: true,
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
});

document.querySelectorAll('.project-btn').forEach((button) => {
    button.addEventListener('click', () => {
        window.open('https://github.com/Bohdan-Potopliak/free-azov', '_blank');
    });
});