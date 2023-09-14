// next lesson loop over buttons
let arr = document.querySelectorAll(".drum");
for (let i = 0; i < arr.length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        
        var buttonHTML = this.innerHTML; //W A S D J K L
        makeSound(buttonHTML);
    });

    // передать каждую кнопку в функцию 
    // сделать цикл for который будет работать 7 раз 
}
//document.querySelectorAll("button").length

// function(key)
function makeSound(key) {

    console.log('hello it"me');
    console.log(key);

    switch (key) {
        case 'W':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
            break;
        case 'A':
            var tom2 =  new Audio('sounds/tom-2.mp3');
            tom2.play()
            break;
        case 'S':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
            break;
        case 'D':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()
            break;
        case 'J':
            var crash = new Audio('sounds/crash.mp3');
            crash.play()
            break;
        case 'K':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play()
            break;
        case 'L':
            var snare = new Audio('sounds/snare.mp3');
            snare.play()
            break;
        default: console.log(key);
    }
}



//Animation?