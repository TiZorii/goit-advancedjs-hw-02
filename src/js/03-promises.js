import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstDelay = parseInt(this.elements['delay'].value, 10);
    const step = parseInt(this.elements['step'].value, 10);
    const amount = parseInt(this.elements['amount'].value, 10);

    generatePromises(firstDelay, step, amount);
  });
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      const result = { position, delay };

      if (shouldResolve) {
        // Fulfill
        resolve(result);
      } else {
        // Reject
        reject(result);
      }
    }, delay);
  });
}

function generatePromises(firstDelay, step, amount) {
  const promises = [];

  for (let i = 1; i <= amount; i++) {
    const currentDelay = firstDelay + (i - 1) * step;
    const promise = createPromise(i, currentDelay);

    promise
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Fulfilled',
          message: `Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Rejected',
          message: `Rejected promise ${position} in ${delay}ms`,
        });
      });

    promises.push(promise);
  }

  Promise.allSettled(promises).then(() => {
    iziToast.info({
      title: 'All promises completed',
      message: 'All promises have been either fulfilled or rejected.',
    });
  });
}