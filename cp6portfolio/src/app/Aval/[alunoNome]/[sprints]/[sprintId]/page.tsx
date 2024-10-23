import React from 'react'
import { Props } from '../../../../../interface/interface';

export default function Checkpoint({params}: Props) {
  return (
    <div>
      <h1>Challenge Sprint: {params.sprintId}</h1>
      <h2>Aluno: {params.alunoNome}</h2>
    </div>
  )
}
