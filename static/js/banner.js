document.addEventListener('DOMContentLoaded', function () {
    var closeButton = document.querySelector('.close-banner');
    var banner = document.getElementById('banner');
    var navbar = document.querySelector('.navbar');
    var navSection = document.querySelector('.nav-section');

    if (closeButton && banner) {
        closeButton.addEventListener('click', function () {
            banner.style.display = 'none';
            navbar.style.marginTop = '0';
            navSection.style.paddingTop = '108px';
        });
    }
});
