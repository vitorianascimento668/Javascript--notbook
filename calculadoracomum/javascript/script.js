let visor = document.querySelector('.visor')
let num = document.querySelectorAll('.num')
let operac = document.querySelectorAll('.operac')
let dataNum = 0
let operac_valor = ''
let v1 = []
let v2 = []
let auxiliadora = 0

function numeros(){

       num.forEach((e)=>{
        e.addEventListener('click',()=>{
            dataNum = e.getAttribute('data-num')
            if(auxiliadora == 0 ){
                v1.push( dataNum)
                visor.innerHTML += dataNum   

        }
            else{
                v2.push(dataNum)
                visor.innerHTML += dataNum   

        }
       })
        })
        operac.forEach((evento) =>{
            evento.addEventListener("click",()=>{
                operac_valor = evento.getAttribute('data-ope')
                visor.innerHTML += operac_valor
                auxiliadora ++
            })
        })
 
    }

numeros()
