let visor = document.querySelector(".visor")
let num = document.querySelectorAll('.num')
let operac = document.querySelectorAll('.operac')
let resultado_1= document.querySelector('.valor1')
let resultado_amais = document.querySelector('.valor2')
let resultado = document.querySelector('.resultado')
let digitos = document.querySelector('.digitos')
let sinais_ope = document.querySelector('.sinaldaOpe')
let tela_res = document.querySelector('.res')
let iguale = document.querySelector('.igual')
let dataNum = 0
let au = 0
let calculo = 0
let i = 0
var v2 = ""
let operac_valor = ""
let v1 = []

function numeros(){
   num.forEach((numero)=>{
    numero.addEventListener('click',()=>{
       dataNum = numero.getAttribute('data-num')
            v2 += dataNum
           
        
        
        visor.innerHTML += `${dataNum}`
    })
        
   })

      
}

function opera (){

    operac.forEach((evento) =>{
        evento.addEventListener("click",()=>{
            operac_valor = evento.getAttribute('data-ope')
            limpaResultado()

             
            tela_res.innerHTML = calculo
            if(operac_valor.length > 0){
                if(v2.length > 0){
                    v1.push(v2)      
                    v2 = "" 
                }
                
                
            }
            
             if(operac_valor != '=' )    {
                visor.innerHTML += ` ${operac_valor} `
                au = operac_valor
                
             }
            for (let i in v1){
                if(i == 0){
                    resultado_1.innerHTML = ` ${v1[i]} `}
                else{
                        resultado_amais.innerHTML +=  `    ${v1[i]} </br>`
                    }
                   
                
               }
             if(operac_valor == '='){
                for(let i in v1){

                }
                soma() 

                operac_valor = au
            }

             


                
                sinais_ope.innerHTML =`${au}` 
                
                
                

        })
    })
}

function soma(){
    v1.forEach((soma)=>{
        if(operac_valor == "-" || au == "-"){
            if(calculo == 0){
                calculo = Number(soma)
            }else{
                calculo-= Number(soma)}
        }
        if(operac_valor == "+" || au == "+"){
            calculo+=Number(soma)
        }
    })
}

function igual(){

    abrirMeiaTela()

}
function  abrirMeiaTela(){
    digitos.classList.add('abriu')
    visor.classList.add('abriu_visor')
    resultado.style.display = 'flex'
    resultado.style.left = '0px'

}
function limpaResultado(){
    resultado_1.innerHTML = ''
    resultado_amais.innerHTML = ''
}

function limpaTela(){
    if(v2.length < 1){
        v1 = []
        visor.innerHTML = ''
    }
}
numeros()
opera()