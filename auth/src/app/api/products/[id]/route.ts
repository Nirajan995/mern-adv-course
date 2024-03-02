import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, { params }: any) {
    // data base operations
    // userAgent.updateOne
    const data = {
        status: 201,
        message: "Updated prods",
        data: params.id
    }

    return NextResponse.json(data);
}
