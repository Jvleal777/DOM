let qtd_itens = 0
let qtd_itens_comprados = 0


function cadastrar_item(){
  console.log('botao cadastrar clicado')
  const campo_nome = document.querySelector('#nome')
  const nome = campo_nome.value    

  const campo_quantidade = document.querySelector('#quantidade')
  const quantidade = campo_quantidade.value
  const item = criar_item(nome,quantidade)

  const lista_itens = document.querySelector('#itens')
  lista_itens.appendChild(item)

  campo_nome.value = ''
  campo_quantidade.value = ''
  campo_nome.focus()
  qtd_itens +=1
  atualizar_dados()
} 

function atualizar_dados(){
  const span_qtd_itens = document.querySelector('#contador_itens')
  const span_qtd_itens_comprados = document.querySelector('#itens_pg')
  span_qtd_itens.innerHTML = qtd_itens
  span_qtd_itens_comprados.innerHTML = qtd_itens_comprados
}

function criar_item(nome,quantidade){
const item = document.createElement('li')
const descricao = document.createElement('span')
const botao_remover = document.createElement('button')
const checkbox_comprar = document.createElement('input')
checkbox_comprar.setAttribute('type', 'checkbox')

descricao.innerText = `${nome} - quantidade: ${quantidade}`
botao_remover.innerText = 'Remover'
botao_remover.onclick = (event) => {
  const item = event.target.parentNode
  qtd_itens -=1
  atualizar_dados()
  item.remove()
}

checkbox_comprar.onchange = (event) => {
  const checkbox = event.target
  const marca = checkbox.checked

if(marca === true){
  qtd_itens_comprados +=1
}
else{
  qtd_itens_comprados -=1
}
atualizar_dados()
}

item.appendChild(descricao)
item.appendChild(checkbox_comprar)
item.appendChild(botao_remover)


return item
}

function main(){
const botao_cadastrar = document.querySelector('#botao_cadastrar')
botao_cadastrar.onclick = cadastrar_item
atualizar_dados()
}

main()