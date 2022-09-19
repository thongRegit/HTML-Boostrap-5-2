/* Animation for header when scroll */
var prevScrollPos = window.pageYOffset;
var header = document.querySelector('.header');
var heightHeader = header.offsetHeight;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) { // Srcoll up    
        if (currentScrollPos <= heightHeader) {
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
        }
        else {
            header.classList.add("scroll-up");
            header.classList.remove("scroll-down");
        }
    } else { // Scroll down
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
    }
    prevScrollPos = currentScrollPos;

}

/* Actice pagition when click */
var pagitionNumbers = document.querySelectorAll('.pagination-number');

pagitionNumbers.forEach(function (number) {
    number.onclick = function () {
        document.querySelector('.pagination-number.active').classList.remove('active');
        this.classList.add('active');
    }
})

/* Hide, display button search */
var btnSearch = document.querySelector('.btn-search');
var headerSearch = document.querySelector('.header-search');
var tabSearch = document.querySelector('#tab-search');
var btnToggle = document.querySelector('.toggle');
var logoImg = document.querySelector('.img-name-company');
var logoText = document.querySelector('.name-company');

    btnSearch.addEventListener("click", function(event){
        event.preventDefault();
        console.log('tab search', tabSearch);
        console.log('btnToggle', btnToggle);
        headerSearch.classList.toggle("display");
        tabSearch.classList.toggle("display");
        logoImg.classList.toggle("hide");
        logoText.classList.toggle("hide");
        btnToggle.classList.toggle("hide");
  });
