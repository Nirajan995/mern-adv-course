import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { likeBlogs } from "../(services)/blogs.service";


export async function POST(request: NextRequest) {
    // data base operations
    try {

        const data = await request.json();
        // userAgent.create()
        const blog = await likeBlogs(data.blogId, data.userId)


        const likedBlog = {
            status: 201,
            message: blog?.message,
        }

        return NextResponse.json(likedBlog);
    } catch (error: any) {
        console.log(error)
    }


}