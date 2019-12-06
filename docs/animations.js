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
window.addEventListener('scroll', function (event) {
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        if(isInViewport(card)){
            if(index % 2 == 0){
                card.classList.add('animation-right')
            }
            else{
                card.classList.add('animation-left')
            }
        }
    }

}, false);