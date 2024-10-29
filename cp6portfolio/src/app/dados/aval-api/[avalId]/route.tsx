import { NextResponse } from "next/server";

const aval = [
    {avalId:1 , alunoNome: "Samir", materia: "Front-End", tipoAval: "Checkpoint"},

]

export async function GET(request: any, { params }: any) {
    const avalId = params.avalId;
    if (avalId > 0) {
        const avalP = aval.find((avalP) => avalP.avalId == avalId);
        console.log(aval);
        return NextResponse.json(avalP);
    } else {
        return NextResponse.json(aval);
    }

}