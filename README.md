# 💲 Casa de Câmbio 💵 

O projeto da casa de câmbio é uma aplicação que busca a conversão da taxa de uma moeda para diversas outras.
O protótipo da aplicação está [nesse link](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1).

## Requisitos

### 1. Ambiente do Projeto
- [x] Criar um repositório do zero ou fazer um fork desse repositório (fique à vontade para fazer PRs quando terminar o desenvolvimento).
- [x] Iniciar projeto com NPM.
- [x] Estruturar o projeto para usar ESModules (usar `type` como `module` no `package.json` e nas tags `script`).
- [x] Instalar Vite como Dev Tool e `npm run dev`.

### 2. Estrutura da Aplicação
- [x] Estruturar o HTML de acordo com [protótipo](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1).
- [x] Criar tags semânticas no HTML.

### 3. Interação com API
- [x] O endpoint da API que deverá ser usada é `https://api.exchangerate.host/latest?base=${moeda}`. 
- [x] A moeda a ser pesquisada deverá ser passada como o parâmetro `moeda` do _endpoint_.
- [x] Todas as moedas deverão ser listadas na tela.
> [Link da documentação da API](https://exchangerate.host/#/docs) caso necessário

### 4. Tratamento de Erro
- [x] Você deve usar o [Sweet Alert 2](https://sweetalert2.github.io/) para as mensagens de Erro.
- [x] Um erro deverá aparecer quando nenhuma moeda é passada.
- [x] Um erro deverá aparecer quando uma moeda inexistente é passada.
