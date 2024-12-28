import './tailwind.css';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn');
  if (button) {
    button.addEventListener('click', () => {
      alert('Tailwind and JavaScript are working!');
    });
  }
});
