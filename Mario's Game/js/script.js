// cria uma const e o metodo query pega a classe/seletor do CSS
const mario = document.querySelector('.mario');


//variavel constante jump e arrow function. The left part denotes the input of a function and the right part the output of that function.
const jump = () => {
 mario.classList.add('jump');

 //essa função recebe dois param, função e tempo. 500 é o tempo
 setTimeout(() =>{
    //função para remover a função jump.
    mario.classList.remove('jump');
    
 }, 500);
}

// essa função faz com que determiada tecla do declado chame alguma outra função
document.addEventListener('keydown', jump);