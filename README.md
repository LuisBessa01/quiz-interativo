<!-- OBJETIVO -->

Este projeto tem como objetivo a criação de um quiz interativo utilizando React. O usuário poderá responder a um conjunto de 10 questões, visualizar o tempo gasto em cada uma e avançar para a próxima. Durante a execução, o tempo será gerenciado para cada questão e a pontuação será acumulada conforme as respostas corretas. O projeto tem como foco o aprendizado e aplicação de conceitos fundamentais do React, como:

-useState e useEffect
-Passagem de props
-CSS Modules
-Componentes por responsabilidade
-Manipulação de tempo e estado

<!-- Tecnologias Utilizadas -->

-React (hooks: useState, useEffect)
-CSS Modules (para estilização)
-JavaScript
-Vite (para desenvolvimento e build)

<!-- Estrutura do Projeto -->
src/
├─ components/
│ ├─ Header/
│ │ ├─ index.jsx
│ │ └─ Header.module.css
│ ├─ QuestionCard/
│ │ ├─ index.jsx
│ │ └─ QuestionCard.module.css
│ ├─ ScoreBoard/
│ │ ├─ index.jsx
│ │ └─ ScoreBoard.module.css
├─ data/
│ └─ questions.js
├─ App.jsx
├─ App.module.css
├─ main.jsx

<!-- Componentes Principais -->

--HEADER

Exibe o título do quiz, a questão atual e o total de questões, além do timer.
O timer é reiniciado a cada nova questão.

--QUESTIONCARD

Exibe a questão atual com suas 5 alternativas.
Ao clicar na alternativa, o quiz avança para a próxima questão.

-- SCOREBOARD

Exibe o resultado final do quiz com o enunciado de cada questão, a resposta escolhida, a resposta correta, a pontuação e o tempo gasto.
Destaca as respostas corretas em verde e as incorretas em vermelho.

<!-- Como Executar o Projeto -->
1. Clonar o Repositório
git clone https://github.com/LuisBessa01/quiz-interativo.git

2. Instalar as Dependências
cd quiz-interativo
npm install

3. Rodar o Projeto
npm run dev