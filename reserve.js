
var plusButton = document.getElementsByClassName("plus-button")[0];
var minusButton = document.getElementsByClassName("minus-button")[0];
var form = document.querySelector(".container form");


var i = 1;

function plus(){
    
    if(i<=2){
        i++;
        var str = "pers"+i;
        console.log(str);
        document.getElementById(str).style.display = "block" ;
    }

    if(i==2){
        form.style.width = "1000px";
    }
    if(i==3){
        form.style.width = "100%";
    }

}

function minus(){

    if(i>=2){
        var str = "pers"+i;
        console.log(str);
        document.getElementById(str).style.display = "none" ;
        i--;
    }
    if(i==1){
        form.style.width = "700px";
    }
    if(i==2){
        form.style.width = "1000px";
    }

}