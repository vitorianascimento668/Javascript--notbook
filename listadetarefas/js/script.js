let mais_bot = document.querySelector(".botao_mais")
let cores = document.querySelectorAll(".cores")
let cores_display = document.querySelector(".cores_fundo")
let body_meio = document.querySelector(".body-meio")
let margin_cima = document.querySelector(".margin-cima")
let footer_baixo = document.querySelector(".footer-baixo")
let  valor_cor





function tresPontos(){
    
        cores_display.style.display = "flex"
    

    cores.forEach((cores)=>{
        cores.addEventListener("click",()=>{
            valor_cor = cores.getAttribute("data-cores")
            mudança_cor()
            cores_display.style.display = "none"
        })
    })
    
}
function  mudança_cor(){
    switch (valor_cor){
        case valor_cor == "amarelo":
           
            
        break
        case valor_cor == "verde":
           
            
        break
        case valor_cor == "lilais":
           
            
        break
        case valor_cor == "rosa":
           
            
        break
        case valor_cor == "red":
           
            
        break
        case valor_cor == "azul":
           
            
        break
        case valor_cor == "cinza":
           
            
        break
        case valor_cor == "preto":
           
            
        break

    }
}



// VOU FAZER ESSES BOTÃO DEPOIS.
function mais(){ // botao MAIS 
    alert('Aqui vai clonar a minha div')
}
function xis (){// botao XXX 
    alert('aqui fecha a div')
}
