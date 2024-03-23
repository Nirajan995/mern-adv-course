import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getBlogs } from "./(services)/blogs.service";
// /product/:id

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    // data base operations
    // userAgent.findMany
    const data = await getBlogs(1);

    return NextResponse.json(data);
}

// fetch('/api/v1/blogs')

export async function POST(request: NextRequest) {
    // data base operations
    try {

        const data = await request.json();
        // userAgent.create()

        const identifier = Math.random().toString();

        const blog = await prisma.blog.create({
            data: {
                name: data.title,
                identifier,
                content: data.content
            }
        });

        const baseURLMED = process.env.MEDIUM_BASEURL;
        const medAccessToken = process.env.NEXTAUTH_ACCESSTOKEN;

        const response = await fetch(baseURLMED + "/me", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${medAccessToken}`
            }
        })

        const userData = await response.json();


        console.log({ userData })
        const resp = await fetch(baseURLMED + `/users/${userData.data.id}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${medAccessToken}`
            },
            body: JSON.stringify(data)
        })

        const createdBlog = await resp.json();

        await prisma.blog.update({
            where: {
                identifier: blog.identifier
            },
            data: {
                identifier: createdBlog.data.id
            }
        });


        const addedBlog = {
            status: 201,
            message: "created Blogs",
            data: blog,
            mediumData: createdBlog
        }

        return NextResponse.json(addedBlog);
    } catch (error: any) {
        console.log(error)
    }


}