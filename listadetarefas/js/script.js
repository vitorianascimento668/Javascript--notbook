let trePontos = document.querySelector('.cores_fundo')
let trePontosAouF = trePontos.style
let tres_pontos_div = document.querySelector('.botao_tresPonto').style
function tresPontos (){
    if(trePontosAouF.display == 'flex'){
        trePontos.style.display = "none"
        tres_pontos_div.marginBottom = '20px'
        tres_pontos_div.position =  "relative"
    }else{
        trePontos.style.display = "flex"
        tres_pontos_div.marginBottom = '-50px'
        tres_pontos_div.position =  "absolute"
        
    }
    
}
