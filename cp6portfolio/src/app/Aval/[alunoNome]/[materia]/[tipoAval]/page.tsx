import { Props } from '../../../../../interface/interface';

export default function avalTipo({params}: Props) {
  return (
    <div>
        <h1>Essa avaliação é do tipo: {params.avalTipo} </h1>
        <h1>Essa é a página de avaliação do Aluno: {params.alunoNome}</h1>
    </div>
  )
}
