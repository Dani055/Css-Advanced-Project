var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var cards = document.getElementsByClassName('card-presentation')
var cols = document.getElementsByClassName('col')
window.addEventListener('scroll', function (event) {
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        if(isInViewport(card)){
            if(index % 2 == 0){
                card.classList.add('slide-right')
            }
            else{
                card.classList.add('slide-left')
            }
        }
    }
    for (let index = 0; index < cols.length; index++) {
        const col = cols[index];
        if(isInViewport(col)){
            if(index % 2 == 0){
                col.classList.add('slide-top')
            }
            else{
                col.classList.add('slide-bottom')
            }
        }
    }

}, false);