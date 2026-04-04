# Zanzar

Descubra sites brasileiros independentes de forma aleatória. A cada clique em **Zanzar**, você é levado a um lugar diferente da web brasileira — jornalismo, tecnologia, cultura, cinema, literatura e mais.

Inspirado no [Wander](https://susam.net/wander/) de Susam Pal.

## Como usar

Abra o `index.html` no navegador. Nenhuma dependência ou servidor necessário.

## Estrutura

```
zanzar/
├── index.html   — interface
└── sites.js     — lista de sites
```

## Como contribuir

Contribuições são bem-vindas, especialmente para ampliar a lista de sites brasileiros independentes.

### Adicionando um novo site

1. Faça um fork do repositório no GitHub
2. Clone o seu fork:
   ```bash
   git clone https://github.com/seu-usuario/zanzar.git
   cd zanzar
   ```
3. Crie uma branch descritiva:
   ```bash
   git checkout -b adiciona-nome-do-site
   ```
4. Abra o arquivo `sites.js` e adicione a URL na lista `paginas`, dentro da categoria mais adequada:
   ```js
   var zanzar = {
     paginas: [
       // Tecnologia e desenvolvimento
       'https://exemplo.com.br/',
       // ...
     ]
   }
   ```
5. Faça o commit e envie para o seu fork:
   ```bash
   git add sites.js
   git commit -m "Adiciona exemplo.com.br à lista de sites"
   git push origin adiciona-nome-do-site
   ```
6. Abra um Pull Request para o repositório original pelo GitHub

### Critérios para aceitar um site

- Ter conteúdo predominantemente em português brasileiro
- Ser um site independente, pessoal ou de pequena publicação
- Estar ativo e acessível
- Não conter conteúdo enganoso, spam ou violações legais

## Licença

MIT
