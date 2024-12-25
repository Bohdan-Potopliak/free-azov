`use strict`;
import './js/reviews';
import './js/projects';
import { coverImages } from './js/covers/img-import';
import { shuffleArray, initializeCovers } from './js/covers/covers';
document.addEventListener('DOMContentLoaded', () => {
  initializeCovers();
});

import './js/about-me';
import './js/work-together/work-together';
import './js/work-together/work-together-api';
import './js/work-together/toast-helper';
import './js/faq-accordion';
