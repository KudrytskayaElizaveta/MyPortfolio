const chooseColor = document.querySelectorAll('.assortiment_item');
const contentItem = document.querySelectorAll('.content_item');

chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);


    chooseColor.forEach(function(item){
        item.classList.remove('assortiment_item--active')
    })

    target.classList.add('assortiment_item--active')

    contentItem.forEach(function(item){
        item.classList.remove('content_item--active')
    });

    contentActive.forEach(function(item){
        item.classList.add('content_item--active')
    });

}