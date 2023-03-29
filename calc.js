import "calc.css";
// var buttons = document.getElementsByClassName("button");
// var display = document.getElementById("display");
// var operand1 = 0;
// var operand2 = null;
// var operator = null;

// for(var i=0;i<=buttons.length;i++){
//  buttons[i].addEventListener('click',function(){
//     var value=this.getAttribute('data-value');
//     if(this.innerHTML=='='){
//       eval(this.innerHTML)
//     }

//  });
// }

var buttons = document.getElementById('buttons');
 var li = buttons.querySelectorAll("li");

 for(let i=0;i<li.length;i++){
    li[i].addEventListener("click",function(){
        alert(this.innerHTML);
    });
 }