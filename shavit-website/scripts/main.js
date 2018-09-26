var myImage=document.querySelector('img');

myImage.onclick= function(){
    mySrc= myImage.getAttribute('src');
    if (mySrc === 'images/shavit.jpg' )
        myImage.setAttribute('src', 'images/ben.jpg');
    else
        myImage.setAttribute('src', 'images/shavit.jpg');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Shavit ' + myName + ' Website';
}

if (!localStorage.getItem('name')){
    setUserName();
}
else {
    var storedName= localStorage.getItem('name');
    myHeading.textContent = 'Shavit ' + storedName + ' Website';
}

myButton.onclick= function(){
    setUserName();
}
//document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');
//}