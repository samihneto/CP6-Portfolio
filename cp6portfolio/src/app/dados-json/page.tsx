export default async function DadosJson() {
    try {
        const response = await fetch("http://localhost:3000/base/base-api");

        if (!response.ok) {
            throw new Error(`Erro na resposta da API: ${response.status}`);
        }

        const data = await response.json();  // Agora, parseamos diretamente como JSON
        const aval = data.aval[0];  // Acessa o primeiro item de `aval` como exemplo

        return (
            <div className="flex justify-center p-8">
                <div className="flex flex-col justify-center items-center gap-2 bg-gray-200 rounded-md shadow-xl w-96">
                    <h1>Essa é a página de avaliação do Aluno: {aval.alunoNome}</h1>
                    <h1>Essa é a {aval.tipoAval} da matéria {aval.materia}</h1>
                    <h1>A nota é {aval.nota}</h1>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Erro ao obter os dados:", error);
        return <div>Erro ao carregar os dados da avaliação</div>;
    }
}