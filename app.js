function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const hbMenu = document.querySelector('.hb-menu');
    menu.classList.toggle('open');
    hbMenu.classList.toggle('open');
}