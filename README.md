# donnacostureira# Donna — Versão HTML/CSS/JS

Este repositório é uma conversão do meu projeto em TypeScript/React para **HTML, Tailwind CSS e JavaScript puro**. O objetivo é manter a mesma UX/UI, facilitar o estudo e permitir deploy simples (ex.: GitHub Pages).

## Estrutura
- `index.html` — página única (SPA-like). Contém header, hero, serviços, sobre, contato, local e footer.
- `styles.css` — pequenas regras adicionais; Tailwind é responsável pela maior parte do styling.
- `script.js` — comportamento: menu mobile, smooth scroll, envio de formulário via WhatsApp.
- `assets/` — imagens e ícones.

## Como usar
1. Coloque as imagens indicadas dentro de `assets/`.
2. Ajuste o número de WhatsApp no `index.html` e `script.js` (procure por `55229XXXXXXXX`).
3. Abra `index.html` no navegador ou rode um servidor estático (`npx http-server` ou `python -m http.server`).
4. Para estudar Tailwind: a página usa o CDN. Em produção, recomenda-se compilar com `tailwindcss` para gerar CSS otimizado.

## Arquivos de imagem/ícone esperados (nomes sugeridos)
- `assets/logo.png` — logo da oficina (favicon opcional).
- `assets/hero.jpg` — imagem grande do hero (costureira, manequim, etc).
- `assets/sobre.jpg` — foto para a seção "Sobre".
- `assets/servico-1.jpg` `servico-2.jpg` `servico-3.jpg` — imagens para cartões de serviço.
- `assets/instagram.svg` — ícone do Instagram.
- `assets/whatsapp.svg` — ícone do WhatsApp.
- `assets/map.png` — imagem do mapa (pode ser screenshot do Google Maps).

## Principais trechos para estudar
- `index.html`: veja como a estrutura semântica (`<section id="...">`) facilita navegação e SEO.
- `script.js`: o envio do formulário usa a técnica de redirecionar para `wa.me` com texto URL-encoded — sem necessidade de backend.
- Tailwind utilities: procure classes como `grid`, `gap-6`, `rounded-md`, `soft-card` (esta é custom) para ver como o layout foi montado.

## Sugestões de evolução
- Substituir CDN do Tailwind por build com PostCSS para otimização.
- Adicionar um favicon e metatags OpenGraph (para compartilhamento).
- Melhorar acessibilidade: labels no form, foco de navegação, contraste.
- Se quiser componentes dinâmicos (ex.: galeria com lightbox), eu posso adicionar em JS puro.

