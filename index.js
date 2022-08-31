const mob_nav=document.querySelector(".mobile-btn");
const mob_header=document.querySelector(".header");

const toggleNavbar=()=>{
    mob_header.classList.toggle('active');
}

mob_nav.addEventListener('click',()=>toggleNavbar());