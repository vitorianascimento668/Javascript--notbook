let quadrinhos = document.querySelectorAll(".quadro")
let sorteio, c = 0

while(c < 5){
    sorteio =  Math.floor(Math.random() * (0 - 29 +1)) + 29
    if(quadrinhos[sorteio].innerHTML != "💣"){
        quadrinhos[sorteio].innerHTML += "💣"
        c++
    }
}
quadrinhos.forEach((quadros)=>{
    quadros.addEventListener("click",()=>{
      if (quadros.innerHTML != "💣"){
        quadros.innerHTML += "✔️" 
      }else 
      if (quadros.innerHTML == "💣"){
        alert("NAOUM")
      }
    })
})