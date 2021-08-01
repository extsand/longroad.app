'use strict';

let inputs = document.querySelectorAll('input'),
	email = inputs[0],
	password = inputs[1],
	checkbox = inputs[2];

let buttons = document.querySelectorAll('button'),
  	overlay = document.querySelector('.overlay');

let buffer;
email.addEventListener('change', ()=>{
	setLocalStorage();
});

password.addEventListener('change', ()=>{
	setLocalStorage();
	
});

checkbox.addEventListener('click', ()=>{
	setLocalStorage();
		
});

// console.log(localStorage.getItem('remember'));

function setLocalStorage(){
	if(checkbox.checked){
		localStorage.setItem('email', email.value);
		localStorage.setItem('passw', password.value);
		localStorage.setItem('key', 1);
	} 
	else if(!checkbox.checked){
		localStorage.clear();
	}
}

console.log(typeof(localStorage.getItem('key')));
function getLocalStorage(){
	if(localStorage.getItem('key')){
		email.value = localStorage.getItem('email');
		password.value = localStorage.getItem('passw');
		checkbox.checked = localStorage.getItem('key');
	}
}
getLocalStorage();

let objForJSON = {
	email: email.value,
	passw: password.value,
	checkbox: checkbox.checked
}

let objLocStor = {
	em: localStorage.getItem('email'),
	pas: localStorage.getItem('passw'),
	chbx: localStorage.getItem('key')
}

let serialize = JSON.stringify(objLocStor);
console.log(serialize);
console.log(localStorage.length);

//Перебор LocalStorage и запись в Объект
let localStorageBuffer = {};
for(let i = 0; i < localStorage.length; i++){
let index = localStorage.key(i);
localStorageBuffer[localStorage.key(i)] = localStorage.getItem(index);
}
console.log(localStorageBuffer);

let serialObj = JSON.stringify(localStorageBuffer);
console.log(serialObj);

let retObj = JSON.parse(serialObj);
console.log(retObj);





//OVERLAY
const overlayTime = 1000
buttons.forEach((item, index)=>{
	// console.log(buttons[index]);
	buttons[index].addEventListener('click', (e) => {
		e.preventDefault()
		overlay.classList.toggle('overlay-active');
	});
	overlay.addEventListener('click', (e) => {
		e.preventDefault()
		console.log(`overlay is gone after ${overlayTime/1000} sec`);
		setTimeout(()=>{
			overlay.classList.remove('overlay-active');
		},overlayTime);
	});

});











