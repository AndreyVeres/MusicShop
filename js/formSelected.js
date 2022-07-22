
const formSelected = () => {
    const form = document.querySelector('.form')
    const categoryInput = document.getElementById('category')
    const modelInput = document.getElementById('model')

    categoryInput.addEventListener('change' ,()=> {
        modelInput[0].selected = 'selected'
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
};
export default formSelected;