let quadrinhos = document.querySelectorAll(".quadro")
let sorteio, c = 0, contador = 0
let novojogo = document.querySelector('.novo_jogo')

function inicio (){
    programa()
    quadrinhos.forEach((quadros)=>{
        quadros.addEventListener("click",()=>{  
          if (quadros.innerHTML != "💣"){
            quadros.innerHTML = "✔️" 
          }else 
          if (quadros.innerHTML == "💣"){
            alert("NAOUM")
          }
        })
    })
}
function programa(){
    while(c < 5){
        sorteio =  Math.floor(Math.random() * (0 - 29 +1)) + 29
        if(quadrinhos[sorteio].innerHTML != "💣"){
            quadrinhos[sorteio].innerHTML = "💣"
            c++
        }
    }
}
function novo (){
    novojogo.addEventListener('click',()=>{
        c= 0
        for (contador = 0;contador < 30;contador++){
            quadrinhos[contador].innerHTML = ""
            if (contador == 29){
                
                programa()
            }
        }
    })
}
inicio()
novo()