
const slider = () => {
    const slider = document.querySelectorAll('.carousel__img');
    const prev = document.querySelector('.carousel__prev');
    const next = document.querySelector('.carousel__next');

    let sliderIndex = 1;
    showSlider(sliderIndex);

    function showSlider(n) {
        if (n > slider.length) {
            sliderIndex = 1
        }

        if (n < 1) {
            sliderIndex = slider.length
        }
        slider.forEach(item => item.style.display = 'none');
        slider[sliderIndex - 1].style.display = 'block'
    }

    function plusSlider(n) {
        showSlider(sliderIndex += n)
    }

    prev.addEventListener('click', () => {
        plusSlider(-1)
    })

    next.addEventListener('click', () => {
        plusSlider(1)
    })
}

export default slider