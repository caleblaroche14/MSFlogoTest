const mainLogo = document.getElementsByClassName('mainLogo');
const trianglec = document.getElementsByClassName('triangle-container');
const triangle = document.getElementsByClassName('triangle');
const text = document.getElementsByClassName('logoWordsFlex');
const texta =  document.getElementsByClassName('mainLogoText');
const introP =  document.getElementById('introP');

mainLogo[0].addEventListener('mouseover',hovering,false);
mainLogo[0].addEventListener('click',entersite,false);
mainLogo[0].addEventListener('mouseout',unhover,false);

const marg = 15;

function hovering(){
    console.log('hov');
    text[0].style.left = ((marg + 50) + "px");

    for (i=0;i<trianglec.length;i++){
        trianglec[i].style.left = (-marg + "px");
    }
}

function unhover(){
    console.log('un');
    text[0].style.left = ("50px");

    for (i=0;i<trianglec.length;i++){
        trianglec[i].style.left = ("0px");
    }
}


function entersite(){
    console.log('en');
    introP.style.opacity = ("0");
    introP.style.color = ("rgb(255, 230, 0, 0.7)");
    for (i=0;i<trianglec.length + 1;i++){
        texta[i].style.opacity = ("0");
        texta[i].style.color = ("rgb(255, 230, 0, 0.7)");
    }
    for (i=0;i<trianglec.length;i++){
        triangle[i].style.opacity = ("0");
        triangle[i].style.stroke = ("rgb(255, 95, 202)");
    }


    setTimeout(function(){console.log('switching to main'); location.replace('main.html');},4000);

}

