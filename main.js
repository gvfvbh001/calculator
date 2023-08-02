const h21 = document.querySelector('.h21');
const h22 = document.querySelector('.h22');
const h23 = document.querySelector('.h23');
const h24 = document.querySelector('.h24');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');

let a = null;
let b = null;
let c = null;
let d = 0 ;
number.forEach(number =>{
    number.addEventListener('click',function(){
        if(a == null){
            a = parseInt(number.textContent);
            h21.innerHTML= a;
            h22.innerHTML = "";
            h23.innerHTML = "";
            h24.innerHTML = "";
        } else if(b ==null){
            b = parseInt(number.textContent);
            h23.innerHTML= b;
        }
    });
});

operator.forEach(operator =>{
    operator.addEventListener('click',function(){
        c = operator.textContent;
        h22.innerHTML= c;
    });
});

function thuchien(){
    switch(c){
        case '+':
            d = a+b;
            break;
            
        case '-':
            d = a-b;
            break;
        case '*':
            d = a*b;
            break;
        case ':':
            d = a/b;
            break;
    }
    h24.innerHTML = " = " + d;
    a = null;
    b = null;
    c = null;
}

document.querySelector('.kq').addEventListener('click', thuchien);

document.querySelector('.cleader').addEventListener('click', function () {
    a = null;
    b = null;
    c = null;
    d = null;
    h21.innerHTML = "";
    h22.innerHTML = "";
    h23.innerHTML = "";
    h24.innerHTML = "";
});