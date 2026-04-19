/*
function changeText()
{
let fpara=document.getElementById('fpara');
fpara.textContent="hello bababr";
}

let fpara=document.getElementById('fpara');
fpara.addEventListener('click', changeText);
*/
 let anchorElement=document.getElementById('fanchor');


 anchorElement.addEventListener('click',function(event){
    event.preventDefault();
    anchorElement.textContent="click done bhai";
 });
