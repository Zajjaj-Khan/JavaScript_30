btn = document.querySelectorAll('.drum')

console.log(btn)

for(let i =0; i< btn.length;i++){
    btn[i].addEventListener('click',function (){
        let buttonInnerHTML= this.innerHTML
        makeSound(buttonInnerHTML);
        console.log(buttonInnerHTML)
    })
    document.addEventListener('keypress',function(e){
        makeSound(e.key)
    })
  

}

function makeSound(key) {
    switch (key) {
        case 'w':
          new Audio("sounds/tom-1.mp3").play();
    
            break;
        case 'a':
            new Audio("sounds/tom-2.mp3").play();
        case 's':
            new Audio("sounds/tom-3.mp3").play();
        case 'd':
            new Audio("sounds/tom-4.mp3").play();
        case 'j':
            new Audio("sounds/snare.mp3").play();
        case 'k':
            new Audio("sounds/crash.mp3").play();
        case 'l':
            new Audio("sounds/kick-bass.mp3").play();
        default:
            break;
    };
}





