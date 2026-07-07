alert("Hey, ENGENE! 🪐 > Você acabou de entrar no portal definitivo sobre o ENHYPEN. Prepare-se para conhecer curiosidades incríveis sobre os membros e o conceito de vampiros do grupo. Boa navegação!")
const botoes = document.querySelectorAll("button")
    console.log(botoes)

            botoes.forEach(function (botao){
let curtiu =false;
botao.addEventListener("click", botaoClicado)
function botaoClicado(){
    console.log("botao clicado")
let texto = botao.querySelector("span")
texto.textContent++

}


            })