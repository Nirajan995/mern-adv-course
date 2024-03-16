import { PrismaClient } from "@prisma/client";
// /product/:id
//name
//content
const prisma = new PrismaClient();

export async function getBlogs() {
    try {
        const blogs = await prisma.blog.findMany({});
        console.log(blogs)
        return {
            status: 200,
            message: "Fetched Blogs",
            data: blogs
        }
    } catch (error) {
        console.log(error)
    }
}
export async function syncBlogs() {
    try {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nirajankunwor");

        const blogs = await response.json();

        let promise = [];

        const totalBlogs = blogs.items;

        for (let blog of totalBlogs) {
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
    } catch (error) {
        console.log(error)
    }
}