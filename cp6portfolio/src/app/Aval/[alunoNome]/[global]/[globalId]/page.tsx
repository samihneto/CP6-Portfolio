import React from 'react'
import { Props } from '../../../../../interface/interface';

export default function Checkpoint({params}: Props) {
  return (
    <div>
      <h1>Global Sollution: {params.globalId}</h1>
      <h2>Aluno: {params.alunoNome}</h2>
    </div>
  )
}
