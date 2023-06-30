curved1 = document.getElementById('curved1');
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

function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (password != confirmPassword) {
        alert("Passwords do not match!");
    }
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
 


