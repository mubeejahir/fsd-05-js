/* 
1.write click event for each a-tag -Done
2.get class name of this element -Done
3.hide all cards -Done
4.show cards with specific class name
*/
let filterWrapper = document.getElementById('filter-1'),
    filterLinks = filterWrapper.querySelectorAll('.filter-link');

function hideAllCards(){
    let cards = filterWrapper.querySelectorAll('.card');
    cards.forEach(function(card){
        card.style.display = 'none';
    });
}
function showCards(filterType){
    // console.log(filterType);
    if(filterType=="all"){
        cardType = '.card';
    }
    else{
        cardType = '.'+filterType;
    }
    console.log(cardType);
    let allCards = filterWrapper.querySelectorAll(cardType);
    allCards.forEach(function(card){
        card.style.display = 'block';
    });
    // console.log(allCards);
}
function links(button){
    button.addEventListener('click',function(){
        //get class name of this element
        let currentElement = this,
            filterType = currentElement.classList[1];
        
        //hide all cards
        hideAllCards();
        showCards(filterType);
    });
}
//write click event for each a-tag
filterLinks.forEach(links);