
function mudarSlide(){ 
let i=0
const buttonLeft=document.querySelector("#left")
console.log(buttonLeft)
const caixas = document.querySelectorAll(".caixa")
console.log(caixas)
const buttonRight=document.querySelector("#right")
console.log(buttonRight)
const botao = document.querySelectorAll(".btn")

botao.forEach(bot => {
 bot.addEventListener("click",function(){
    if(buttonLeft===bot){
        console.log(i)
                caixas[i].classList.toggle("display");
            if(i>0){ 
                 i-- 
                    }else{
                        i=caixas.length-1;
                    }
                        console.log(i)
                        caixas[i].classList.toggle("display");
    }else{
        caixas[i].classList.toggle("display");
            if(i<caixas.length-1){ 
                i++
            }else{
                 i=0;
            }
                caixas[i].classList.toggle("display");
                }})   
    });
}

function AparecerBanners(){
    const banners = document.querySelectorAll(".banner")
        banners.forEach(banner=>{
            banner.addEventListener("click", function(){
                 banner.classList.add("fadeout")
        })
    })
}

function criarImagem(divPai,indObject){
    let imagem = document.createElement("div")
        imagem.classList.add("imagem");
            const contimagem= document.createElement("img")
                contimagem.setAttribute("src",indObject.imagem)
        imagem.appendChild(contimagem)
            criarImagemSecundaria(imagem,indObject)         
                divPai.appendChild(imagem)             
}

function criarImagemSecundaria(imagem,indObject){
     let cont2ImagemSec = document.createElement("div")
        cont2ImagemSec.classList.add("imagensSecundarias")
        cont2ImagemSec.classList.add("hide")
            let cont2ImagemSecCont = document.createElement("ul")
                 for(let img of indObject.imagensSecundarias){
                    let cont2ImagemSecContI=document.createElement("li")
                    cont2ImagemSecContI.innerHTML=img
                    cont2ImagemSecCont.appendChild(cont2ImagemSecContI)
                }
        cont2ImagemSec.appendChild(cont2ImagemSecCont)
                imagem.appendChild(cont2ImagemSec)
}
function criarDescricaoAprofundada(indObject,texto){
   let descricao = document.createElement("div") 
         descricao.classList.add("descricao")
         descricao.classList.add("hide")
          let descricaoTexto = document.createElement("p")
          descricaoTexto.innerHTML=indObject.descricaoaprofundada
            descricao.appendChild(descricaoTexto)
             texto.appendChild(descricao)

}

function criarTexto(divPai,indObject){
    let texto = document.createElement("div")
        texto.classList.add("texto");
            let contTextoTitulo = document.createElement("h2")
                contTextoTitulo.classList.add("titulo")
                contTextoTitulo.innerText=indObject.titulo
        texto.appendChild(contTextoTitulo)
                    let paragrafo = document.createElement("p");
                        paragrafo.innerText=indObject.descricao
        texto.appendChild(paragrafo)
                         let buttComprar = document.createElement("button")
                            buttComprar.type="button";
                            buttComprar.classList.add("comprar")
                            buttComprar.innerText="Comprar"
        texto.appendChild(buttComprar)
    criarDescricaoAprofundada(indObject,texto)
                     divPai.appendChild(texto)
}

function criarObjetos(objeto){
   for(let indObject of objeto){
        const contProd = document.querySelector("#produtos")
             let divPai = document.createElement("div")
                divPai.classList.add("item");
                divPai.classList.add("itemclass")
                    criarImagem(divPai,indObject)
                    criarTexto(divPai,indObject)
        contProd.appendChild(divPai)
                                } 
  }

function PaginaInicial(){
     let paginaInicial = document.querySelector("#container")  
        paginaInicial.classList.add("hide")
            let paginaProdutos = document.querySelector("#container-de-produtos")
                paginaProdutos.classList.add("hide")
                let homePage = document.querySelector("#pagina-inicial")
                    homePage.classList.remove("hide")
    
}
function clickTxtHome(){
    let txtCasinha = document.querySelector(".bi-house")
        txtCasinha.addEventListener("click", function(){
            PaginaInicial()
    })
}
function clickIconeHome(){
    let botaoCasinha = document.querySelector("#primeiro")
        botaoCasinha.addEventListener("click", function(){
            PaginaInicial()
    })
}
function enter(){
    const search = document.querySelector("#search")
        document.addEventListener("keydown",function(e){
            if(e.target===search){
                if(e.key==='Enter'){
                    acaoDePesquisar(search)
                }
            }
        })
}

function prepararPagina(){
    let paginaProdutos = document.querySelector("#container-de-produtos")
        let paginaInicial = document.querySelector("#container")
            let homePage = document.querySelector("#pagina-inicial")
    paginaProdutos.classList.add("hide");
        paginaInicial.classList.remove("hide");
            homePage.classList.add("hide")
}

function acaoDePesquisar(search){
    let tituloDaPagina = document.querySelector('#titulo-do-produto h1')
        let titles = document.querySelectorAll(".titulo")
            prepararPagina()
    tituloDaPagina.innerHTML=search.value
        titles.forEach(title =>{
            const elEscondido = title.parentElement.parentElement
                elEscondido.style.display="flex";
                    if(title.innerText.toLowerCase().includes(search.value.toLowerCase().trim())){
                        elEscondido.style.display="flex";
                    }else{
                        const elEscondido = title.parentElement.parentElement
                            elEscondido.style.display="none";
        
                        }
        })
}

function pesquisar(){
    const search = document.querySelector("#search")
        const button = document.querySelector("#bot")      
        button.addEventListener("click",function(){
             acaoDePesquisar(search)  
        }) 
}

async function chamarBancoDeProdutos(){
    try{
        const dados = await fetch('bancoDeProdutos.json');
            let objeto = await dados.json()
                mudarSlide()
                    AparecerBanners()
                        criarObjetos(objeto)
                            redirecionar(objeto)
                            clickTxtHome()
                                clickIconeHome()
                                    pesquisar()
                                    enter()
                                     
}catch{
        console.error("error")
    }
}

  chamarBancoDeProdutos()

function setarTextoDaPaginaProduto(elementPai){
    let conteudoDoTitulo = elementPai.querySelector(".titulo")
        let conteudoDaPagina = elementPai.querySelector("p")
            let tituloDaPaginaP = document.querySelector('#texto h1')
                let conteudoDaPaginaP = document.querySelector("#texto p")
            tituloDaPaginaP.innerHTML = conteudoDoTitulo.innerHTML
                conteudoDaPaginaP.innerHTML = conteudoDaPagina.innerHTML
}
function setarDescricaoProduto(elementPai){
        let conteudoDaDescricao = elementPai.querySelector(".descricao p")
                let descricaoDaPagina = document.querySelector("#descricaoProfunda p")
                descricaoDaPagina.innerHTML=conteudoDaDescricao.innerHTML
}

function setarImagensDaPaginaProduto(elementPai){
    console.log(elementPai)
    let imagemDaDiv = elementPai.querySelector("img") 
        let imagemDoProdutop = document.querySelector("#imagens img")
                imagemDoProdutop.setAttribute("src",imagemDaDiv.src)
                 return imagemDoProdutop
}

function setarImagemSecundariaDaPaginaProdutos(elementPai){
    console.log(elementPai)
    let imagensSecDoProd = elementPai.querySelectorAll("li")
        let outrasImagens = document.querySelector("#outrasImagens")
                outrasImagens.innerHTML=""
            for( let imgSecProd of imagensSecDoProd){
                let indvSecundariaimg = document.createElement("img") 
                    indvSecundariaimg.classList.add("imagem")
                    indvSecundariaimg.setAttribute("src","")
                    indvSecundariaimg.setAttribute("src",imgSecProd.innerHTML)
                        outrasImagens.appendChild(indvSecundariaimg)      
            }
            console.log(outrasImagens)
              return outrasImagens
}

  function criarPaginaDoProduto(elementPai,objeto){
            setarImagensDaPaginaProduto(elementPai)     
                setarImagemSecundariaDaPaginaProdutos(elementPai)
                    setarTextoDaPaginaProduto(elementPai)
                        setarDescricaoProduto(elementPai)
                            let outrasImagens=setarImagemSecundariaDaPaginaProdutos(elementPai)
                                let imagemDoProdutop=setarImagensDaPaginaProduto(elementPai)
                                    console.log(outrasImagens)  
                                trocarImagem(outrasImagens,imagemDoProdutop)
                                mostrasOutrosProdutos(elementPai,objeto)
}
function redirecionarDentroDaPaginaProdutos(objeto){
  let DivMae = document.querySelector("#outrosProdutos")
                 console.log(DivMae)
                let divOutrosProd = document.querySelectorAll(".itemSecundario button")
                DivMae.addEventListener("click",function(e){
                    if(e.target.classList.contains("confira")){
                        let botConfira = DivMae.querySelectorAll(".confira")
                            botConfira.forEach(divUmProd =>{
                                if(e.target===divUmProd){
                                    console.log(e.target)
                                    console.log(divOutrosProd)
                                    console.log(divUmProd)
                                abrirPaginaProduto(objeto,divUmProd) 
                                }
                            })
                    }
                }) 
}

function redirecionar(objeto){
        let botoesDeCompra = document.querySelectorAll(".comprar")
                let paginaProdutos = document.querySelector("#container-de-produtos")
                    let paginaInicial = document.querySelector("#container")
                        let homePage = document.getElementById("pagina-inicial")
        botoesDeCompra.forEach(botao=>{
            botao.addEventListener("click",function(){
                
                            let elementPai = botao.parentElement.parentElement
                paginaProdutos.classList.remove("hide");
                    paginaInicial.classList.add("hide");
                        homePage.classList.add("hide");
                            criarPaginaDoProduto(elementPai,objeto)
                            redirecionarDentroDaPaginaProdutos(objeto)              
            }) 
        })
}

function trocarImagem(outrasImagens,imagemDoProdutop){
 const imagemSecondClick = outrasImagens.querySelectorAll("img")
    console.log(imagemSecondClick)
        imagemSecondClick.forEach(img2=>{
            const img2p = img2
                img2.addEventListener("click",function(){
                    const imageminicial = imagemDoProdutop.src
                const second = img2.src
                    imagemDoProdutop.setAttribute("src","")
                    imagemDoProdutop.setAttribute("src",second)
                        img2.setAttribute("src","")
                        img2.setAttribute("src",imageminicial)
    })
})

}
function criarImagemDosItensSecundarios(divDoSec,objuni){
        divDoSec.classList.add("itemSecundario")
            console.log(divDoSec)
                imageSegunda = document.createElement("div")
                    imageSegunda.classList.add("imagemSec")
                        let imageDoProd = document.createElement("img")
                            imageDoProd.src=objuni.imagem
                                imageSegunda.appendChild(imageDoProd)
        divDoSec.appendChild(imageSegunda)
}
 function criarTextoDosItensSecundarios(divDoSec,objuni){
        let divDosTexto = document.createElement("div")
            divDosTexto.classList.add("conteudo")
                let titleProd= document.createElement("h1")
                    titleProd.innerHTML=objuni.titulo
                        let textProd=document.createElement("h2")
                            textProd.innerHTML=objuni.descricao
                                let botaoConfira = document.createElement("button")
                                    botaoConfira.classList.add("confira")
                                    botaoConfira.innerHTML="Confira"
            divDosTexto.appendChild(titleProd)
            divDosTexto.appendChild(textProd)
            divDosTexto.appendChild(botaoConfira)
    divDoSec.appendChild(divDosTexto)
 }

function mostrasOutrosProdutos(elementPai,objeto){
    let elementoPaiImagens = elementPai.querySelector("img")
        let divOutrosProd = document.querySelector("#outrosProdutos")
            divOutrosProd.innerHTML=""
                for(let objuni of objeto){
                    if(elementoPaiImagens.src!==objuni.imagem){
                        let divDoSec = document.createElement("div")
                            criarImagemDosItensSecundarios(divDoSec,objuni)
                            criarTextoDosItensSecundarios(divDoSec,objuni)
                        divOutrosProd.appendChild(divDoSec)   
                    } 
                }   
}

   function abrirPaginaProduto(objeto,divUmProd){
    let botaoProducts = document.querySelectorAll(".confira")
        let btnConfiraClick=divUmProd
            let bancoDeProdutosInfo  = document.querySelectorAll("#produtos .item")
               let itemUniDosItensSecundarios = btnConfiraClick.parentElement.parentElement
                    let infoImagemOfBanoProd = itemUniDosItensSecundarios.querySelector(".imagemSec img")
                        for(let itemBancoDeProdutosInfo of bancoDeProdutosInfo ){
                            let umaImagem = itemBancoDeProdutosInfo.querySelector("img")
                                console.log(umaImagem.src)
                                console.log(infoImagemOfBanoProd.src)
                                    if(infoImagemOfBanoProd.src == umaImagem.src){
                                        criarPaginaDoProduto(itemBancoDeProdutosInfo,objeto)
                                    }  
                        }
   }   