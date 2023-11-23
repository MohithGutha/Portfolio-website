function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open'); // toggle between menu open and close
    icon.classList.toggle('open'); // toggle between hamburger and cross icon

}