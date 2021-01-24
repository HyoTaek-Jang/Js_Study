const calculator = {
    plus : function(a,b){
        return a+b;
    },

    minus : function(a,b){
        return a-b;
    },

    multiply : function(a,b){
        return a*b;
    },

    division : function(a,b){
        return a/b;
    },

    square : function(a,b){
        return a**b;
    }

}

console.log(calculator.square(2,3));
console.log(calculator.division(8,2));

function sayHello(name, age){
    return console.log(`Hello ${name} you are ${age} years old`);
}

const hiHyotaek = sayHello('John', 23);

// console.log(hiHyotaek);

const title = document.querySelector('.title');
title.style.color = 'RED';

const BASE_COLOR = 'rgb(0, 0, 0)';
const OTHER_COLOR = 'RED';

function handleClick(){
    console.log(title.style.color)
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
      console.log('enter the if')
        title.style.color = OTHER_COLOR;
    }
    else{
        console.log('enter the else')
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();