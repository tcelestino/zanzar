# Zanzar

Projeto estático sem dependências. Abre diretamente no navegador via `index.html`.

## Estrutura

- `index.html` — interface do usuário
- `app.js` — lógica de navegação aleatória (IIFE, vanilla JS)
- `sites.js` — lista de sites (`var zanzar = { paginas: [...] }`)
- `style.css` — estilos

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

Editar `sites.js`, adicionar a URL no array `paginas` dentro da categoria adequada.
