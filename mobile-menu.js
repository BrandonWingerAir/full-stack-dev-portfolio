const mobileMenu = () => {
    var menuButton = document.querySelector('.menu-icon');
    var iosButton = document.querySelector('.ios-menu-icon');

    var path1 = document.querySelector('.path1');
    var path2 = document.querySelector('.path2');
    var mline = document.querySelector('.mline');

    var menu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click',() => {     
        path1.classList.toggle('cross');
        path2.classList.toggle('cross');
        mline.classList.toggle('hide');
        menu.classList.toggle('open-menu');
    });

    iosButton.addEventListener('click',() => {
        if (iosButton.src.indexOf('icons/ios-mobile-menu.svg') > 0) {
            iosButton.src = 'icons/ios-close-menu.svg';
        } else {
            iosButton.src = 'icons/ios-mobile-menu.svg'
        }

        menu.classList.toggle('open-menu');
    });
};

mobileMenu();