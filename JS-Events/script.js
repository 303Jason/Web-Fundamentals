function removeElement(elem){
    elem.remove();
}

function counter(){
var counter = document.querySelector('#counter');
counter.textContent++;
}

function countDown(){
    var counter = document.querySelector('#counter');
    counter.textContent--;
}

function changeText(){
    var changeText = document.querySelector('#change-text');
    changeText.textContent = "Text Changed!";
}

function searchAlert(){
    var searchAlert = document.querySelector('#search');
    alert(searchAlert.value);
}

function hoverEvent(element){
    element.classList.add("shadow")
}
function endHoverEvent(element){
    element.classList.remove("shadow")
}