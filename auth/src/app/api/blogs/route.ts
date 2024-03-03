import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getBlogs } from "./(services)/blogs.service";
// /product/:id

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    // data base operations
    // userAgent.findMany
    const data = await getBlogs();

    return NextResponse.json(data);
}

// fetch('/api/v1/blogs')

export async function POST(request: NextRequest) {
    // data base operations

    const data = await request.json();
    // userAgent.create()

    const identifier = Math.random().toString();

    const blog = await prisma.blog.create({
        data: {
            name: data.name,
            identifier,
            // content: data.content
        }
    })

    const addedBlog = {
        status: 201,
        message: "created Blogs",
        data: blog
    }


    return NextResponse.json(addedBlog);
}