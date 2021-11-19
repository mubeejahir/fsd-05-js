let token = 0;
 let myButton1 = document.getElementById('counter-1');
 let displayElement1 = document.getElementById('display-1');
 myButton1.addEventListener('click',function(){
     token = token + 1;
     displayElement1.innerHTML = token;
 });


// let myButton1 = document.querySelectorAll('.count-btn');
// console.log(myButton1);

// myButton1.forEach(function(button){
//     console.log(button);
// });

// let displayElement1 = document.getElementById('display-1');
// function me(button){
//     button.addEventListener('click',function(){
//         token = token + 1;
//         displayElement1.innerHTML = token;
//         console.log('annyaseyo');
//     });
// }

