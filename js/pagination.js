const pagination = () => {
    const moreBtn = document.querySelector('.show__more')
    const items = document.querySelectorAll('.catalog__item');
    let count = 5;

    function hideItems () {
        items.forEach(item => {
            item.style.display = 'none'
        })
    }


    function showItems(){
       Array.from(items).slice(0,count).forEach(item => {
        item.style.display = 'block'
       })
       count+=count;
    }

    moreBtn.addEventListener('click' , showItems)
    hideItems()
    showItems()
  
}


export default pagination