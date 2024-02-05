const menuMobile = document.getElementById('menu-mobile');
const menuLink = document.getElementById('menu-link-mobile');
const main = document.getElementById('main');
menuMobile.addEventListener('click', function(){
    menuLink.style.display = menuLink.style.display ===  'flex' ? 'none' : 'flex';
 main.style.marginTop = main.style.marginTop === '170px' ? '100px': '170px';
}
)