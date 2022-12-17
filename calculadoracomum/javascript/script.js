let visor = document.querySelector(".visor")
let num = document.querySelectorAll('.num')
let operac = document.querySelectorAll('.operac')
let resultado_1= document.querySelector('.valor1')
let resultado_amais = document.querySelector('.valor2')
let resultado = document.querySelector('.resultado')
let digitos = document.querySelector('.digitos')
let sinais_ope = document.querySelector('.sinaldaOpe')
let tela_res = document.querySelector('.res')
let multiplica = 0
let dataNum = 0
let calculo = 0
let au = ''
var v2 = ''
let operac_valor = ''
let v1 = []


function numeros(){
     num.forEach((e)=>{
        e.addEventListener('click',()=>{
            dataNum = e.getAttribute('data-num')
    
                v2 += dataNum
                visor.innerHTML += dataNum                      
       })         

        })

       
    }
function opera (){
    operac.forEach((evento) =>{
        evento.addEventListener("click",()=>{
            operac_valor = evento.getAttribute('data-ope')
            limpaResultado()




                /* aqui ainda está dando alguma demora de
                resposta, sendo necessario teclar 
                2x no = para funciona o limpa 
                tela e variavel*/
  

            if(operac_valor != '=' )    {
                visor.innerHTML += ` ${operac_valor} `
                au = operac_valor
            }
 


            /* Aqui se o usuario digita um valor após aperta o 
            igual, a tela, tem que ser limpa e todas as variaveis
             apos ser limpa e a tela também*/
             
            if(operac_valor.length > 0){
                if (v2.length > 0){ 
                    
                if(operac_valor == "-" || au == "-"){
                    if(calculo == 0){
                        calculo = v2
                    }else{
                        calculo-=Number(v2)}
                }
                 if(operac_valor == "+" || au == "+"){
                    calculo+=Number(v2)
                }
               /* if(operac_valor == "*"|| au == "*"){
                    if (calculo == 0 ){
                        multiplica = Number(v2)
                    }else{
                        
                        calculo = multiplica * Number(v2)
                        multiplica = Number(v2)
                    }
                }*/
                    
                v1.push(v2) 
                

                    v2 = '' 
            }
            for (let i in v1){
            if(operac_valor != '='){
            sinais_ope.innerHTML =`${operac_valor} </br>` }

            if(i == 0 ){
                resultado_1.innerHTML = v1[i]
            }else {
                resultado_amais.innerHTML += `${v1[i]} </br>`
            }                

    }

    
            
        } 
        })
    })
      
}
        

    let i = 0
function igual(){
    if(operac_valor == "-" || au == "-"){
        if(calculo == 0){
            calculo = v2
        }else{
            calculo-=Number(v2)}
    }
     if(operac_valor == "+" || au == "+"){
        calculo+=Number(v2)
    }
    tela_res.innerHTML = calculo
    abrirMeiaTela()
    limpaResultado()

}


function limpaResultado(){
    resultado_1.innerHTML = ''
    resultado_amais.innerHTML = ''
}

function limpaTela(){
    if(v2.length < 1){
        visor.innerHTML = ''
    }
}
    


function  abrirMeiaTela(){
    digitos.classList.add('abriu')
    visor.classList.add('abriu_visor')
    resultado.style.display = 'flex'
    resultado.style.left = '0px'

}
numeros()
opera()

/*
1-) corrigir o valor para cair inteiro dentro da variavel, sem quebra, antes de aperta o valor de operação
2-) preencher a tela que aparece com a conta inteira aberta
3-)fazer a soma, subtração e adicão funcionar

*/