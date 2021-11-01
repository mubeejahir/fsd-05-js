/* 
    1.Trigger event when user click on the button-Done
    2.write a function to generate random color-Done
    3.Apply the generated random color to body tag-Done
*/

//1.Trigger event when user click on the button
let myButton = document.getElementById('color-generator');
//console.log(document);
//console.log(document.getElementById);
//connsole.log(myButton);

myButton.addEventListener('click',function(){
    let randomColor = generateRandomColor(),
        bodyTag = document.getElementById('body-tag')
        h1Tag = document.getElementById('color');
// 3.Apply the generated random color to body tag
    bodyTag.style.background = generateRandomColor();
    h1Tag.innerHTML = randomColor;

});

//2.write a function to generate random color

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor(){
    let red,green,blue,
        colorStyle,
        head = 'rgb(',
        separator = ' ',
        tail = ')' ;

    red = getRandomInt(0,255);
    green = getRandomInt(0,255);
    blue = getRandomInt(0,255);

    colorStyle = head + red + separator + green + separator + blue + tail;

    //expected output rgb(34,54,90)
    return colorStyle;

}