import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  messageSize: '16px',
  messageLineHeight: '24px',
  position: 'topRight',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

export function showWarning() {
  iziToast.show({
    message: 'Please enter a value.',
    backgroundColor: '#f2ff00',
    messageColor: '#2e2f42',
  });
}
