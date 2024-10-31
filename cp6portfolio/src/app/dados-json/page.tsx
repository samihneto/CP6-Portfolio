import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

export default async function DadosJson() {
    try {
        const response = await fetch("http://localhost:3000/base/base-api");

        if (!response.ok) {
            throw new Error(`Erro na resposta da API: ${response.status}`);
        }

        const data = await response.json(); 
        const avalList = data.aval; 

        return (
            <div className="flex justify-center p-8">
                <ul className="flex flex-col gap-4">
                    {avalList.map((aval: { alunoNome: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; tipoAval: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; materia: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; nota: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
                        <li key={index} className="flex flex-col justify-center items-center gap-2 bg-gray-200 rounded-md shadow-xl w-96 p-6">
                            <h1 className="text-rosa font-montserrat text-2xl font-black">Aluno: {aval.alunoNome}</h1>
                            <h1 className="text-preto font-montserrat text-xl font-black">{aval.tipoAval}</h1>
                            <h1 className="text-rosa font-montserrat text-xl font-semibold">{aval.materia}</h1>
                            <h1 className="bg-rosa text-white p-2 rounded-md text-4xl font-black">{aval.nota}</h1>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        console.error("Erro ao obter os dados:", error);
        return <div>Erro ao carregar os dados da avaliação</div>;
    }
}