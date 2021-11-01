let token = 0;
let myButton1 = document.getElementById('counter-1');
let displayElement1 = document.getElementById('display-1');
myButton1.addEventListener('click',function(){
    token = token + 1;
    displayElement1.innerHTML = token;
});
