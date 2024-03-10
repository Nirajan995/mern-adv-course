import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function GET(request: NextRequest) {
    // data base operations
    try {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nirajankunwor");

        const blogs = await response.json();

        let promise = [];

        console.log(blogs.items.length)

        const totalBlogs = blogs.items;

        for (let blog of totalBlogs) {
            console.log({ 'here': blog.guid })
            const identifier = blog.guid.split('/p/')[1];
            const d = prisma.blog.upsert({
                where: {
                    identifier
                },
                update: {
                    name: blog.title,
                    content: blog.content
                },
                create: {
                    name: blog.title,
                    identifier,
                    content: blog.content
                }
            })
            promise.push(d)
        }


        await Promise.allSettled(promise);

        return NextResponse.json({ status: "success" });

    } catch (error) {
        console.log(error)
    }


}