let mais_bot = document.querySelector(".botao_mais")
let cores = document.querySelectorAll(".cores")
let cores_display = document.querySelector(".cores_fundo")
let body_meio = document.querySelector(".body-meio")
let margin_cima = document.querySelector(".margin-cima")
let footer_baixo = document.querySelector(".footer-baixo")
let texto_caixa = document.querySelector(".texto_caixa")
let  valor_cor





function tresPontos(){
    
        cores_display.style.display = "flex"
    

    cores.forEach((cores)=>{
        cores.addEventListener("click",()=>{
            valor_cor = cores.getAttribute("data-cores")
            mudanca_cor()
            cores_display.style.display = "none"
        })
    })
    
}
function  mudanca_cor(){
    
    switch (valor_cor){
        
        case valor_cor = "amarelo":
           body_meio.style.backgroundColor="rgb(250, 250, 32)"
           margin_cima.style.backgroundColor="rgb(250, 250, 32)"
           footer_baixo.style.backgroundColor="rgb(250, 250, 32)"
           texto_caixa.style.backgroundColor="rgb(250, 250, 32)"
           texto_caixa.style.color = "black"
        break
        case valor_cor = "verde":
            body_meio.style.backgroundColor="rgb(141, 199, 141)"
            margin_cima.style.backgroundColor="rgb(141, 199, 141)"
            footer_baixo.style.backgroundColor="rgb(141, 199, 141)"
            texto_caixa.style.backgroundColor="rgb(141, 199, 141)"
            texto_caixa.style.color = "black"
        break
        case valor_cor = "lilais":
            body_meio.style.backgroundColor="rgb(255, 154, 250)"
            margin_cima.style.backgroundColor="rgb(255, 154, 250)"
            footer_baixo.style.backgroundColor="rgb(255, 154, 250)"
            texto_caixa.style.backgroundColor="rgb(255, 154, 250)"
            texto_caixa.style.color = "black"
        break
        case valor_cor = "rosa":
            body_meio.style.backgroundColor="rgb(230, 42, 145)"
            margin_cima.style.backgroundColor="rgb(230, 42, 145)"
            footer_baixo.style.backgroundColor="rgb(230, 42, 145)"
            texto_caixa.style.backgroundColor="rgb(230, 42, 145)"
            texto_caixa.style.color = "black"
        break
        case valor_cor = "red":
            body_meio.style.backgroundColor="red"
            margin_cima.style.backgroundColor="red"
            footer_baixo.style.backgroundColor="red"
            texto_caixa.style.backgroundColor="red"
            texto_caixa.style.color = "white"
            
        break
        case valor_cor = "azul":
            body_meio.style.backgroundColor="rgb(147, 192, 218)"
            margin_cima.style.backgroundColor="rgb(147, 192, 218)"
            footer_baixo.style.backgroundColor="rgb(147, 192, 218)"
            texto_caixa.style.backgroundColor="rgb(147, 192, 218)"
            texto_caixa.style.color = "white"
        break
        case valor_cor = "cinza":
            body_meio.style.backgroundColor="rgb(163, 154, 154)"
            margin_cima.style.backgroundColor="rgb(163, 154, 154)"
            footer_baixo.style.backgroundColor="rgb(163, 154, 154)"
            texto_caixa.style.backgroundColor="rgb(163, 154, 154)"
            texto_caixa.style.color = "white"
            
        break
        case valor_cor = "preto":
            body_meio.style.backgroundColor="rgb(66 66 66)"
            margin_cima.style.backgroundColor="rgb(66 66 66)"
            footer_baixo.style.backgroundColor="rgb(66 66 66)"
            texto_caixa.style.backgroundColor="rgb(66 66 66)"
            texto_caixa.style.color = "white"
            
        break

    }
}
function posicaoTela() {
    body_meio.addEventListener("click",(e)=>{
        let rect = body_meio.getBoundingClientRect()
        let x =  e.clientX - rect.left;
        let y =  e.clientY - rect.top;
      
      console.log("Esquerda: " + x + " - Topo: " + y);

    })
}


// VOU FAZER ESSES BOTÃO DEPOIS.
function mais(){ // botao MAIS 
    alert('Aqui vai clonar a minha div')
}
function xis (){// botao XXX 
    alert('aqui fecha a div')
}
