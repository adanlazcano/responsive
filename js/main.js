window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

const toggleMenu = () => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active');
}
menuToggle.addEventListener('click', toggleMenu);

window.addEventListener('click',(e)=>{
   
    if(e.target.nodeName === 'A'){
    menuToggle.classList.remove('active')
    navigation.classList.remove('active');
    }
})