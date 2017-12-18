    var menuElem = document.getElementById('burger-menu');
    var buttonElem = menuElem.querySelector('.menu__button');

    buttonElem.onclick = function() {
        menuElem.classList.toggle('open');
    };
