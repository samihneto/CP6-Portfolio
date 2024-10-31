import { Alunos } from '@/interface/interface';

export default async function GlobalId (params: Alunos) {
  try {
    const response = await fetch(`http://localhost:3000/api/dados/${params.avalId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const aval = await response.json();

    return (
      <div>
        <h1>Essa é a {aval.tipoAval} de número {params.avalId} da matéria {aval.materia}</h1>
        <h1>A nota é {aval.nota}</h1>
        <h1>Essa é a página de avaliação do Aluno: {aval.alunoNome}</h1>
      </div>
    );
  } catch (error) {
    console.error("Erro na requisição:", error);
    return <div>Erro ao carregar os dados da avaliação</div>;
  }
}
