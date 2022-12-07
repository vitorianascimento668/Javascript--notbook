let visor = document.querySelector('.visor')
let num = document.querySelectorAll('.num')
let dataNum = 0

function numeros(){
    
       num.forEach((e)=>{
        e.addEventListener('click',()=>{
            dataNum = e.getAttribute('data-num')
           visor.innerHTML += dataNum
       })
        })
 
    }

numeros()