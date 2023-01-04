let trePontos = document.querySelector('.cores_fundo')
let trePontosAouF = trePontos.style
let tres_pontos_div = document.querySelector('.botao_tresPonto').style
let margin_cima = document.querySelector('.margin-cima')
let body_meio = document.querySelector(".body-meio")
let area_body = document.querySelector(".texto_caixa")
let footer_baixo = document.querySelector(".footer-baixo")
let normal_variavel = ""
let valorArea = ''
let negrito_variavel = ''
let ope_1 = 1, ope_2 = 0
function tresPontos (){
    if(trePontosAouF.display == 'flex'){
        trePontos.style.display = "none"
        tres_pontos_div.marginBottom = '20px'
        tres_pontos_div.position =  "relative"
        document.querySelector('.Verde').get
        
    }else{
        trePontos.style.display = "flex"
        tres_pontos_div.marginBottom = '-50px'
        tres_pontos_div.position =  "absolute"
        
    }
    
}
function  cores(){
    document.querySelector('.amarelo').addEventListener('click',()=>{
        margin_cima.style.backgroundColor = "rgb(200 200 58)"
        area_body.style.backgroundColor = " rgb(250, 250, 32)"
        body_meio.style.backgroundColor = " rgb(250, 250, 32)"
        footer_baixo.style.backgroundColor = " rgb(250, 250, 32)"
        tresPontos ()
    })
    document.querySelector('.Verde').addEventListener('click',()=>{
        margin_cima.style.backgroundColor = "rgb(48 157 61)"
        area_body.style.backgroundColor = "rgb(169 242 164)"
        body_meio.style.backgroundColor = "rgb(169 242 164)"
        footer_baixo.style.backgroundColor = "rgb(169 242 164)"
        tresPontos ()
    })
    document.querySelector('.lilais').addEventListener('click',()=>{
        margin_cima.style.backgroundColor = "rgb(158 117 164)"
        area_body.style.backgroundColor = "rgb(212 173 218 / 85%)"
        body_meio.style.backgroundColor = "rgb(212 173 218 / 85%)"
        footer_baixo.style.backgroundColor = "rgb(212 173 218 / 85%)"
        tresPontos ()
    })
    document.querySelector('.rosa').addEventListener('click',()=>{
        margin_cima.style.backgroundColor = "rgb(251 11 143 / 72%)"
        area_body.style.backgroundColor = "rgb(255 0 150 / 4%)"
        body_meio.style.backgroundColor = "rgb(255 0 150 / 48%)"
        footer_baixo.style.backgroundColor = "rgb(255 0 150 / 48%)"
        tresPontos ()
    })
    document.querySelector('.red').addEventListener('click',()=>{
        margin_cima.style.backgroundColor = "#870a0a"
        area_body.style.backgroundColor = "#bd0404b8"
        body_meio.style.backgroundColor = "transparent"
        footer_baixo.style.backgroundColor = "#bd0404b8"
        tresPontos ()
    })
    document.querySelector('.azul').addEventListener('click',()=>{
        margin_cima.style.backgroundColor = "rgb(0 223 248)"
        area_body.style.backgroundColor = "rgb(146 222 231)"
        body_meio.style.backgroundColor = "rgb(146 222 231)"
        footer_baixo.style.backgroundColor = "rgb(146 222 231)"
        tresPontos ()
    })
    document.querySelector('.cinza').addEventListener('click',()=>{
        margin_cima.style.backgroundColor = "grey"
        area_body.style.backgroundColor = "#d8d8d8de"
        body_meio.style.backgroundColor = "#d8d8d8de"
        footer_baixo.style.backgroundColor = "#d8d8d8de"
        tresPontos ()
    })
    document.querySelector('.pretoC').addEventListener('click',()=>{
        margin_cima.style.backgroundColor = "rgb(66 66 66)"
        area_body.style.backgroundColor = "rgb(62 62 62 / 0%)"
        body_meio.style.backgroundColor = "rgb(62 62 62 / 55%)"
        footer_baixo.style.backgroundColor = "rgb(62 62 62 / 55%)"
        tresPontos ()
    })
    
    
}

function negrito(){
    if(ope_1 == 1){
        negrito_variavel = document.createElement('span')
        negrito_variavel.classList.add('negrito')
        area_body.appendChild(negrito_variavel)  
        ope_1 = 2
        ope_2 = 0  
    }
    else if(ope_2 == 0){
        normal_variavel = document.createElement('span')
        normal_variavel.classList.add('texto_caixa')
        area_body.appendChild(normal_variavel)  
        negrito_variavel = ''
        ope_1 = 1
        ope_2 = 2
    }


}
function italico(){
    
}
function sublinhado(){
    
}
function tachado(){
    
}
function marcadores(){
    
}
cores()
