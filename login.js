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


