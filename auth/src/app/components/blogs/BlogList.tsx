"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { message } from "antd";
import ScheduleForm from "./ScheduleForm";

const BlogList = ({ blogList }: any) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function scheduleSync(e: any) {
    setShowModal(true);
    // const resp = await fetch("/api/blogs/schedule");
    // const data = await resp.json();
    // messageApi.success(data.status);
  }

  const syncBlogs = async (e) => {
    try {
      const resp = await fetch("/api/blogs/sync");
      const data = await resp.json();

      messageApi.success(data.status);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto">
      <button
        className="bg-blue-500 text-white px-6 py-3 rounder-md shadow-md mb-4 mr-2 float-right"
        onClick={(e) => router.push("/blogs/create")}
      >
        Add Blogs
      </button>
      <button
        className="bg-gray-500 text-white px-6 py-3 rounder-md shadow-md mb-4 mr-2 float-right"
        onClick={(e) => syncBlogs(e)}
      >
        Sync Blogs
      </button>

      <button
        className="bg-gray-500 text-white px-6 py-3 rounder-md shadow-md mb-4 mr-2 float-right"
        onClick={(e) => scheduleSync(e)}
      >
        Schedule Sync
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 clear-both">
        {blogList.map((blog, index) => {
          return (
            <div className="rounder-lg shadow-lg overflow-hidden">
              <Link href={"#"} target="_blank">
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
                <h2 className="text-xl">{blog.name}</h2>
                <p className="text-gray-400">
                  {blog.author ?? "Nirajan kunwor"}
                </p>
                <p className="text-gray-400">{blog.pubDate ?? "11/22"}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <ScheduleForm   isModalOpen={showModal}
  handleOk={handleOk},
  handleCancel={handleCancel},
  handleSubmit,/> */}
    </div>
  );
};

export default BlogList;
