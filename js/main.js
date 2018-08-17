var myFullpage = new fullpage('#fullpage', {
    anchors: ['page-home', 'page-sobre', 'page-trabalhos', 'page-contato'],
    sectionsColor: ['#f2f2f2', '#000', '#f2f2f2', '#FFF'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Sobre', 'Trabalhos', 'Contato'],
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    slidesNavigation: true
});

window.onload = function () {

    var placeholder = document.querySelector('.placeholder');
    var small = placeholder.querySelector('.img-small');

    // 1: load small image and show it
    var img = new Image();
    img.src = small.src;
    img.onload = function () {
        small.classList.add('loaded');
    };

    // 2: load large image
    var imgLarge = new Image();
    imgLarge.src = placeholder.dataset.large;
    imgLarge.onload = function () {
        imgLarge.classList.add('loaded');
    };
    placeholder.appendChild(imgLarge);
};

