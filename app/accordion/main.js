//Create event listener for all buttons
let buttons = document.querySelectorAll('.question-btn');
console.log(buttons);

// buttons.forEach(function(button){
//     console.log(button);
// });

function hideAllQuestionText(){
    let questionTexts = document.querySelectorAll('.question-text');
    questionTexts.forEach(function(questionText){
        questionText.style.display = 'none';
    });
}
function get(button){
    button.addEventListener('click',function(){
       
       // select nearest question-text
        let currentElement = this,
            questionWrapperElement = currentElement.parentNode.parentNode,
            questionTextElement = questionWrapperElement.querySelector('.question-text');
            console.log(questionTextElement);
        //hide all question-text
        hideAllQuestionText();
        //show the element
        questionTextElement.style.display = 'block';  
    });
    
}


buttons.forEach(get);
//get('helloooo');//it execute get 

//console.log(get); // it send the get

