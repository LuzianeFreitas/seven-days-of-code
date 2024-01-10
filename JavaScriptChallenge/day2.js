const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = []

function makeQuestions(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
    })
  })
}

async function main() {
  const questions = [
    'Qual seu nome?',
    'Quantos anos você tem?',
    'Qual linguagem de programação você está estudando?'
  ]

  for(let i=0; i < questions.length; i++) {
    const answer = await makeQuestions(questions[i])
    answers.push(answer)
  }

  
  const message = `Olá ${answers[0]}, você tem ${answers[1]} anos e já esta aprendendo ${answers[2]}`
  console.log(message);
  
  const questionLanguage = `Você gosta de estudar ${answers[2]}? Responda com o número 1 para SIM ou 2 para NÃO.`
  const choice = await makeQuestions(questionLanguage)
  
  const option1 = 'Muito bom! Continue estudando e você terá muito sucesso.'
  const option2 = 'Ahh que pena... Já tentou aprender outras linguagens?'
  
  console.log(choice == 1 ? option1 : option2) 
  rl.close()
}

main()
