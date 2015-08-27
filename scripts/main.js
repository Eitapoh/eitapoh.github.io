var myImage = document.querySelector('img');

myImage.onclick = function() {
	var myScr = myImage.getAttribute('src');
	if(myScr === 'images/html5.jpg'){
		myImage.setAttribute ('src', 'images/html5_2.png');
	} 
	else{
		myImage.setAttribute('src', 'images/html5.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//Função pra captar e armazenar o que for digitado
function setUserName() {
	var myName = prompt('Digite algo.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Você digitou ' + myName
}

//Bloco pra ver se houve algo digitado previamente
if(!localStorage.getItem('name')){
	setUserName();
}
else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Você digitou ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}