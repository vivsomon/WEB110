  const card = document.querySelector('.flip-card');

  card.addEventListener('click', function (event) {
    // If the user tapped a link (or something inside a link), ignore it
    if (event.target.closest('a')) return;

    // "this" also works here and refers to the card
    this.classList.toggle('flipped');
  });