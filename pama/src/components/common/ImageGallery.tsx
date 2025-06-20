import Image from "next/image";
import { useState } from "react";
import ImageWithPreviewModal from "./ImageWithPreviewModal";
export function ImageGallery() {
  const data = [
    {
      imgelink: "/images/gallery/1.jpg",
    },
    {
      imgelink: "/images/gallery/2.jpg",
    },
    {
      imgelink: "/images/gallery/3.jpg",
    },
    {
      imgelink: "/images/gallery/4.jpg",
    },
    {
      imgelink: "/images/gallery/5.jpg",
    },
    {
      imgelink: "/images/gallery/6.jpg",
    },
    {
      imgelink: "/images/gallery/7.jpg",
    },
    {
      imgelink: "/images/gallery/8.jpg",
    },
    {
      imgelink: "/images/gallery/9.jpg",
    },
    {
      imgelink: "/images/gallery/10.jpg",
    },
    {
      imgelink: "/images/gallery/11.jpg",
    },
    {
      imgelink: "/images/gallery/12.jpg",
    },
  ];

  const [active, setActive] = useState(data[0]?.imgelink);

  return (
    <div className="grid gap-4">
      <div>
        <ImageWithPreviewModal
          mainImageClassName="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          thumbnailURL={active}
        />
      </div>
      <div className="flex gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive(imgelink)}
              src={imgelink}
              width={500}
              height={500}
              className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center grow ${
                imgelink === active ? "border-highlight border-4" : "opacity-50"
              } hover:opacity-100 transition-all duration-200`}
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
