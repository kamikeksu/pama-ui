"use client";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumbs } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  category: string;
  description: string;
  image?: string;
  date: string;
  author: string;
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [fetchOK, setFetchOK] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogData = await fetch(
          "https://pama-api.finance94.com/web/blog/list?_page_start=1&_page_num=20&_sort_key=timestamp&_sort_dir=desc"
        ).then((data) => data.json());
        setPosts(blogData?.data?.records || []);
      } catch (error) {
        setFetchOK(false);
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <section className="bg-[url('/images/9.jpg')] bg-cover w-full h-[50vh] flex flex-col items-center justify-center py-12 px-4"></section>
      <Breadcrumbs className="mt-3 max-w-full">
        <a href="/" className="opacity-60">
          Trang chủ
        </a>
        <a href="#" className="opacity-60">
          Tin tức
        </a>
      </Breadcrumbs>
      <section className="px-4 max-w-7xl mx-auto my-8">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mt-10">
          <h2 className="text-green-900 text-2xl py-4 border-y-2 border-orange-400 text-center px-4 mb-6 font-bold">
            Tin tức cập nhật
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
          {posts.length ? (
            posts.map((data) => {
              return <BlogCard key={data.slug} data={data} />;
            })
          ) : (
            <p className="text-center col-span-1 md:col-span-2 xl:col-span-3 text-xl text-gray-600 font-bold my-12">
              {fetchOK
                ? "Loading..."
                : "Có lỗi xảy ra trong quá trình tải bài viết! Vui lòng tải lại trang..."}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
