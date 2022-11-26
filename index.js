

const calc = document.querySelector( '.calc');
const result = document.querySelector ('.screen')

calc.addEventListener('click', function(event){

if(!event.target.classList.contains ('btn')) return;

const value = event.target.innerText;


switch(value){
    case 'AC':
        result. innerText = '';
        break;
 
    case '=':
        result.innerText = eval(result.innerText).toFixed(2);
        break;
    
    default:
        result.innerText += value;

}
});

