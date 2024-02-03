// theme logec

let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3");
let theme = document.getElementById("theme");


theme1.addEventListener("click",()=>{
    theme.setAttribute("class","theme-1");
});
theme2.addEventListener("click",()=>{
    theme.setAttribute("class","theme-2");
});
theme3.addEventListener("click",()=>{
    theme.setAttribute("class","theme-3"); 
});
// calc logec
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btndivde = document.getElementById("btndivde");
let btnMultiple = document.getElementById("btnMultiple");
let btnReset = document.getElementById("btnReset");
let btnEqual = document.getElementById("btnEqual");
let btnDel = document.getElementById("btnDel");
let result = document.getElementById("result");


let num=0;

btn0.addEventListener("click",()=>{
    result.innerHTML+=0
});
btn1.addEventListener("click",()=>{
    result.innerHTML+=1
});
btn2.addEventListener("click",()=>{
    result.innerHTML+=2
});
btn3.addEventListener("click",()=>{
    result.innerHTML+=3
});
btn4.addEventListener("click",()=>{
    result.innerHTML+=4
});
btn5.addEventListener("click",()=>{
    result.innerHTML+=5
});
btn6.addEventListener("click",()=>{
    result.innerHTML+=6
});
btn7.addEventListener("click",()=>{
    result.innerHTML+=7
});
btn8.addEventListener("click",()=>{
    result.innerHTML+=8
});
btn9.addEventListener("click",()=>{
    result.innerHTML+=9
});
btnPlus.addEventListener("click",()=>{
    result.innerHTML+="+"

});


btnMinus.addEventListener("click",()=>{
    result.innerHTML+="-"

});
btndivde.addEventListener("click",()=>{
    result.innerHTML+="/"

});
btnMultiple.addEventListener("click",()=>{
    result.innerHTML+="*"

});
btnReset.addEventListener("click",()=>{
    result.innerHTML=" "

});

btnEqual.addEventListener("click",()=>{
    result.innerHTML=eval(result.innerHTML)

});
btnDel.addEventListener("click",()=>{
    result.innerHTML=result.innerHTML.toString().slice(0,-1)

});

