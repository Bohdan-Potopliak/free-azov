import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';

const apiUrl = 'https://portfolio-js.b.goit.study/api/reviews';
const cardsContainer = document.querySelector('.cards');

async function fetchData() {
  const { data } = await axios(apiUrl);
  return data;
}

fetchData()
  .then(data => {
    cardsContainer.insertAdjacentHTML('beforeend', createCards(data));
  })
  .catch(error => {
    let serverError = error;

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && serverError) {
          showError('Виникли проблеми з отриманням даних із сервера.');
          cardsContainer.insertAdjacentHTML(
            'beforeend',
            `<p class="not-found"> Not found</p>`
          );
          serverError = null;
          observer.disconnect();
        }
      });
    });

    const reviewsSection = document.getElementById('reviews');
    observer.observe(reviewsSection);
  });

function createCards(arr) {
  return arr
    .map(
      ({ author, avatar_url, review }) => `
    <li class="card swiper-slide">
    <img src="${avatar_url}" alt="Author's photo" class="card-img">
    <div class="card-content">
    <p class="common-headers">${author}</p>
    <p class="common-text"> ${review}</p>
    </div>
    </li>
    `
    )
    .join('');
}

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlidesBounds: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

document.addEventListener('keydown', event => {
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

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}
