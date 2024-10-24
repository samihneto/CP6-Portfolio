import React from 'react';

interface Aluno {
  id: number;
  nome: string;
}

interface ChallengeCardProps {
  alunoCp: Aluno | null; // Aceitar um objeto Aluno ou null
}

export default function ChallengeCard({ alunoCp }: ChallengeCardProps) {
  return (
    <div 
      className="bg-white flex flex-col gap-y-6 w-96 p-6 rounded shadow-lg"
      onClick={(e) => e.stopPropagation()} // Para evitar fechar o modal ao clicar no conteúdo
    >
      <h1 className="text-[#181818] font-montserrat font-black text-3xl">
        Lista de Challenge do aluno: 
      </h1>
      <div className="flex bg-rosa w-auto p-2 rounded-lg justify-self-center justify-center">
        <h2 className="text-white font-montserrat font-black text-2xl">{alunoCp ? alunoCp.nome : 'Não há aluno selecionado'}</h2>
      </div>
      
      <ul>
        <li className="text-preto font-montserrat font-semibold text-xl border-b-2 border-preto mb-2">Front-End Design Engineering</li>
        <li className="text-preto font-montserrat font-semibold text-xl border-b-2 border-preto mb-2">Business</li>
        <li className="text-preto font-montserrat font-semibold text-xl border-b-2 border-preto mb-2">Database</li>
        <li className="text-preto font-montserrat font-semibold text-xl border-b-2 border-preto mb-2">Python</li>
        <li className="text-preto font-montserrat font-semibold text-xl border-b-2 border-preto mb-2">Domain Driven Design using Java</li>
        <li className="text-preto font-montserrat font-semibold text-xl border-b-2 border-preto mb-2">Chatbot and AI</li>
      </ul>
    </div>
  );
}
