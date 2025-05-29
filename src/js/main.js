/*
| -------------------------------
| Libs
| -------------------------------
*/

// https://necolas.github.io/normalize.css/
import 'normalize.css/normalize.css';

// https://www.npmjs.com/package/bootstrap-grid
import 'bootstrap-grid/dist/grid.css';

// https://icons.getbootstrap.com/
import 'bootstrap-icons/font/bootstrap-icons.css';

// https://github.com/biati-digital/glightbox
import 'glightbox/dist/css/glightbox.css';
import GLightbox from 'glightbox';

/*/ https://splidejs.com/guides/options/
import '@splidejs/splide/css';
import Splide from "@splidejs/splide"; */

// https://ganlanyuan.github.io/tiny-slider
import 'tiny-slider/dist/tiny-slider.css';
import { tns } from "tiny-slider";


/*
| -------------------------------
| Styles
| -------------------------------
*/

import '../styles/main.scss';

/*
| -------------------------------
| Lib Scripts
| -------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');

    GLightbox({
        selector: '.lightbox'
    });

    tns({
        loop: false,
        container: '.slider',
        items: 4,
        gutter: 10,
        nav: false
    });
});

/*
| -------------------------------
| DOM Scripts
| -------------------------------
*/

import './scripts';