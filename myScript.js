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
var saveIndex=0;
curved1 = document.getElementById('curved1');
curved1.style.background = '#000000';
flexspace=flexspace[0];
flexspace.style.backgroundColor=curved1.style.backgroundColor; 
var book = document.getElementsByClassName("book");
console.log("0");

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
    tabButtons[panelIndex].style.backgroundColor=curved1.style.backgroundColor;
    searchBtn[panelIndex].style.backgroundColor=curved1.style.backgroundColor;
    flexspace.style.backgroundColor=curved1.style.backgroundColor;

    for(let i =0 ; i<btn.length ; i++)
    {
        btn[i].style.backgroundColor=curved1.style.backgroundColor;
    }

    if(panelIndex == 0)
    {
        console.log("1");
        bg[0].style.backgroundImage = "url(background/6.jpeg)";
    }
    if(panelIndex == 1)
    {
        console.log("2");
        bg[0].style.backgroundImage = "url(background/4.jpg)";
    }
    if(panelIndex == 2)
    {
        console.log("3");
        bg[0].style.backgroundImage = "url(background/5.jpeg)";
    }
    

}
function changeColor(color , clId){
    curved1.style.background = color; 
    tabButtons[saveIndex].style.backgroundColor=curved1.style.backgroundColor;
    searchBtn[saveIndex].style.backgroundColor=curved1.style.backgroundColor;
    arrowBtn[0].style.backgroundColor=curved1.style.backgroundColor;
    arrowBtn[1].style.backgroundColor=curved1.style.backgroundColor;
    flexspace.style.backgroundColor=curved1.style.backgroundColor;
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
    bd = document.getElementById('bd');
    bd.style.background  = color;
    curved1.style.opacity = 0.8;
    for(let i=1 ; i<6 ; i++)
    {
        document.getElementById(i).style.transform = 'scale(1)';
        document.getElementById(i).style.border = "none";
    }
    clr = document.getElementById(clId);
    clr.style.transform = 'scale(1.25)';
    clr.style.border = "2px solid #fff";

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
    document.getElementById("table1").style.display="none";
    document.getElementById("table2").style.display="none";
    document.getElementById("table3").style.display="none";
    document.getElementById("table"+numb).style.display="inline-table";

}



