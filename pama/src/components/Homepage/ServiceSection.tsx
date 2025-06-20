import Image from "next/image";
import React from "react";
import { SeeMoreButton } from "./SeeMoreButton";

type IServiceSectionData = {
  image: string;
  title: string;
  subTitle: string;
  link?: string;
};
interface IServiceSection {
  data: IServiceSectionData;
  children?: React.ReactNode;
}

export function ServiceSection({ data, children }: IServiceSection) {
  return (
    <div className="grid mx-auto lg:grid-cols-2 bg-gradient-b-to-rt p-4">
      <Image
        className="object-cover w-full h-full rounded-xl aspect-square"
        width={757}
        height={988}
        alt="service"
        src={data.image}
      />
      <div className="items-center flex flex-col justify-center w-full py-10 md:py-14 lg:px-8">
        <h4 className="block antialiased tracking-normal text-base leading-snug text-white text-center font-bold uppercase mb-5">
          {data.title}
        </h4>
        <div className="items-center w-full lg:px-8">
          {data.subTitle && (
            <h5 className="block antialiased tracking-normal text-2xl text-white text-center font-bold uppercase mb-4 lg:text-5xl leading-tight">
              {data.subTitle}
            </h5>
          )}
          {children}
        </div>
        <div className="text-center">
          <SeeMoreButton goto={data.link} />
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
