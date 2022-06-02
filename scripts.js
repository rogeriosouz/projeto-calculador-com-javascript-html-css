let conta = ''

function ferificar(but) {
  for (let i = 0; i < 14; i++) {
    let buttt = document.querySelectorAll('.but').item(i).innerHTML
    if (but == '=' || but == 'C' || but == 'L' || but == 0) {
      return false
    }
    if (but == buttt) {
      return true
    }
  }
}

document.addEventListener('click', (e) => {
  let buttaoo = e.target.innerHTML
  buttaoo = buttaoo.replace('⌫', 'L')
  if (ferificar(buttaoo)) {
    conta += buttaoo
    const tela = document.querySelector('.tela')
    tela.innerHTML = conta

  } else {
    if (buttaoo == '=') {
      try {
        conta = conta.replace('x', '*')
        calculo = String(conta)
        resultado = eval(calculo)
        const tela = document.querySelector('.tela')
        tela.innerHTML = resultado
        conta = ''
      } catch (error) {
        const tela = document.querySelector('.tela')
        tela.innerHTML = 'calculo invalido'
        conta = ''
      }

    }
    if (buttaoo == 'L') {
      conta = conta.slice(0, -1)
      const tela = document.querySelector('.tela')
      tela.innerHTML = conta
    }
    if (buttaoo == 'C') {
      conta = ''
      const tela = document.querySelector('.tela')
      tela.innerHTML = conta
    }
    if (buttaoo == '0') {
      conta += buttaoo
      const tela = document.querySelector('.tela')
      tela.innerHTML = conta
    }
  }

})


