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
let opeigual = ''
let dataNum = 0
let au = 0
let calculo = 0
let i = 0
let submul = 0
var v2 = ""
let operac_valor = ""
let v1 = []

function numeros(){
   num.forEach((numero)=>{
    numero.addEventListener('click',()=>{
       dataNum = numero.getAttribute('data-num') // valor do dataNum do html
            v2 += dataNum //Aqui o v2 recebe o valor do data-num
           
        visor.innerHTML += `${dataNum}` //aqui vamos mostra na
        //tela o valor do dataNum
    })
        
   })
   operac.forEach((evento) =>{
    evento.addEventListener("click",()=>{
        operac_valor = evento.getAttribute('data-ope')
        limpaResultado()
        if (operac_valor == "="){
            opeigual = operac_valor}
            if(operac_valor.length > 0){
            if(v2.length > 0){
                v1.push(v2)      
                v2 = "" 

            }
            

        }

        
         if(operac_valor != '=' )    {
            if (operac_valor == "/"){
                visor.innerHTML += " ÷ "
            }else{
                visor.innerHTML += ` ${operac_valor} `}
            au = operac_valor
            
         }
    
        for (let i in v1){
            if(i == 0){
                resultado_1.innerHTML = ` ${v1[i]} `}
            else{
                    resultado_amais.innerHTML +=  `    ${v1[i]} </br>`
                }
            
           }
         if(opeigual == '='){
            soma()
            v1 = []
            v1.push(calculo)
            calculo = ''
            opeigual = ''
            operac_valor = au
            limpaTela()
        }

         


            if ( operac_valor == "/"){
                sinais_ope.innerHTML = "÷" 
            }else{
                sinais_ope.innerHTML =`${au}`
               

            }
            
            
              
    })

})

      
}

function soma(){
    v1.forEach((soma)=>{   
        igual()
            if(operac_valor == "-" || au == "-"){
                if(calculo == 0){
                    calculo = Number(soma)
                }else{
                    calculo-= Number(soma)
                
                }
            }
            if(operac_valor == "+" || au == "+"){
                if(calculo == 0){
                    calculo = Number(soma)
                }else{
                    calculo+= Number(soma)
                
                }
            }
            if(operac_valor == "*" || au == "*"){
                if(calculo == 0){
                    calculo = Number(soma)
                }else{
                    calculo*= Number(soma)}
            }
            if(operac_valor == "/" || au == "/"){

                if(calculo == 0){
                    if(soma == 0 ){
                        calculo = 0
                    }else{
                        calculo = Number(soma)
                    }
                }
                else{
                    if(soma == 0){
                        calculo = 0
                    }else{
                    calculo/= Number(soma)}}
            }
        tela_res.innerHTML = calculo

            
        })
           
                //FALTA A OPERAÇÃO DE PORCETAGEM E A OPERAÇÃO DE
                // DIVISÃO INTEIRA OU RESTO DA DIVISAO 
                // COMO SALVA OS VALORES DO CALCULO, SEM ACEITA FAZER
                //REPETIÇÃO, PODENDO USA O ARRAY? NÃO SEI, E UMA TEORIA
                //oU ENTAO POSSO TROCA O VALOR DE CALCULO


}

function igual(){
    tela_res.innerHTML = v1[0]
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
    tela_res.innerHTML = ""
}

function limpaTela(){
    if(v2.length < 1){
        visor.innerHTML = ''
        visor.innerHTML += `${v1[0]}`
    }
}
function limpar(){
    v1 = []
    visor.innerHTML = ''
    resultado.style.display = 'none'
    resultado.style.left = '100px'
        digitos.classList.remove('abriu')
    visor.classList.remove('abriu_visor')
    limpaResultado()
    
} 
numeros()
/*
1-) Corrigir o erro, pra o meu array somente soma uma x o valor
2-) Corrigir o if de baixo, para não soma mais a mais
3-) Depois de fazer conserta os item de porcetagem e resto da div
4-) alterar o - ou + pra fazer alteração somente quando clicado 
*/