
const formSelected = () => {
    const form = document.querySelector('.form')
    const categoryInput = document.getElementById('category')
    const modelInput = document.getElementById('model')

    modelInput.addEventListener('change', () => {
        const index = modelInput.selectedIndex;
        const price = modelInput.querySelectorAll('option')[index].dataset.price;
        document.querySelector('.form__price-place').textContent = `${price} $ `

        // const test = document.querySelector('.form__price-place').textContent = modelInput.querySelectorAll('option')[modelInput.selectedIndex].dataset.price;
        // console.log(test)
    })

    function sortModels() {
        modelInput.querySelectorAll('option').forEach(item => {
            item.style.display = 'none'
        })
        renderModels()
    }
    function renderModels() {
        let category = categoryInput.value;
        modelInput.disabled = false;
        modelInput.querySelectorAll('option').forEach(item => {
            if (item.dataset.category === category) {
                item.style.display = 'block'
            }
        })
    }

    form.addEventListener('change', sortModels)
    categoryInput.addEventListener('change', () => {
        modelInput[0].selected = 'selected'
        document.querySelector('.form__price-place').textContent = 0 + " $"
    })
};
export default formSelected;