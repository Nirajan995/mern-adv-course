import { PrismaClient } from "@prisma/client";
// /product/:id
//name
//content
const prisma = new PrismaClient();

export async function getBlogs() {
    const blogs = await prisma.blog.findMany({});

    return {
        status: 200,
        message: "Fetched Blogs",
        data: blogs
    }
}