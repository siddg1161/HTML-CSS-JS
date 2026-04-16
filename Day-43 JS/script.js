let mydiv= document.querySelector('#mydiv');
/*let newElement=document.createElement('span');
newElement.textContent="i am here";
mydiv.insertAdjacentElement('afterbegin',newElement);*/
let parent= document.querySelector('#mydiv');
let child= document.querySelector('#fpara');
parent.removeChild(child);
