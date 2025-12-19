const input = document.getElementById('#input-number');
const button = document.getElementById('#submithere')

button,addEventListener('click', function(){
    const number = parseInt(input.target.value)
    console.log(number)
})