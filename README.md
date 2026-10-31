# Convite de casamento — Beatriz & Caio

Site estático, responsivo e gratuito, pronto para publicar no **GitHub Pages**.

## Arquivos
- `index.html`: estrutura e textos do convite.
- `style.css`: aparência, cores e adaptação para celular.
- `script.js`: contagem regressiva, menu e confirmação pelo WhatsApp.
- `config.js`: principal arquivo para personalizar o convite.
- `assets/referencia-visual.png`: imagem enviada, guardada como referência visual (ela contém nomes e data diferentes, por isso não aparece no convite).

## 1. Personalize antes de publicar
Abra `config.js` e atualize:
- `venue` e `address`: igreja e endereço;
- `mapUrl`: link de compartilhamento do Google Maps;
- `whatsapp`: número com 55 + DDD + número, sem espaços ou símbolos;
- `dressCode` e `story`: textos opcionais;
- `photo`: caminho de uma foto, por exemplo `assets/foto-casal.jpg`.

A data inicial já está definida para 17/01/2027 às 16h, horário de Brasília. Se precisar alterá-la, atualize `date` no formato ISO com fuso `-03:00`, além de `dateLabel` e `timeLabel`.

## 2. Teste no computador
Dê dois cliques em `index.html` para abrir no navegador. Para testar a confirmação, preencha um número real no campo `whatsapp` de `config.js`.

## 3. Publique gratuitamente no GitHub Pages
1. Entre em https://github.com e abra o repositório `CAIO-E-BEATRIZ-CONVITE-DE-CASAMENTO` (ou crie um repositório público com esse nome).
2. Clique em **Add file → Upload files**.
3. Extraia o ZIP e envie os arquivos e a pasta `assets` (envie o conteúdo, não a pasta ZIP).
4. Clique em **Commit changes**.
5. No repositório, abra **Settings → Pages**.
6. Em **Build and deployment**, escolha **Deploy from a branch**.
7. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
8. Aguarde a publicação. O GitHub mostrará o endereço público do site na própria página de Pages.

## Observações
- O GitHub Pages hospeda gratuitamente sites estáticos em repositórios públicos.
- O formulário de presença abre o WhatsApp com uma mensagem pronta; o convidado ainda precisa tocar em Enviar.
- Não coloque dados privados no repositório. O telefone de RSVP ficará visível no código público.
