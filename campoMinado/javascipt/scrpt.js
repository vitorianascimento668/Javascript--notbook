let quadrinhos = document.querySelectorAll(".quadro")
let sorteio, c
for (c=0; c < 5; c++){
    sorteio =  Math.floor(Math.random() * (0 - 30 +1)) + 30
    quadrinhos[sorteio].innerHTML += "💣"
}
quadrinhos.forEach((quadros)=>{
    quadros.addEventListener("click",()=>{
      
    })
})