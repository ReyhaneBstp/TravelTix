var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");
var tableBtn=document.querySelectorAll(".resTable a");
var searchBtn= document.getElementsByClassName("search");
var btn = document.getElementsByClassName("btn");
var arrowBtn = document.getElementsByClassName("arrowBtn");
var menulist = document.getElementById("menulist");
var packageText = document.getElementsByClassName("packageText");
var flexspace = document.getElementsByClassName("container-fluid");
var inputLbl = document.getElementsByClassName("inputLbl");
var personLbl = document.getElementsByClassName("personLbl");
var bg = document.getElementsByClassName("bg");
var footer = document.getElementsByClassName("footer");
var toast_header = document.getElementsByClassName("toast-header");
var myAcc = document.getElementById("myAcc");
var edit = document.querySelector(".editInfo");
edit.style.display = "none";
var main = document.getElementById("main");
var curved = document.querySelectorAll(".wrapper #curved1");
var loginBtn = document.getElementById("login");
myAcc.style.display="none";
toast_header = toast_header[0];
var saveIndex=0;
var can_edit = 0;
curved1 = document.getElementById('curved1');
curved2 = document.getElementById('curved2');
var closeBtn = document.getElementsByClassName("close");
var liveToast = document.getElementById("liveToast");
var titleToast = document.querySelector(".toast strong");
var toastText = document.querySelector(".toast .toast-body");
var navItem = document.querySelectorAll(".navbar-nav a");

closeBtn = closeBtn[0];
curved1.style.background = '#000000';
for(var i=0; i<curved.length ; i++){
    curved[i].style.background = '#000000';
    curved[i].style.opacity="0.2";
}
flexspace=flexspace[0];
footer = footer[0];
flexspace.style.backgroundColor=curved1.style.backgroundColor;
footer.style.backgroundColor=curved1.style.backgroundColor; 
var book = document.getElementsByClassName("book");


document.getElementById("table1").style.display="none";
document.getElementById("table2").style.display="none";
document.getElementById("table3").style.display="none";


// Get all the question headers
var questionHeaders = document.querySelectorAll('.accordion-button');

// Loop through each question header and set its background color to match the website background color
questionHeaders.forEach(function(header) {
  header.style.backgroundColor = curved1.style.backgroundColor;
});



for(let i =0 ; i<packageText.length ; i++)
{
    packageText[i].style.color=curved1.style.backgroundColor;
}
for(let i =0 ; i<book.length ; i++)
{
    book[i].style.backgroundColor=curved1.style.backgroundColor;
}
for(let i =0 ; i<tableBtn.length ; i++)
{
    tableBtn[i].style.backgroundColor=curved1.style.backgroundColor;
}

showPanel(0);


function showPanel(panelIndex) {

    document.getElementById("table1").style.display="none";
    document.getElementById("table2").style.display="none";
    document.getElementById("table3").style.display="none";

    saveIndex=panelIndex;
    tabButtons.forEach(function(node){
        node.style.backgroundColor="transparent";
        node.style.color="";
        node.style.border="";
    });
    tabButtons[panelIndex].style.color="#fff";
  
    
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabButtons[panelIndex].style.backgroundColor=curved1.style.background;
    searchBtn[panelIndex].style.backgroundColor=curved1.style.background;
    flexspace.style.backgroundColor=curved1.style.backgroundr;

    for(let i =0 ; i<btn.length ; i++)
    {
        btn[i].style.backgroundColor=curved1.style.background;
    }

    if(panelIndex == 0)
    {
        bg[0].style.backgroundImage = "url(/background/6.jpeg)";
    }
    if(panelIndex == 1)
    {
        bg[0].style.backgroundImage = "url(/background/4.jpg)";
    }
    if(panelIndex == 2)
    {
        bg[0].style.backgroundImage = "url(/background/5.jpeg)";
    }
    

}
function changeColor(color , clId){
    curved1.style.background = color; 
    tabButtons[saveIndex].style.backgroundColor=curved1.style.backgroundColor;
    searchBtn[saveIndex].style.backgroundColor=curved1.style.backgroundColor;
    arrowBtn[0].style.backgroundColor=curved1.style.backgroundColor;
    arrowBtn[1].style.backgroundColor=curved1.style.backgroundColor;
    flexspace.style.backgroundColor=curved1.style.backgroundColor;
    footer.style.backgroundColor=curved1.style.backgroundColor;
    toast_header.style.background = curved1.style.background;
    toast_header.style.border = "1px solid #fff" ;

    for(let i =0 ; i<packageText.length ; i++)
    {
        packageText[i].style.color=curved1.style.backgroundColor;
    }

    for(let i =0 ; i<btn.length ; i++)
    {
        btn[i].style.backgroundColor=curved1.style.backgroundColor;
    }

    for(let i =0 ; i<book.length ; i++)
    {
    book[i].style.backgroundColor=curved1.style.backgroundColor;
    }

    for(let i =0 ; i<tableBtn.length ; i++)
    {
    tableBtn[i].style.backgroundColor=curved1.style.backgroundColor;
    }

    questionHeaders.forEach(function(header) {
        header.style.backgroundColor = curved1.style.backgroundColor;
      });

    tabButtons[saveIndex].style.color="#fff"

    curved1.style.opacity = 0.8;
    for(let i=1 ; i<6 ; i++)
    {
        document.getElementById(i).style.transform = 'scale(1)';
        document.getElementById(i).style.border = "none";
    }
    clr = document.getElementById(clId);
    clr.style.transform = 'scale(1.25)';
    clr.style.border = "2px solid #fff";

    curved1.style.opacity = .8;
   
    for (let index = 0; index < curved.length; index++) {
        curved[index].style.background = color;
        
    }

    toast_header.style.background = curved1.style.background;
    toast_header.style.border = "1px solid #fff" ;
    
    

    btn1 = document.getElementById('signup');
    btn1.style.background = color;
    btn2 = document.getElementById('signin');
    btn2.style.background = color;
    btn3 = document.getElementById('editBtn');
    btn3.style.background = color;
    curved2.style.background = color;

}


function plusNumber(index){
    var number = document.querySelectorAll("#number");
    var n = number[index].value;
    if(n<9)
        n++;
    number[index].value = n;
}
function minusNumber(index){
    var number = document.querySelectorAll("#number");
    var n = number[index].value;
    if(n>=2)
        n--;
    number[index].value = n;

}


function showResult(numb){


    if(numb == 1)
    {
        var inputs = document.querySelectorAll(".hotelForm .input-box input");

    }
    if(numb == 2)
    {
        var inputs = document.querySelectorAll(".plainForm .input-box input");

    }
    if(numb == 3)
    {
        var inputs = document.querySelectorAll(".trainForm .input-box input");

    }
   


    toast_header.style.background = curved1.style.background;
    toast_header.style.border = "1px solid #fff" ;

    document.getElementById("table1").style.display="none";
    document.getElementById("table2").style.display="none";
    document.getElementById("table3").style.display="none";
    document.getElementById("table"+numb).style.display="inline-table";


    for(let i =0 ; i<inputs.length-2 ; i++){
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

function reverse(index){
    var org = document.getElementsByClassName("org");
    var des = document.getElementsByClassName("des");
    var temp = org[index].value;
    org[index].value = des[index].value;
    des[index].value = temp;
}

can_edit = 1;
function goMyAcc(){
    if(can_edit ==0 ){
        main.style.display="none";
        myAcc.style.display="block";
        edit.style.display ="none";
        loginBtn.style.display="none";
        bg[0].style.height ="100%";
    }
    else if(can_edit == 1){
        main.style.display="none";
        myAcc.style.display="none";
        edit.style.display ="block";
        loginBtn.style.display="none";
        bg[0].style.height ="100%"; 
    }
 

   
}


// Loop through each anchor tag and add a click event listener
navItem.forEach(navItem => {
    navItem.addEventListener('click', event => {

      
      // Get the element with the ID of 'myAcc' and set its display to 'none'
      myAcc.style.display = "none";
      edit.style.display = "none";
      // Get the element with the ID of 'main' and set its display to 'block'
      main.style.display="block";
      
      // Reset the height of the background element
      bg[0].style.height ="54%";
      
      // Show the login button
      loginBtn.style.display="block";

    });
  });

curved1 = document.getElementById('curved1');
bd = document.getElementById('bd');
btn1 = document.getElementById('signup');
btn2 = document.getElementById('signin');
curved1.style.background = '#000000';
// bd.style.background = '#000000';

btn1.style.background = '#000000';
btn2.style.background =  '#000000';
const wrapper = document.querySelector('.wrapper');
var sign_in = document.getElementsByClassName("sign-in");
sign_in = sign_in[0];
var sign_up = document.getElementsByClassName("sign-up");
sign_up = sign_up[0];
sign_up.style.display="none";

function signup(){
 
    sign_in.style.opacity="0.2";
    setTimeout(function(){
        sign_in.style.display="none";
        sign_up.style.display="block";
        sign_up.style.opacity="1";
    }, 700); // Wait for the transition to complete before changing the display property
}

function signin(){
    sign_up.style.opacity="0.2";
    setTimeout(function(){
        sign_up.style.display="none";
        sign_in.style.display="block";
        sign_in.style.opacity="1";
    }, 700); // Wait for the transition to complete before changing the display property
}


function check() {
    var confirmPassword = document.getElementById("confirm-password").value;
    var password = document.getElementById("password").value;
    var inputs = document.querySelectorAll(".sign-up input");
    var telNumber = document.getElementById("telNumber");
    var mailAddress = document.getElementById("mailAddress");
    var phoneno = /^\d{10}$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    toast_header.style.background = curved.style.background;
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
    var inputs = document.querySelectorAll(".input-box input");
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
 



