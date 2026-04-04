(function () {
  'use strict'

  var historico = []
  var totalSites = 0
  var paginas = []
  var urlAtual = ''

  function init() {
    if (typeof zanzar === 'undefined' || !Array.isArray(zanzar.paginas)) {
      console.error('Arquivo sites.js não carregado corretamente.')
      return
    }

    paginas = zanzar.paginas.filter(function (url) {
      return url && url.trim() !== ''
    })

    totalSites = paginas.length
    atualizarContador()

    document.getElementById('btn-vagar').addEventListener('click', function () {
      vagar()
    })

    document.getElementById('btn-vagar-grande').addEventListener('click', function () {
      vagar()
    })

    document.getElementById('btn-ir').addEventListener('click', function () {
      var url = document.getElementById('campo-url').value.trim()
      if (url) carregarUrl(url)
    })

    document.getElementById('campo-url').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var url = this.value.trim()
        if (url) carregarUrl(url)
      }
    })

    document.getElementById('btn-sobre').addEventListener('click', function () {
      abrirSobre()
    })

    document.getElementById('btn-fechar').addEventListener('click', fecharSobre)

    document.getElementById('sobreposicao').addEventListener('click', function (e) {
      if (e.target === this) fecharSobre()
    })

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fecharSobre()
    })
  }

  function vagar() {
    if (paginas.length === 0) return
    var url = paginas[Math.floor(Math.random() * paginas.length)]
    carregarUrl(url)
  }

  function carregarUrl(url) {
    var quadro = document.getElementById('quadro')
    var telaInicial = document.getElementById('tela-inicial')
    var linkNovaAba = document.getElementById('link-nova-aba')

    telaInicial.style.display = 'none'
    quadro.style.display = 'block'
    quadro.src = url
    urlAtual = url

    linkNovaAba.href = url
    linkNovaAba.classList.add('visivel')

    document.getElementById('campo-url').value = url
    document.getElementById('info-site').textContent = url

    if (historico.indexOf(url) === -1) {
      historico.unshift(url)
      if (historico.length > 50) historico.pop()
    }
  }

  function abrirSobre() {
    var lista = document.getElementById('lista-sites')
    var listaHistorico = document.getElementById('lista-historico')

    lista.innerHTML = ''
    paginas.forEach(function (url) {
      lista.appendChild(criarItemLista(url))
    })

    listaHistorico.innerHTML = ''
    if (historico.length === 0) {
      var li = document.createElement('li')
      li.textContent = 'Nenhuma página visitada ainda.'
      listaHistorico.appendChild(li)
    } else {
      historico.forEach(function (url) {
        listaHistorico.appendChild(criarItemLista(url))
      })
    }

    document.getElementById('sobreposicao').classList.add('aberto')
  }

  function criarItemLista(url) {
    var li = document.createElement('li')
    var link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener'
    link.textContent = url
    li.appendChild(link)
    return li
  }

  function fecharSobre() {
    document.getElementById('sobreposicao').classList.remove('aberto')
  }

  function atualizarContador() {
    document.getElementById('contador').textContent = totalSites + ' sites'
  }

  init()
}())
