# Zanzar

Projeto estático sem dependências. Abre diretamente no navegador via `index.html`.

## Estrutura

- `index.html` — interface do usuário
- `app.js` — lógica de navegação aleatória (IIFE, vanilla JS)
- `sites.js` — lista de sites (`var zanzar = { paginas: [...] }`), **gerado pelo script**
- `style.css` — estilos
- `extrair_sites.py` — script Python que lê `brcrawl.sqlite3` e regenera `sites.js`
- `.gitignore` — ignora `brcrawl.sqlite3` (arquivo local, 1GB, não versionado)

## Dataset

A lista de sites vem do [BR Crawl](https://github.com/guites/brcrawl). Para atualizar:

```bash
python3 extrair_sites.py
```

Requer `brcrawl.sqlite3` na raiz do projeto (não versionado). Usa apenas `status_id=1` (feeds verificados).

## Critérios para sites na lista

- Conteúdo predominantemente em português brasileiro
- Site independente, pessoal ou de pequena publicação
- **Sem fins lucrativos como objetivo principal**
- Ativo e acessível
- Sem conteúdo enganoso, spam ou violações legais

## O que NÃO adicionar

- Portais de tecnologia de grande audiência (canaltech, tecmundo, tecnoblog, etc.)
- Grandes veículos de mídia comercial (UOL, Folha, Globo, BBC, etc.)
- Revistas de grandes grupos editoriais (Abril, Globo, etc.)
- Sites com modelo de negócio baseado em volume de tráfego/publicidade

## Como adicionar um site

Prefira contribuir ao dataset do BR Crawl. Para adição manual pontual, editar `sites.js` diretamente e adicionar a URL no array `paginas`.
