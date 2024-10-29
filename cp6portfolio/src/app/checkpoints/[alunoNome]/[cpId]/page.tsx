import { Props } from '@/interface/interface';

export default async function CpId ({params}: Props) {
  
  const { tipoAval, avalId, materia, alunoNome } = await params

  return (
    <div>
        <h1>Essa é a {params.tipoAval} de número {params.cpId} da matéria {params.materia}</h1>
        <h1>Essa é a página de avaliação do Aluno: {params.alunoNome}</h1>
    </div>
  )
}
