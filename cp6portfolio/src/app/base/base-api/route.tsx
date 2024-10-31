import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
    const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8');
    return NextResponse.json(JSON.parse(file));
}