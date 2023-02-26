let visor = document.querySelector('.visor')
let num = document.querySelectorAll('.num')
let operac = document.querySelectorAll('.operac')
let resultado_1= document.querySelector('.valor1')
let resultado_amais = document.querySelector('.valor2')
let resultado = document.querySelector('.resultado')
let digitos = document.querySelector('.digitos')
let sinais_ope = document.querySelector('.sinaldaOpe')
let tela_res = document.querySelector('.res')
let iguale = document.querySelector('.igual')
let opeigual = '',valor_diferente 
let dataNum = 0
let contador_soma = 0 
let au = 0
let calculo = 0 , v_antigo
let submul = []
var v2 = ""
let operac_valor = ""
let v1 = []
let v3 = ''
let c = 1
let cont_op = 0, auxiliando = 1

function numeros(){
   num.forEach((numero)=>{
    numero.addEventListener('click',()=>{
       dataNum = numero.getAttribute('data-num') // valor do dataNum do html
         v2 += dataNum //Aqui o v2 recebe o valor do data-num
        visor.innerHTML += dataNum // Aparece na tela o valor do Datanum
        if(v1.length > 0){//novo valor sendo chamado
            if(v1.length > 0 && v2.length > 0){ // Se o array e o v2 tive algum valor dentro  dele 
                soma() // chama a função soma()
            }
        }    
        if(v2.length >= 2 || v1.length >= 1){// aqui vamos fazer as contas funcionarem            
            if(v2.length >= 1 && v1.length >= 1){// Aqui vamos chama o v1.pop e limpa
                calculo = 0 // limpa  o calculo e colocar o 
                v1.pop()    // pop() em baixo, fazendo limpeza
        }
            resultado_amais.innerHTML = v2 // Aparece o v2 quando clicado
            abrirMeiaTela() //Vamos abrir a meia tela
        }
         if(tela_res.innerHTML == "0" && v1.length == 0){
             resultado_amais.innerHTML = tela_res.innerHTML
             resultado_1.innerHTML = tela_res.innerHTML 
         }
           
        
        if (tela_res.innerHTML == "0" && v1.length > 0){
            v1 = []
            v2 = 0
           calculo = 0, v3 = 0
           
            visor.innerHTML = tela_res.innerHTML
        if (tela_res.innerHTML == "0" && v1.length > 0){
            visor.innerHTML = ''
            
        }
       
        }
     
    }) 
})     
}


function opera(){
  
    operac.forEach((evento) =>{
        evento.addEventListener("click",()=>{
            if ((v2.length > 0) || (v1.length > 0) ){
                    operac_valor = evento.getAttribute('data-ope') //pega a operação que foi clicada
                    limpaResultado() 
                        if(c == 1){ // Se o c(vale 1) começa com 1
                            valor_diferente = operac_valor //V Original
                            c++ // c + 1, passando vale 2
                        }
                        if (valor_diferente != operac_valor){ //Se v DIFERENTE for diferente de operac
                            if (operac_valor != valor_diferente ){ 
                                if (operac_valor != "="){
                                    soma()
                                    v_antigo = operac_valor
                                    operac_valor = valor_diferente
                                    v2 = ''
                                    calculo = ''
                                    opeigual = ''
                                    c = 1
                                    valor_diferente = v_antigo
                                setInterval(()=>{
                                    operac_valor = valor_diferente
                                    au = operac_valor
                                    limpaTela()
                                    c = 0
                                    if ( operac_valor == "/"){
                            sinais_ope.innerHTML = "÷" 
                            
                        }else{
                            if (operac_valor != "="){
                                sinais_ope.innerHTML =`${au}`
                            }
                        
                        }
                    },'100')
                    } }
               
            }

            
            if (operac_valor == "="){
                opeigual = operac_valor
                limpaTela()
            }
    
                if(operac_valor.length > 0){
                    contador_soma ++
                    
                if(v2.length > 0){
                    v1.push(v2)    
                    v2 = "" 
                } 
                
            }
    
            
             if(operac_valor != "=" )    {
                if (operac_valor == "/"){
                    visor.innerHTML += " ÷ "
                }else{
                    visor.innerHTML += ` ${operac_valor} `
                }
                    au = operac_valor
                    cont_op++    
                if (cont_op > 1){
                    
                       soma()
                        v1 = []
                        v1.push(calculo)
                        calculo = ''
                        opeigual = ''
                        operac_valor = au
                        visor.innerHTML +=` ${au} `
                        limpaTela()
                       

                }
             }
             res_preen_tela()
             if(opeigual == '='){
                soma()
                v1 = []
                v1.push(calculo)
                calculo = ''
                opeigual = ''
                operac_valor = au


                
            }
             
                setTimeout(()=>{
                    res_preen_tela() 
                    soma()
                    v1 = []
                    v1.push(v3)
                    calculo = ''
                    opeigual = ''
                    operac_valor = au
                    resultado_1.innerHTML = v1[0] 
                    resultado_amais.innerHTML = v2
                    tela_res.innerHTML = v3
                    limpaTela()

                },'100')   
    
                if ( operac_valor == "/"){
                    sinais_ope.innerHTML = "÷" 
                     
                }else{
                    sinais_ope.innerHTML =`${au}`
                   
                } }
        }) 
    })
  
}
  
function soma(){
     v1.push(v2)// Fazendo o calculo -- só falta arruma a conta
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
                    calculo*= Number(soma)
                }
            }
            if(operac_valor == "%%" || au == "%%"){
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
                    calculo%= Number(soma)}
                    }

               
            }
            if(operac_valor == "%" || au == "%"){
                if(calculo == 0){
                    calculo = Number(soma)
                }else{
                    calculo= (calculo * Number(soma))/100}
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
                    calculo/= Number(soma)}
                    }
        }
        tela_res.innerHTML = calculo
        if (calculo != 0){
            v3 = calculo
            
         }
         if (calculo == 0){
            v1.pop()
            v1.push(0)
         }
        
        })
}
function res_preen_tela(){
    resultado_amais.innerHTML = ''
    for (let i in v1){
        if(i == 0){
            resultado_1.innerHTML = ` ${v1[i]} `}
        else{
                resultado_amais.innerHTML +=  `${v1[i]} </br>`
            }
       }
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
    visor.innerHTML = ""
    
}
function limpaTela(){
    if(v2.length < 1){
        visor.innerHTML = ''
        visor.innerHTML += `${v1[0]} ${operac_valor} `
        if(v1.length == 0 && isNaN(visor.innerHTML)){
            visor.innerHTML = ''
        }
    }
}
function limpar(){
    v1 = []
    v2 = ''
    calculo = ''
    v3 = ''
    cont_op = 0
    resultado.style.display = 'none'
    resultado.style.left = '100px'
    digitos.classList.remove('abriu')
    visor.classList.remove('abriu_visor')
    limpaResultado() 
    visor.innerHTML = ''
} 
function corrige(){
    submul = visor.innerHTML 
    submul = submul.replace(' ','')  
    visor.innerHTML = submul.slice(0,-1)
        v2 = v2.slice(0,-1)
       
        if (v2.length > 0 && v1.length > 0){
            resultado_amais.innerHTML = v2
            resultado_1.innerHTML = v1[0]
            tela_res.innerHTML = v3           
            
                        
                
        }
        
        if(v2.length ==  0){

            calculo = v1[0]
           
            if(operac_valor.length == 0){
                v1 = v1.toString()
                v1 = v1.slice(0,-1)
                 if(v1.length == 0 && calculo == 0){
                    v1 = []
                    calculo = ""
                    v3 = ""
                    limpar()
        }
            }
            
        }    
        if (v1.length == 0 && v2.length > 0 ){
            limpar()
            v2 = 0
            
        }
        if (v2.length == 0 ){
            limpar()
            v2 = ""
            v1= []
            v3 = ""
            operac_valor = ""

            

            
            
        }
        
}
numeros()
opera()

/*
1-) Fazer as contas fazer a operacao correta + ou -
2-) excluir os valores da tela, de resposta ou nao 

--- COMO FAZER PARA O VALOR DA 1 OPERAÇÃO NÃO SUMA
E DEPOIS FAZER O 2 VALOR FAÇA A OPERAÇÃO CPRRETA

--- tenho que criar uma variavel que segure o valor da 
operac ate que o usuario digite algum numero para soma ou multimplica
e depois não aumente o valor automatico. 

Conserta o erro de aperta igual e fazer os valores sumi e nao aparece
o sinal de igual
*/