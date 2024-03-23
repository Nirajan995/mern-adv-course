import { PrismaClient } from "@prisma/client";
// /product/:id
//name
//content
const prisma = new PrismaClient();

export async function getBlogs(pageNumber: number) {
    const pageValue = 12;
    const skipValue = pageNumber * 12;
    try {
        const blogs = await prisma.blog.findMany({
            where: {
                id: "65ed6823342b6608fdb2ab23"
            },
            select: {
                name: true,
                Comment: {
                    //    where:{
                    //     body:"abc"
                    //    },
                    select: {
                        Like: {
                            select: {
                                id: true
                            }
                        },
                        body: true,
                        user: {
                            select: {
                                name: true
                            }
                        },
                        CommentReplies: {
                            select: {
                                body: true,
                                user: true
                            }
                        }
                    },

                }
            },
            // orderBy: "desc",
            skip: skipValue,
            take: pageValue
        });

        return {
            status: 200,
            message: "Fetched Blogs",
            data: blogs
        }
    } catch (error) {
        console.log(error)
    }
}

export async function likeBlogs(blogId: string, userId: string) {
    try {
        // check if bog exists
        const existBlog = await prisma.blog.findFirst({
            where: {
                id: blogId
            }
        })

        console.log({ blogId, userId })
        if (!existBlog) { }

        // check if bog exists
        const user = await prisma.user.findMany({
            where: {
                id: userId
            }
        })
        console.log(user)
        if (!user) { }


        const existLike = await prisma.like.findFirst({
            where: {
                userId: userId,
                blogId: blogId

            }
        })
        let like;
        if (existLike) {
            like = await prisma.like.delete({
                where: {
                    id: existLike.id                    // userId: userId,
                },
            })
        } else {
            like = await prisma.like.create({
                data: {
                    userId: userId,
                    blogId: blogId
                }
            });
        }




        return { message: existLike ? "Deleted" : "Liked" };
    } catch (error) {
        console.log(error)
    }
}


export async function commentBlogs(blogId: string, userId: string, commentBody: string) {
    try {
        // check if bog exists
        const existBlog = await prisma.blog.findFirst({
            where: {
                id: blogId
            }
        })

        if (!existBlog) { }

        // check if bog exists
        const user = await prisma.user.findMany({
            where: {
                id: userId
            }
        })
        console.log(user)
        if (!user) { }




        const comment = await prisma.comment.create({
            data: {
                userId: userId,
                blogId: blogId,
                body: commentBody
            }
        });

        return { message: "added comment" };
    } catch (error) {
        console.log(error)
    }
}

export async function commentReplyBlogs(commentid: string, userId: string, commentBody: string) {
    try {
        // check if bog exists
        const existComment = await prisma.comment.findFirst({
            where: {
                id: commentid
            }
        })

        if (!existComment) { }

        // check if bog exists
        const user = await prisma.user.findMany({
            where: {
                id: userId
            }
        })
        console.log(user)
        if (!user) { }




        const comment = await prisma.commentReplies.create({
            data: {
                userId: userId,
                commentId: commentid,
                body: commentBody
            }
        });

        return { message: "added comment reply" };
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