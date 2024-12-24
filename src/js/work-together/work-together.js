import { postRequest } from './work-together-api';

const contactForm = document.querySelector('#work_together_form');

contactForm.addEventListener('input', handleInput);
contactForm.addEventListener('submit', onContactFormSubmit);

const formData = { email: '', comment: '' };

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();

  return;
}

const modalHandler = handleModal();

async function onContactFormSubmit(event) {
  event.preventDefault();
  console.log(1);
  if (!formData.email || !formData.comment) {
    return alert('Fill please all fields');
  }

  try {
    console.log(' formData', formData);
    const response = await postRequest(formData);

    console.log('response', response);
    modalHandler.openModal(response.data.title, response.data.message);
    event.target.reset();
  } catch (error) {
    console.error('error', error);
  }
}

function handleModal() {
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal-messages]');
  const titleField = modal.querySelector('[data-modal-title]');
  const messageField = modal.querySelector('[data-modal-message]');

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });
  modal.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modal.classList.remove('is-open');
    }
  });

  return {
    openModal: (title, message) => {
      if (title) titleField.textContent = title;
      if (message) messageField.textContent = message;

      modal.classList.add('is-open');
    },
    closeModal: () => modal.classList.remove('is-open'),
  };
}
