import { NextRequest, NextResponse } from "next/server";

// /product/:id

export async function GET(request: NextRequest) {
    // data base operations
    // userAgent.findMany
    const data = {
        status: 200,
        message: "Fetched prods",
        data: [{
            id: 1,
            nbame: "I phone"
        }]
    }

    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
    // data base operations

    const requ = await request.json()
    // userAgent.create()
    const data = {
        status: 201,
        message: "Created",
        data: requ
    }

    return NextResponse.json(data);
}