// Lista de alunos com suas médias
const alunos = {
    joão: 10,
    juliana: 8,
    ana: 7.5,
    caio: 9
  };
  
  // Função curta com nome + média
  const buscarMedia = nomeAluno =>
    alunos[nomeAluno.toLowerCase()]
      ? `A média de ${nomeAluno} é ${alunos[nomeAluno.toLowerCase()]}`
      : `Aluno ${nomeAluno} não encontrado`;
  
  // Exemplos
  console.log(buscarMedia("joão"));     // A média de joão é 10
  console.log(buscarMedia("juliana"));  // A média de juliana é 8
  console.log(buscarMedia("maria"));    // Aluno maria não encontrado
  