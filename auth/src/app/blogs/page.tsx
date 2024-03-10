import BlogList from "@/app/components/blogs/BlogList";
import { getTotalBlogs } from "./services/blogs.service";

export default async function Blogs() {
  const { data } = await getTotalBlogs();

  return (
    <>
      <BlogList blogList={data} />
    </>
  );
}
