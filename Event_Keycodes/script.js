const start_key = document.querySelector('#main-heading')
const key_pressed = document.querySelector('#pressed');
const key_number = document.querySelector('#Num')
const key_code = document.querySelector('#code')
const output = document.querySelector('#output');

document.addEventListener('keypress',function(e) {
    console.log(e)
    key_pressed.value=e.key;
    key_code.value = e.code;
    key_number.value= e.charCode;

});
