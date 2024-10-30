"use client";

import GlobalCard from '@/components/GlobalCard/GlobalCard';
import { Alunos } from '@/interface/interface';
import React, { useEffect, useState } from 'react';


export default function Sprints() {
  const [modal, setModal] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState<Alunos | null>(null); // Estado para o aluno selecionado

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAlunoClick = (aluno: Alunos) => {
    setSelectedAluno(aluno);
    toggleModal();
  };

  const [dados, setDados] = useState([]);

  async function getDados() {
    const res = await fetch('http://localhost:3000/api/dados')
    const data = await res.json()
    setDados(data)
  }
  useEffect(()=>{
    getDados()
  },[])

  return (
    <div>
      <div className="bg-rosa p-8 flex justify-center">
        <h1 className="text-white text-6xl font-montserrat font-semibold">Global Solutions</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-10 gap-y-10">
        {dados && dados.map((aluno: any) => (
          <button
            key={aluno.avalId} // Usar o ID como chave
            onClick={() => handleAlunoClick(aluno)} // Define o aluno selecionado
            className="px-5 py-2 text-2xl font-montserrat font-bold text-white bg-rosa rounded-md hover:scale-110 transition-transform"
          >
            {aluno.alunoNome}
          </button>
        ))}
        {modal && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={toggleModal} // Fecha o modal ao clicar fora dele
          >
            <GlobalCard id={selectedAluno?.avalId} />
          </div>
        )}
      </div>

    </div>
  );
}
