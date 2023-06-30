curved1 = document.getElementById('curved1');
var toast_header = document.getElementsByClassName("toast-header");
toast_header = toast_header[0];
bd = document.getElementById('bd');
btn1 = document.getElementById('signup');
btn2 = document.getElementById('signin');
curved1.style.background = '#000000';
bd.style.background = '#000000';
btn1.style.background = '#000000';
btn2.style.background =  '#000000';
const wrapper = document.querySelector('.wrapper');
function signup(){
    wrapper.classList.add('signup');
    wrapper.classList.remove('signin');
}
function signin(){
    wrapper.classList.add('signin');
    wrapper.classList.remove('signup');
}
function changeColor(color , clId){
    curved1.style.background = color; 
    bd.style.background  = color;
    curved1.style.opacity = .8;
    
    toast_header.style.background = curved1.style.background;
    toast_header.style.border = "1px solid #fff" ;
    
    
    for(let i=1 ; i<6 ; i++)
    {
        document.getElementById(i).style.transform = 'scale(1)';
        document.getElementById(i).style.border = "none";
    }
    clr = document.getElementById(clId);
    clr.style.transform = 'scale(1.25)';
    clr.style.border = "2px solid #fff";
    btn1 = document.getElementById('signup');
    btn1.style.background = color;
    btn2 = document.getElementById('signin');
    btn2.style.background = color;

}

function check() {
    var confirmPassword = document.getElementById("confirm-password").value;
    var closeBtn = document.getElementsByClassName("close");
    var password = document.getElementById("password").value;
    closeBtn = closeBtn[0];
    var inputs = document.querySelectorAll(".sign-up input");
    var liveToast = document.getElementById("liveToast");
    var titleToast = document.querySelector(".toast strong");
    var toastText = document.querySelector(".toast .toast-body");
    var telNumber = document.getElementById("telNumber");
    var mailAddress = document.getElementById("mailAddress");
    var phoneno = /^\d{10}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    toast_header.style.background = curved1.style.background;
    toast_header.style.border = "1px solid #fff" ;
    
    
    if (!telNumber.value.match(phoneno)) {
        
        liveToast.style.display = "block";
        titleToast.innerHTML="uncorrect value!";
        toastText.innerHTML="Please enter a valid phone number!";
    }
    
    
    if (!mailAddress.value.match(emailRegex)) {
        liveToast.style.display = "block";
        titleToast.innerHTML="uncorrect value!";
        toastText.innerHTML="Please enter a valid mail address!";
    }
    
    if (password !== confirmPassword) {
        liveToast.style.display = "block";
        titleToast.innerHTML="passwords dont match!";
        toastText.innerHTML="Please enter the passwords again.";
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

function check2() {
    var closeBtn = document.getElementsByClassName("close");
    closeBtn = closeBtn[0];
    var inputs = document.querySelectorAll(".input-box input");
    var liveToast = document.getElementById("liveToast");
    var titleToast = document.querySelector(".toast strong");
    var toastText = document.querySelector(".toast .toast-body");
    var telNumber = document.getElementById("telNumber");
    var mailAddress = document.getElementById("mailAddress");
    var phoneno = /^\d{10}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    toast_header.style.background = curved1.style.background;
    toast_header.style.border = "1px solid #fff" ;
    
    
    if (!telNumber.value.match(phoneno)) {
        
        liveToast.style.display = "block";
        titleToast.innerHTML="uncorrect value!";
        toastText.innerHTML="Please enter a valid phone number!";
    }
    
    
    if (!mailAddress.value.match(emailRegex)) {
        liveToast.style.display = "block";
        titleToast.innerHTML="uncorrect value!";
        toastText.innerHTML="Please enter a valid mail address!";
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

var passwordInput = document.getElementById("password");
var circleIcons = document.querySelectorAll(".input-box i");

for (let i = 0; i < circleIcons.length; i++) {
    circleIcons[i].style.color ="#fff";
}

function updateCircleIcons(strength) {
    console.log(strength);

    for (let i = 0; i < circleIcons.length; i++) {
        circleIcons[i].style.color ="#fff";
    }
    for(let i =0 ; i<strength; i++)
    {
        if (strength === 1) {
            circleIcons[i].style.color ="red";
        } else if (strength === 2) {
            circleIcons[i].style.color ="orange";
        } else if (strength === 3) {
            circleIcons[i].style.color ="lightgreen";
        } else if (strength === 4) {
            circleIcons[i].style.color ="green";
        } else {
            circleIcons[i].style.color ="darkgreen";
        }
    }
}

passwordInput.addEventListener("input", function() {
    var password = passwordInput.value;
    var strength = 0;
    
    if (password.length >= 8) {
      strength++;
    }
    
    if (/[A-Z]/.test(password)) {
      strength++;
    }
    
    if (/[a-z]/.test(password)) {
      strength++;
    }
    
    if (/\d/.test(password)) {
      strength++;
    }
    
    if (/\W/.test(password)) {
      strength++;
    }

    updateCircleIcons(strength);
  });
 


