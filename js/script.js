let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .nav");
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('icon-cross');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('icon-cross');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}