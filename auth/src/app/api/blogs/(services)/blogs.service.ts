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