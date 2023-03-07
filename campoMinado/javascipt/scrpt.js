let quadrinhos = document.querySelectorAll('.quadro')
let novojogo = document.querySelector('.novo_jogo')
let dataHora = document.querySelector(".relogio_digital")
let ganhouOuperdeu = document.querySelector('.resposta')
let sorteio, c = 0, contador = 0, atri, vetor = [], p=0, data_num = 0, ss=0,
minu =0, v_de_ok = 0, soma_final = 0

function inicio (){
    programa()
    
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
                perdeuOuganhou()
               }
               if(vetor[data_num] == "💣")
            {
                quadros.innerHTML = "💣"
                ganhouOuperdeu.innerHTML = "VOCÊ PERDEU !!"
                perdeu()
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
                ss = 0
                minu = 0
            }
            
        }
        ganhouOuperdeu.innerHTML = ""
    })
}
function cronometro(){
    setInterval(()=>{
        
        if (ss == 60){
            minu+= 1
            ss = 0
    
        }
        ss+=1
        dataHora.innerHTML = `${minu}:${ss}`
        
    },'1000')   
}
function perdeuOuganhou(){
    
        if (quadrinhos[data_num].innerHTML == "✔️"){
            v_de_ok++
        }
        if (v_de_ok == 25){
            ganhouOuperdeu.innerHTML = "VOCÊ GANHOU, PARABENS!! "
        }
    
}
function perdeu(){
    for(let i=0; i < quadrinhos.length ;i++ ){
        if(vetor[i] == "💣"){
            quadrinhos[i].innerHTML = "💣"
            soma_final++
        }
        if(quadrinhos[i].innerHTML == "" && quadrinhos[i].innerHTML != "✔️"){
            quadrinhos[i].innerHTML = "❌"
            soma_final++
        }    
    }
    if(soma_final == 29){
        ganhouOuperdeu.innerHTML = "VOCÊ PERDEU !!! Que pena !"
    }
}
inicio()
novo()
cronometro()