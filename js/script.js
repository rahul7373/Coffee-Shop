let navbar = document.querySelector(".navbar");
let icons = document.querySelector(".icons");
let search = document.querySelector(".search");
let cart = document.querySelector(".cart");

let searchBtn = document.querySelector("#search-btn");
let cartBtn = document.querySelector("#cart-btn");
let menuBtn = document.querySelector("#menu-btn");
let cancelBtn = document.querySelector("#cancel-btn");



menuBtn.onclick = function(){
    navbar.classList.add("active");
    icons.classList.add("active");
    search.classList.remove('active');
    cart.classList.remove('active');
}

cancelBtn.onclick = function(){
    navbar.classList.remove("active")
    icons.classList.remove("active")
}

searchBtn.onclick = function(){
    search.classList.toggle('active');
    navbar.classList.remove("active");
    icons.classList.remove("active");
    cart.classList.remove('active');
}

cartBtn.onclick = function(){
    cart.classList.toggle('active');
    navbar.classList.remove("active");
    icons.classList.remove("active");
    search.classList.remove('active');
}

window.onscroll = () => {
    cart.classList.remove('active');
    navbar.classList.remove("active");
    icons.classList.remove("active");
    search.classList.remove('active');
}



