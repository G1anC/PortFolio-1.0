
// on rajoute un event listener au DOM
document.addEventListener('keydown', (event) => {

    // on recupere le navigation menu
    const nav = document.querySelector('nav');

    // on check si la pressed key est Echap
    if (event.key === 'Escape') {

        // on display la navigation bar
      (nav.style.display === 'none' || !nav.style.display) ?
        nav.style.display = 'block' :
        nav.style.display = 'none';
    }
  });