

export async function getTotalBlogs() {
    const response = await fetch("http://localhost:3000/api/blogs", {
        method: "GET",
    });
    const blogs = await response.json();

    return blogs;
}