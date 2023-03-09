let mais_bot = document.querySelector(".botao_mais")
let cores = document.querySelectorAll(".cores")
let cores_display = document.querySelector(".cores_fundo")

let  valor_cor





function tresPontos(){
    
        cores_display.style.display = "flex"
    

    cores.forEach((cores)=>{
        cores.addEventListener("click",()=>{
            valor_cor = cores.getAttribute("data-cores")
            cores_display.style.display = "none"
        })
    })
    
}




// VOU FAZER ESSES BOTÃO DEPOIS.
function mais(){ // botao MAIS 
    alert('Aqui vai clonar a minha div')
}
function xis (){// botao XXX 
    alert('aqui fecha a div')
}
