var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
var github_url = "Css-Advanced-Project";

var path = window.location.pathname.split("/");
var page = path[path.length - 2]

if(page === "" || page === github_url){
    var cards = document.getElementsByClassName('card-presentation')
    var cols = document.getElementsByClassName('col')
    var h4_suggestion = document.getElementById('suggestion')
}
if(page === "gallery"){
    var photos = document.getElementById('gallery').children
}


window.addEventListener('scroll', function (event) {
    if(page === "" || page === github_url){
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
        if(isInViewport(h4_suggestion)){
            h4_suggestion.classList.add('slide-top')
        }
    }
    if(page === "gallery"){
        for (let index = 0; index < photos.length; index++) {
            const photo = photos[index];
            if(isInViewport(photo)){
                photo.classList.add('slide-bottom')
            }
        }
    }

}, false);