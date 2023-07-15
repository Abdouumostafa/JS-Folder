let barList = document.getElementById('navList');
let bar = document.getElementById('bar');
let closeList =document.getElementById('close');

function navBar(){
    closeList.style.display= 'block';
    barList.classList.remove('hide');
}

function closing(){
    barList.classList.add('hide');
    closeList.style.display= 'none';
}

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let doubleA = document.querySelector('.doubleA');

window.onscroll = function(){
    let scrollValue = scrollY;
    stars.style.left = scrollValue + 'px';
    moon.style.top = scrollValue * 4 + 'px';
    mountain3.style.top = scrollValue * 2 + 'px';
    mountain4.style.top = scrollValue * 1.5 + 'px';
    river.style.top = scrollValue + 'px';
    boat.style.top = scrollValue + 'px';
    boat.style.left = scrollValue * 3 + 'px';
    doubleA.style.fontSize = scrollValue + 'px';
    if(scrollY >= 50){
        doubleA.style.fontSize = 50 + 'px';
        doubleA.style.position = 'fixed';
        if(scrollY >= 383){
            doubleA.style.display = 'none';
        }
        else{
            doubleA.style.display = 'block';
        }
        if(scrollY >= 122){
            document.querySelector('body').style.background = 'linear-gradient(#376281, #10001f)';
        }else{
            document.querySelector('body').style.background = 'linear-gradient(#1e0216, #10001f)';
        }
    }
}