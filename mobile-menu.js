const mobileMenu = () => {
    var menuButton = document.querySelector('.menu-icon');
    var iosButton = document.querySelector('.ios-menu-icon');

    var path1 = document.querySelector('.path1');
    var path2 = document.querySelector('.path2');
    var mline = document.querySelector('.mline');

    var slideText1 = document.querySelector('.hero-section h2');
    var slideText2 = document.querySelector('.hero-section h3');
    var slideText3 = document.querySelector('.hero-section h5');

    var menu = document.querySelector('.mobile-menu');

    // Default Button
    menuButton.addEventListener('click',() => {     
        path1.classList.toggle('cross');
        path2.classList.toggle('cross');
        mline.classList.toggle('hide');

        textAnimations();

        menu.classList.toggle('open-menu');
        
        if (menu.classList.contains('mobile-menu-fade-in')) {
            menu.classList.add('mobile-menu-fade-out');
        } else {
            menu.classList.remove('mobile-menu-fade-out')
        }

        menu.classList.toggle('mobile-menu-fade-in');
    });

    // iOS Button
    iosButton.addEventListener('click',() => {
        if (iosButton.src.indexOf('icons/ios-mobile-menu.svg') > 0) {
            iosButton.src = 'icons/ios-close-menu.svg';
        } else {
            iosButton.src = 'icons/ios-mobile-menu.svg'
        }

        textAnimations();

        menu.classList.toggle('open-menu');

        if (menu.classList.contains('mobile-menu-fade-in')) {
            menu.classList.add('mobile-menu-fade-out');
        } else {
            menu.classList.remove('mobile-menu-fade-out');
        }

        menu.classList.toggle('mobile-menu-fade-in');
    });

    // Slide titles to side
    function textAnimations() {
        slideText1.classList.toggle('h2-slide');
        slideText2.classList.toggle('h3-slide');
        slideText3.classList.toggle('h5-slide');
        slideText1.classList.toggle('fade-in-title');
        slideText2.classList.toggle('fade-in-title');
        slideText3.classList.toggle('fade-in-title');
    }
};

mobileMenu();