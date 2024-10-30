import { NextResponse } from "next/server";
import { aval } from "../dados";

export async function GET(request: any, { params }: any) {
    return NextResponse.json(aval);

}