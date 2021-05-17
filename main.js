const mainLogo = document.getElementsByClassName('mainLogo');
const trianglec = document.getElementsByClassName('triangle-container');
const triangle = document.getElementsByClassName('triangle');
const text = document.getElementsByClassName('logoWordsFlex');
const texta =  document.getElementsByClassName('mainLogoText');
const introP =  document.getElementById('introP');

const marg = 15;

for (i=0;i<texta.length;i++){
    texta[i].style.opacity = ("1");
    texta[i].style.color = ("rgb(255, 95, 202)");
}
for (i=0;i<triangle.length;i++){
    triangle[i].style.opacity = ("1");
    triangle[i].style.stroke = ("rgb(255, 230, 0, 0.7)");
}
introP.style.opacity = ("1");
introP.style.color = ("rgb(255, 95, 202)");

