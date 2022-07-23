import slider from "./slider.js";
import pagination from "./pagination.js"
import formSelected from "./formSelected.js"
window.addEventListener('DOMContentLoaded', () => {
    slider('.slider__item','.arrow__left','.arrow__right');
    pagination()
    formSelected()
});



