const slider = () => {
    const slides = document.querySelectorAll('.slider__item');
    const arrowLeft = document.querySelector('.arrow__left')
    const arrowRight = document.querySelector('.arrow__right');
    let sliderIndex = 0;
    function hideSlides() {
        slides.forEach(item => {
            item.style.display = 'none'
        })
    }

    function showSlide(sliderIndex) {
        slides[sliderIndex].style.display = 'flex'
    }

    function plusSlide() {
        sliderIndex++
        if (sliderIndex > slides.length - 1) {
            sliderIndex = 0
        }
        hideSlides()
        showSlide(sliderIndex);
    }

    function minusSlide() {
        sliderIndex--
        if (sliderIndex < 0) {
            sliderIndex = slides.length - 1
        }

        hideSlides()
        showSlide(sliderIndex);
    }


    arrowLeft.addEventListener('click', minusSlide)
    arrowRight.addEventListener('click', plusSlide)

    hideSlides()
    showSlide(sliderIndex);
}

export default slider;