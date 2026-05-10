document.querySelectorAll('.card-header').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.card').classList.toggle('open');
  });
});