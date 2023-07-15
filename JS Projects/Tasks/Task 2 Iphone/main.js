let mainImg = document.getElementById('mainImg');
let backGround = document.querySelector('body');

function phone(phones){
    mainImg.src= phones;
}

function colors(value){
    backGround.style.backgroundColor= value;
}

let bar = document.querySelector('.bars');
let List = document.querySelector('.ul');

bar.onclick = function(){
    List.classList.remove('.hide');
}