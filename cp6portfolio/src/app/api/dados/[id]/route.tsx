import { NextResponse } from "next/server";
import { aval } from "../../dados";

export async function GET(request: any, { params }: any) {
    const id = params.id;
    const user = aval.find((user) => user.avalId === Number(id))
    if(!user) {
        return NextResponse.json([]);
    }
    return NextResponse.json(user);

}