# Zanzar

Descubra sites brasileiros independentes de forma aleatória. A cada clique em **Zanzar**, você é levado a um lugar diferente da web brasileira — jornalismo, tecnologia, cultura, cinema, literatura e mais.

Inspirado no [Wander](https://susam.net/wander/) de Susam Pal.

## Como usar

Abra o `index.html` no navegador. Nenhuma dependência ou servidor necessário.

## Estrutura

```
zanzar/
├── index.html         — interface
├── app.js             — lógica de navegação
├── sites.js           — lista de sites (gerado)
├── style.css          — estilos
└── extrair_sites.py   — script para atualizar a lista
```

## Dataset

A lista de sites é gerada a partir do dataset [BR Crawl](https://github.com/guites/brcrawl), um índice de feeds RSS de blogs brasileiros independentes.

Para atualizar a lista com uma versão mais recente do dataset:

1. Baixe o arquivo `brcrawl.sqlite3` do repositório do BR Crawl
2. Coloque-o na raiz do projeto
3. Execute o script de extração:
   ```bash
   python3 extrair_sites.py
   ```
4. Commit o `sites.js` atualizado

> O arquivo `brcrawl.sqlite3` não é versionado (está no `.gitignore`).

## Como contribuir

Contribuições são bem-vindas, especialmente para ampliar a lista de sites brasileiros independentes.

### Adicionando um novo site via dataset

A forma preferida é contribuir diretamente ao [BR Crawl](https://github.com/guites/brcrawl) para que o site seja incluído no dataset. Ao atualizar o dataset localmente e rodar `python3 extrair_sites.py`, o site aparecerá automaticamente na lista.

### Adicionando um site manualmente

Para adicionar um site que ainda não está no dataset:

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
4. Abra o arquivo `sites.js` e adicione a URL na lista `paginas`:
   ```js
   var zanzar = {
     paginas: [
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
