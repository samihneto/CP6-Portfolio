"use client";

import CpCard from '@/components/CpCard/CpCard';
import React, { useState } from 'react';

// Definindo o tipo para o aluno
interface Aluno {
  id: number;
  nome: string;
}

export default function Checkpoints() {
  const [modal, setModal] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState<Aluno | null>(null); // Estado para o aluno selecionado

  const toggleModal = () => {
    setModal(!modal);
  };

  const alunos: Aluno[] = [
    { id: 1, nome: "Felipe Levy" },
    { id: 2, nome: "Jennifer Suzuki" },
    { id: 3, nome: "Samir Neto" },
    { id: 4, nome: "Victor Gigante" },
  ];

  const handleAlunoClick = (aluno: Aluno) => {
    setSelectedAluno(aluno);
    toggleModal();
  };

  return (
    <div>
      <div className="bg-rosa p-8 flex justify-center">
        <h1 className="text-white text-6xl font-montserrat font-semibold">CHECKPOINTS</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-10 gap-y-10">
        {alunos.map((aluno) => (
          <button
            key={aluno.id} // Usar o ID como chave
            onClick={() => handleAlunoClick(aluno)} // Define o aluno selecionado
            className="px-5 py-2 text-2xl font-montserrat font-bold text-white bg-rosa rounded-md hover:scale-110 transition-transform"
          >
            {aluno.nome}
          </button>
        ))}
        {modal && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={toggleModal} // Fecha o modal ao clicar fora dele
          >
            <CpCard alunoCp={selectedAluno} />
          </div>
        )}
      </div>

    </div>
  );
}
