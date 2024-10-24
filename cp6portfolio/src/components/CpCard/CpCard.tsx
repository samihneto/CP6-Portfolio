import React from 'react';

interface Aluno {
  id: number;
  nome: string;
}

interface CpCardProps {
  alunoCp: Aluno | null; // Aceitar um objeto Aluno ou null
}

export default function CpCard({ alunoCp }: CpCardProps) {
  return (
    <div 
      className="bg-white w-96 p-6 rounded shadow-lg"
      onClick={(e) => e.stopPropagation()} // Para evitar fechar o modal ao clicar no conteúdo
    >
      <h1 className="text-[#181818]">
        Lista de Checkpoints do aluno: {alunoCp ? alunoCp.nome : 'Não há aluno selecionado'}
      </h1>
      <ul>
        <li className="text-[#181818]">Front-End Design Engineering</li>
        <li className="text-[#181818]">Business</li>
        <li className="text-[#181818]">Database</li>
        <li className="text-[#181818]">Python</li>
        <li className="text-[#181818]">Domain Driven Design using Java</li>
        <li className="text-[#181818]">Chatbot and AI</li>
      </ul>
    </div>
  );
}
