"use client";

import { useSession } from "next-auth/react";
import BlogList from "./components/blogs/BlogList";
import { getTotalBlogs } from "./blogs/services/blogs.service";

export default async function Home() {
  const { data: session } = useSession();
  const { data } = await getTotalBlogs();

  return <>{session ? <BlogList blogList={data} /> : <>Login Form</>}</>;
}

//npx prisma init
//npx prisma generate
//npx prisma db push
//npx prisma studio
