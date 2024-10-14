const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "vare x = 5;",
        "var x = 5;",
        "variable x = 5;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para alterar o conteúdo HTML?",
      respostas: [
        "innerHTML",
        "documentElement",
        "changeHTML",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve 'Olá Mundo' em um alerta de JavaScript?",
      respostas: [
        "alertBox('Olá Mundo');",
        "msg('Olá Mundo');",
        "alert('Olá Mundo');",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um array em JavaScript?",
      respostas: [
        "var colors = (1:'red', 2:'green', 3:'blue');",
        "var colors = ['red', 'green', 'blue'];",
        "var colors = {'red', 'green', 'blue'};",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para atribuição de valores em JavaScript?",
      respostas: [
        "*",
        "=",
        ":",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função JavaScript é usada para selecionar um elemento pelo seu ID?",
      respostas: [
        "getElementById()",
        "selectElementById()",
        "IDSelector()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i <= 5; i++)",
        "for (i <= 5; i++)",
        "loop (i = 0; i <= 5)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de comparar duas variáveis em JavaScript?",
      respostas: [
        "x == y",
        "x = y",
        "x === y",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para ordenar elementos de um array?",
      respostas: [
        "sort()",
        "order()",
        "arrange()",
      ],
      correta: 0
    },
    {
      pergunta: "Quais são as principais diferenças entre desenvolvimento front-end e back-end, e como essas duas áreas se complementam em um projeto web?",
      respostas: [
        "O front-end se concentra na interface do usuário, enquanto o back-end lida com a lógica do servidor e o banco de dados. Ambos são essenciais para criar uma experiência de usuário completa.",
        "O front-end usa principalmente HTML e CSS, enquanto o back-end utiliza linguagens como Java e Python. A comunicação entre as duas áreas é feita via APIs.",
        " O front-end é responsável apenas pela estética do site, enquanto o back-end cuida da segurança. Na verdade, ambos precisam trabalhar juntos para garantir tanto a usabilidade quanto a segurança.",
      ],
      correta: 0
    },
    {
      pergunta: "Como a escolha de frameworks e bibliotecas (como React, Angular ou Vue.js) pode impactar a performance e a manutenibilidade de uma aplicação web?",
      respostas: [
        "Frameworks mais populares geralmente têm uma comunidade maior, o que facilita a solução de problemas, mas pode não ter um impacto direto na performance da aplicação.",
        "A escolha de um framework pode afetar a velocidade de desenvolvimento e a facilidade de adicionar novas funcionalidades, além de influenciar a forma como o código é estruturado, impactando a manutenibilidade.",
        "Frameworks modernos como React são mais rápidos por serem otimizados para atualizações eficientes do DOM, mas isso pode exigir um maior conhecimento técnico da equipe, impactando a curva de aprendizado e a manutenibilidade.",
      ],
      correta: 0
    },
  ];

  
  //Seleciona Tags no HTML
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta // true or false
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    }
    
    
    
    quizItem.querySelector('dl').appendChild(dt)


  }

  // remove um item
  quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
    }


