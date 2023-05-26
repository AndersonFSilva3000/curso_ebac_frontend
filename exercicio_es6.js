const arrayAlunos = [
  {nome: "Calleri", nota: 9},
  {nome: "R.Carlos", nota: 6},
  {nome: "Lúcio", nota: 3},
  {nome: "Zidane", nota: 5},
  {nome: "Messi", nota: 10},
  {nome: "Cristiano", nota: 7},
  {nome: "Iniesta", nota: 6}
]

const alunosComparacao = arrayAlunos.filter(i => i.nota >= 6);

console.log(alunosComparacao);