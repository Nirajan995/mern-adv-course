"use client";

import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Select,
  SelectProps,
  message,
} from "antd";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const CustomEditor = dynamic(
  () => {
    return import("@/app/components/blogs/create/CustomEditor");
  },
  { ssr: false }
);

type FieldType = {
  title?: string;
  password?: string;
  remember?: string;
};

const options: SelectProps["options"] = [
  {
    label: "Football",
    value: "Football",
  },
  {
    label: "Programming",
    value: "Programming",
  },
  {
    label: "IT",
    value: "IT",
  },
];

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddBlogForm: React.FC = () => {
  const [blogPost, setBlogPost] = useState({
    title: "",
    content: "",
    publishStatus: "",
    tags: ["Programming", "IT"],
    contentFormat: "html",
  });

  const [messageApi, contextHolder] = message.useMessage();

  const router = useRouter();

  function handleCustomEditor(content: string) {
    setBlogPost((prev) => {
      return { ...prev, content };
    });
  }

  const handleChange = (value: string[]) => {
    setBlogPost((prev) => {
      return { ...prev, tags: value };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogPost),
      });

      const blogs = await response.json();
      console.log({ response });

      if (response.status == 200) {
        router.push("/blogs");
      }
    } catch (error: any) {
      console.log(error);
      messageApi.error(error);
    }
  };
  return (
    <div className="max-w-xl mx-auto">
      <div className="text-3xl font-bold mb-4">Add a blog bost</div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input
            onChange={(e) => {
              // let blog: any = {
              //   title: "",
              //   content: "",
              //   publicStatus: "publkiv",
              //   tags: [],
              //   contentFormat: "html",
              // };
              // blog = {
              //   ...blog,
              //   title: e.target.value,
              // };

              // console.log(blog);

              setBlogPost((prev) => {
                return { ...prev, title: e.target.value };
              });
            }}
          />
        </Form.Item>

        <CustomEditor initialData="" handleCustomEditor={handleCustomEditor} />

        <Form.Item className="mt-3">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={["Programming", "IT"]}
            onChange={handleChange}
            options={options}
          />
        </Form.Item>
        <Form.Item className="mt-3">
          <Select
            showSearch
            placeholder="Select a status"
            optionFilterProp="children"
            onChange={(val) => {
              setBlogPost((prev) => {
                return { ...prev, publishStatus: val };
              });
            }}
            // onSearch={onSearch}
            // filterOption={filterOption}
            options={[
              {
                value: "public",
                label: "public",
              },
              {
                value: "private",
                label: "private",
              },
              {
                value: "draft",
                label: "draft",
              },
            ]}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={handleSubmit} className="bg-blue-500">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddBlogForm;
