var formBtn = document.getElementById("formBtn");
var picBtn = document.getElementById("picBtn");
var portBtn = document.getElementById("portBtn");
var details = document.getElementById("details")
var pics = document.getElementById("pics");
var portfolio = document.getElementById("portfolio");


formBtn.onclick = function () {
    details.style.left = '0px';
    details.style.top = '0px';
    details.style.opacity = '1';
    pics.style.left = '-500px';
    pics.style.opacity = '0';
    formBtn.classList.add('active');
    picBtn.classList.remove('active');
    
}

picBtn.onclick = function (){
    pics.style.left = '0px';
    pics.style.opacity = '1';
    details.style.opacity = '0';
    formBtn.classList.remove('active');
    picBtn.classList.add('active');
    portBtn.classList.remove('active');

}

portBtn.onclick = function(){
    portfolio.style.left = '0px';
    portfolio.style.opacity = '1px';
    pics.style.left = '-500px';
    pics.style.opacity = '0';
    details.style.opacity = '0';
    portBtn.classList.add ('active');
    formBtn.classList.remove ('active');
    picBtn.classList.remove('active');
}