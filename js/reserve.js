
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

function check() {
    var closeBtn = document.getElementsByClassName("close");
    closeBtn = closeBtn[0];
    var inputs = document.querySelectorAll(".inputBox input");
    var liveToast = document.getElementById("liveToast");
    var titleToast = document.querySelector(".toast strong");
    var toastText = document.querySelector(".toast .toast-body");
    var telNumber = document.getElementById("telNumber");
    var natCode = document.getElementById("natCode");
    var phoneno = /^\d{10}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    
    
    if (!telNumber.value.match(phoneno)) {
        
        liveToast.style.display = "block";
        titleToast.innerHTML="uncorrect value!";
        toastText.innerHTML="Please enter a valid mail address!";
    }
    
    
    if (!natCode.value.match(phoneno)) {

        liveToast.style.display = "block";
        titleToast.innerHTML="uncorrect value!";
        toastText.innerHTML="Please enter a valid national code!";
    }
 

    for(let i =0 ; i<inputs.length ; i++){
        if(inputs[i].value === ""){
            liveToast.style.display = "block";
            titleToast.innerHTML="here is an empty filed!";
            toastText.innerHTML="Please fill all fields.";

        }
    }
    closeBtn.addEventListener("click", function() {
        setTimeout(function() {
            liveToast.style.display = "none";
        }, 150);
        
    });

}