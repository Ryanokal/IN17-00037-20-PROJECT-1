var formBtn = document.getElementById("formBtn");
var picBtn = document.getElementById("picBtn");
var portBtn = document.getElementById("portBtn");
var details = document.getElementById("details")
var pics = document.getElementById("pics");
var portfolio = document.getElementById("portfolio");
var about = document.getElementById("about");


formBtn.onclick = function () {
    details.style.left = '0px';
    details.style.top = '0px';
    details.style.opacity = '1';
    pics.style.left = '-500px';
    pics.style.opacity = '0';
    about.style.left = '-500px';
    about.style.opacity = '0';
    formBtn.classList.add('active');
    picBtn.classList.remove('active');
    portBtn.classList.remove('active');
    
}

picBtn.onclick = function (){
    pics.style.left = '0px';
    pics.style.opacity = '1';
    details.style.opacity = '0';
    about.style.left = '-500px';
    about.style.opacity = '0';
    formBtn.classList.remove('active');
    picBtn.classList.add('active');
    portBtn.classList.remove('active');

}

portBtn.onclick = function g(){
    portfolio.style.left = '0px';
    portfolio.style.opacity = '1';
    about.style.left = '0px';
    about.style.opacity = '1';
    pics.style.left = '-500px';
    pics.style.opacity = '0';
    details.style.opacity = '0';
    portBtn.classList.add ('active');
    formBtn.classList.remove ('active');
    picBtn.classList.remove('active');
}