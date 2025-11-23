"use client";

import { Breadcrumbs } from "@material-tailwind/react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  keywords?: string;
  slug: string;
  kind?: string;
  timestamp: number;
  dateString: string;
  image?: string;
  author?: string;
}

export default function BlogDetail() {
  const params = useParams();
  const { slug } = params;

  const [blog, setBlog] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.pamaboutique.com/web/blog/get?slug=${slug}`
          );
          if (!response.ok) throw new Error("Failed to fetch blog data");
          const result = await response.json();
          const { data } = result;
          const date = new Date(data.timestamp * 1000);
          const dateString = `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`;
          data.dateString = dateString;
          setBlog(data);
        } catch (err) {
          console.error(err);

          setError("Error loading blog data");
        }
      };
      fetchData();
    }
  }, [slug]);

  return (
    <>
      <section className="bg-[url('/images/home/about-section-background.webp')] bg-cover w-full h-[50vh] flex flex-col items-center justify-center py-12 px-4"></section>
      <Breadcrumbs className="mt-3">
        <a href="/" className="opacity-60">
          Trang chủ
        </a>
        <a href="/blog" className="opacity-60">
          Tin tức
        </a>
        <a href="/#" className="opacity-60 truncate">
          {blog?.title.length && blog?.title.length > 25
            ? blog?.title.slice(0, 25) + "..."
            : blog?.title}
        </a>
      </Breadcrumbs>
      {blog ? (
        <article className="max-w-4xl mx-auto my-10 px-4">
          <div className="flex items-center justify-between mb-4">
            <h6 className="block antialiased tracking-normal text-base font-semibold leading-relaxed text-gray-700 uppercase">
              {blog?.kind?.toUpperCase() || "Bài viết từ PĀMA"}
            </h6>
            <p className="block antialiased text-base leading-relaxed text-inherit font-normal">
              {blog?.dateString}
            </p>
          </div>
          <h1 className="text-5xl mb-5 leading-tight">{blog?.title}</h1>
          <div
            className="*:mb-3 font-raleway"
            dangerouslySetInnerHTML={{ __html: blog?.description || "" }}
          />
          <footer>
            <p className="text-right mt-10">{blog?.author || ""}</p>
          </footer>
        </article>
      ) : (
        <p className="text-center col-span-1 md:col-span-2 xl:col-span-3 text-xl text-gray-600 font-bold my-12">
          {error
            ? "Có lỗi xảy ra trong quá trình tải bài viết! Vui lòng tải lại trang..."
            : "Đảng tải nội dung bài viết..."}
        </p>
      )}
    </>
  );
}
