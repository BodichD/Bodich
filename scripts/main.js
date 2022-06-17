let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if (mySrc == 'images/miya.jpg') {
        myImage.setAttribute ('src', 'images/miya2.jpg')
    }
    if (mySrc == 'images/miya2.jpg') {
        myImage.setAttribute ('src', 'images/miya3.jpg')
    }               
    if (mySrc == 'images/miya3.jpg') {
        myImage.setAttribute ('src', 'images/miya.jpg')
    }
    
    
}
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Пожалуйста введите ваше имя')
    if (!myName) {
        setUserName()
    }
    else {
        localStorage.setItem('name', myName)
        myHeading.innerHTML = myName + ', привет!!! А тут немного о нашей Миичке)'
    }
}
if(!localStorage.getItem('name')) {
    setUserName()
}
else {
    let storedName = localStorage.getItem('name')
    myHeading.innerHTML = storedName + ', привет!!! А тут немного о нашей Миичке)'
}
 myButton.onclick = function() {
    setUserName()
 }
    
 
    
