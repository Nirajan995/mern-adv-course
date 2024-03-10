import React from "react";
import Link from "next/link";

const blogs = [
  {
    title: "SOLID principles made easy — Javascript &amp; Typescript",
    pubDate: "2022-11-25 11:32:10",
    link: "https://nirajankunwor.medium.com/solid-principles-a28a597888fe?source=rss-99b2abb48585------2",
    guid: "https://medium.com/p/a28a597888fe",
    author: "Nirajan Kunwor",
    thumbnail: "",
  },
  {
    title: "SOLID principles made easy — Javascript &amp; Typescript",
    pubDate: "2022-11-25 11:32:10",
    link: "https://nirajankunwor.medium.com/solid-principles-a28a597888fe?source=rss-99b2abb48585------2",
    guid: "https://medium.com/p/a28a597888fe",
    author: "Nirajan Kunwor",
    thumbnail: "",
  },
];

const BlogList = () => {
  return (
    <div className="container mx-auto">
      <button className="bg-blue-500 text-white px-6 py-3 rounder-md shadow-md mb-4 mr-2 float-right">
        Add Blogs
      </button>
      <button className="bg-gray-500 text-white px-6 py-3 rounder-md shadow-md mb-4 mr-2 float-right">
        Sync Blogs
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 clear-both">
        {blogs.map((blog, index) => {
          return (
            <div className="rounder-lg shadow-lg overflow-hidden">
              <Link href={blog.link} target="_blank">
                <img
                  src={
                    blog.thumbnail
                      ? blog.thumbnail
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpx__-agwaPHZRlQ5mnfdZ16VXY4nrzFW23hvxeHjQw&s"
                  }
                  className="w-full h-48 object-cover"
                  alt=""
                />
              </Link>
              <div className="p-4">
                <h2 className="text-xl">{blog.title}</h2>
                <p className="text-gray-400">{blog.author}</p>
                <p className="text-gray-400">{blog.pubDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
