let quadrinhos = document.querySelectorAll('.quadro')
let novojogo = document.querySelector('.novo_jogo')
let dataHora = document.querySelector(".relogio_digital")
let sorteio, c = 0, contador = 0, atri, vetor = [], p=0, data_num = 0, ss=0,
minu =00

function inicio (){
    programa()
    cronometro()
    for (p =0; p < quadrinhos.length ; p++){
        if (vetor[p] != "💣"){
            vetor[p] = "*"
        }
    }
    transforme()

}
function transforme (){
        quadrinhos.forEach((quadros)=>{
            quadros.addEventListener("click",()=>{
               data_num = quadros.getAttribute("data-num")
               if (vetor[data_num]== "*"){
                quadros.innerHTML = "✔️"
               }
               if(vetor[data_num] == "💣")
            {
                quadros.innerHTML = "💣"
            }})
        })
}

function programa(){
    while(c < 5){
            sorteio =  Math.floor(Math.random() * (0 - 29 +1)) + 29
            
            if( vetor[sorteio]!= "💣"){
                vetor[sorteio] = "💣"
                c++
            
        }
    }
}
function novo (){
    novojogo.addEventListener('click',()=>{
        c= 0
        p = 0
        vetor = []
        
        for (contador = 0;contador < 30;contador++){
            quadrinhos[contador].innerHTML = ""
            
            if (contador == 29){
                inicio ()
                programa()
                transforme()
            }
            
        }
    })
}
function cronometro(){
    setInterval(()=>{
        ss++
        if (ss == 60){
            minu++
            ss = 0
    
        }
        dataHora.innerHTML = `${minu}:${ss}`
    },'1000')
    
    
}
inicio()
novo()
transforme ()