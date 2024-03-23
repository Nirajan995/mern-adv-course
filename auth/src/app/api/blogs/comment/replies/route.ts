import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { commentReplyBlogs } from "../../(services)/blogs.service";


export async function POST(request: NextRequest) {
    // data base operations
    try {

        const data = await request.json();
        // userAgent.create()
        const blog = await commentReplyBlogs(data.commentId, data.userId, data.commentBody)


        const commentedBlog = {
            status: 201,
            message: blog?.message,
        }

        return NextResponse.json(commentedBlog);
    } catch (error: any) {
        console.log(error)
    }


}