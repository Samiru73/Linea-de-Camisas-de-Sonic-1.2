ScrollReveal().reveal('header',{ delay: 300});
ScrollReveal().reveal('section',{ delay: 500});
ScrollReveal().reveal('footer',{ delay: 400});

const btnSuich = document.querySelector('#suich');

btnSuich = addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSuich.classList.toggle('active');
});