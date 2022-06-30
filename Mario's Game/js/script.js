// cria uma const e o metodo query pega a classe/seletor do CSS
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


//var constante jump e arrow function. The left part denotes the input of a function and the right part the output of that function.
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
    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition);

    //const para pegar o buttom. N pode usar offset. getcomp.style  returns an object containing the values of all CSS properties of an element.
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition);

    // .replace('px', '');= substitui a palavra PX para nada. 
    // o + na frente converte para number.

    if (pipePosition <= 120 && pipePosition>0 && marioPosition<80) {
        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;  
        
        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`; 

        mario.src = './images/game-over.png';
        mario.style.width ='80px';
        mario.style.marginLeft ='50px'
    
        clearInterval(loop);
}
    
}, 10);

// essa função faz com que determiada tecla do declado chame alguma outra função
document.addEventListener('keydown', jump);