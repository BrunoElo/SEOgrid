
$(document).ready(function () {
    $('.testimonial__slider').slick({
        //setting-name: setting-value
        dots: true,
        customPaging: function (slider, i) { //making your custom slick dots
            return '<div class="pager__item" id=' + i + "></div>";
        },
        //infinite: false,
        //speed: 300,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<svg class="slick-prev" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">  <g filter="url(#filter0_b)">  <circle cx="35" cy="35" r="33.5" transform="rotate(-180 35 35)" stroke="#00B071" stroke-width="3"/>  </g>  <path d="M23.334 34.6112L41.4173 24.1708L41.4173 45.0516L23.334 34.6112Z" fill="#00B071"/>  <defs>  <filter id="filter0_b" x="-5.6" y="-5.6" width="81.2" height="81.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">  <feFlood flood-opacity="0" result="BackgroundImageFix"/>  <feGaussianBlur in="BackgroundImage" stdDeviation="2.8"/>  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>  </filter>  </defs>  </svg>  ',
        nextArrow: '<svg class="slick-next" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b)"><circle cx="35" cy="35" r="33.5" stroke="#00B071" stroke-width="3"/>  </g>  <path d="M49.668 35.3891L31.5846 45.8295L31.5846 24.9486L49.668 35.3891Z" fill="#00B071"/>  <defs>  <filter id="filter0_b" x="-5.6" y="-5.6" width="81.2" height="81.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">  <feFlood flood-opacity="0" result="BackgroundImageFix"/>  <feGaussianBlur in="BackgroundImage" stdDeviation="2.8"/>  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>  </filter>  </defs>  </svg>'
    });
});


$(document).ready(function () {
    $('.steps__slider').slick({
        //setting-name: setting-value
        dots: true,
        customPaging: function (slider, i) { //making your custom slick dots
            return '<div class="custom-dots" id=' + i + "><span>" +0+ (i + 1) + "</span></div>";
        },
        //infinite: false,
        //speed: 300,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dotsClass:"vertical-dots"
    });
});