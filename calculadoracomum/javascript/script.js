let visor = document.querySelector('.visor')
let num = document.querySelectorAll('.num')
let operac = document.querySelectorAll('.operac')
let dataNum = 0
let operac_valor = ''
let v1 = []
let au = 0
var v2 = ''


function numeros(){
    operac.forEach((evento) =>{
        evento.addEventListener("click",()=>{
            operac_valor = evento.getAttribute('data-ope')

            if(operac_valor != '=')    {
                visor.innerHTML += ` ${operac_valor} `

            }
           
            if(operac_valor.length > 0){
                if (v2.length > 0){               
                v1.push(v2)
                v2 = ''
                operac_valor = ''
            }else{
                alert('ERRO, SELECIONE UM VALOR')
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
        v1.forEach((num)=>{
            if (operac_valor === '+'){
                au += Number(num)

                
            }else if(operac_valor === '-'){
                au -= Number(num)
            }

        })


}

numeros()

/*
1-) corrigir o valor para cair inteiro dentro da variavel, sem quebra, antes de aperta o valor de operação
2-) preencher a tela que aparece com a conta inteira aberta
3-)fazer a soma, subtração e adicão funcionar

*/