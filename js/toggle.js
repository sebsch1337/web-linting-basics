export default function toggleButton() {
  const cards = document.querySelectorAll('[data-js="card"]');
  //const button = cards.querySelectorAll('[data-js="button"]');
  cards.forEach(card => {
    const button = card.querySelector('[data-js="button"]');
    const link = card.querySelector('[data-js="link"]');
    const arrow = card.querySelector('[data-js="arrow"]');
    button.addEventListener('click', () => {
      link.classList.toggle('hidden');
      arrow.classList.toggle('rotate');
    });
  });
}
