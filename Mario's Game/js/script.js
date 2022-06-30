// cria uma const e o metodo query pega a classe/seletor do CSS
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


//variavel constante jump e arrow function. The left part denotes the input of a function and the right part the output of that function.
const jump = () => {
 mario.classList.add('jump');

 //essa função recebe dois param, função e tempo. 500 é o tempo
 setTimeout(() =>{
    //função para remover a função jump.
    mario.classList.remove('jump');
    
 }, 500);
}

//var receb fun e um tempo de execução
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition);

    if (pipePosition <= 120) {
        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;                       
    }
    
}, 10);

// essa função faz com que determiada tecla do declado chame alguma outra função
document.addEventListener('keydown', jump);