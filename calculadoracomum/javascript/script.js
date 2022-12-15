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
var v2 = ''
let operac_valor = ''
let calculo = ''
let v1 = []


function numeros(){
    operac.forEach((evento) =>{
        evento.addEventListener("click",()=>{
            operac_valor = evento.getAttribute('data-ope')
            limpaResultado()

            if(operac_valor == '='){
               

                /* aqui ainda está dando alguma demora de
                resposta, sendo necessario teclar 
                2x no = para funciona o limpa 
                tela e variavel*/
                limpaTela()
            }
            if(operac_valor != '=' )    {
                visor.innerHTML += ` ${operac_valor} `

            }
 


            /* Aqui se o usuario digita um valor após aperta o 
            igual, a tela, tem que ser limpa e todas as variaveis
             apos ser limpa e a tela também*/
             
            if(operac_valor.length > 0){
                if (v2.length > 0){  
                v1.push(v2)
                v2 = ''
                 
            }


            for (let i in v1){
                if(operac_valor != '='){
                sinais_ope.innerHTML = operac_valor}

                if(i == 0 ){
                    resultado_1.innerHTML = v1[i]
                }else {
                    resultado_amais.innerHTML += `${v1[i]} </br>`
                }
                

    }

   
            
        } 
        })
    })
       num.forEach((e)=>{
        e.addEventListener('click',()=>{
            dataNum = e.getAttribute('data-num')
    
                v2 += dataNum
                visor.innerHTML += dataNum   

       })         

            
        })


    }

function igual(){


    console.log(au)
    
    abrirMeiaTela()

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
    


function  abrirMeiaTela(){
    digitos.classList.add('abriu')
    visor.classList.add('abriu_visor')
    resultado.style.display = 'flex'
    resultado.style.left = '0px'

}
numeros()

/*
1-) corrigir o valor para cair inteiro dentro da variavel, sem quebra, antes de aperta o valor de operação
2-) preencher a tela que aparece com a conta inteira aberta
3-)fazer a soma, subtração e adicão funcionar

*/