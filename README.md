# React : Estado compartilhado entre componentes filhos

## Definição
**Para coletar dados de múltiplos filhos (children), ou para fazer dois filhos se comunicarem entre si, você precisa declarar um estado compartilhado em seu componente pai. O componente pai pode passar o estado de volta para os filhos através do uso de propriedades (props); isso mantém os componentes filhos em sincronia com os seus irmãos e também com o pai.**

## Exemplo
- Componente pai - FormLogin
  - Componentes filho: Input, Button e ButtonImage

## Script
1. `pnpx create-react-app react-shared-state` : criar uma aplicação web react
2. `cd react-shared-state`
3. `pnpm i react-bulma-components`
4. `pnpm start`
5. criar o diretório `src\components` : diretórios contendo os componentes
6. criar o arquivo `src\components\index.js` : arquivo com a referência dos componentes
7. criar os arquivos dos componentes
   - `src\components\FormLogin.js` : componente usando `class`
   - `src\components\Button.js`  : componente usando `arrow funtion`
   - `src\components\ButtonImage.js` : componente usando `arrow funtion`
8. modificar o arquivo `src\components\index.js` com as referências dos componentes
9. modificar `src/App.js`
10. modificar componentes


## Link
- Tutorial React [Movendo o state para cima](https://pt-br.reactjs.org/tutorial/tutorial.html#lifting-state-up)
- [Bulma framework para estilo](https://bulma.io)
  - Tutoriais para React
    - [Using Bulma with React](https://www.bradmcgonigle.com/blog/using-bulma-with-react)
    - [Introduction to Bulma CSS with React](https://www.digitalocean.com/community/tutorials/react-intro-react-bulma-components)