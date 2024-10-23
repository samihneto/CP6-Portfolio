import { Props } from '../../../interface/interface';

export default function AlunoNome({params}: Props) {
  return (
    <div>
        <h1>Essa é a página de avaliação do Aluno: {params.alunoNome}</h1>
    </div>
  )
}
