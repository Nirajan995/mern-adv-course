import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { syncBlogs } from "../(services)/blogs.service";

const prisma = new PrismaClient();


export async function GET(request: NextRequest) {
    // data base operations
    try {
        await syncBlogs()

        return NextResponse.json({ status: "success" });

    } catch (error) {
        console.log(error)
    }


}