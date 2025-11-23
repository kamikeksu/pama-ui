"use client";
import { BannerSection } from "@/components/Homepage/BannerSection";
import { BlankServiceSection } from "@/components/Homepage/BlankServiceSection";
import BranchSection from "@/components/Homepage/BranchSection";
import { InforSection } from "@/components/Homepage/InfoSection";
import { ReviewSection } from "@/components/Homepage/ReviewSection";
import { ServiceSection } from "@/components/Homepage/ServiceSection";

export default function Home() {
  return (
    <>
      <BannerSection />

      <InforSection />

      <BlankServiceSection />
      <div className="inset-0 h-screen w-full md:bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/images/9.jpg')]" />
      <ServiceSection
        data={{
          image: "/images/home/2.jpg",
          title: "PĀMA Boutique Hotel & Bistro",
          link: "/about",
          subTitle: "Hành trình hình thành và phát triển",
        }}
      >
        <p className="block antialiased tracking-normal text-base leading-snug text-white text-center font-normal mb-5">
          PĀMA Boutique Hotel & Bistro bắt đầu với tầm nhìn đơn giản nhưng sâu
          sắc: tạo ra một nơi mà khách hàng không chỉ nghỉ ngơi mà còn trải
          nghiệm.
        </p>
        <p className="block antialiased tracking-normal text-base leading-snug text-white text-center font-normal mb-5">
          Trong suốt hành trình phát triển, chúng tôi đã không ngừng cải tiến
          dịch vụ và nâng cao chất lượng, từ những phòng nghỉ đầu tiên đến không
          gian bistro sang trọng hiện nay. Từng bước, PĀMA đã trở thành một
          trong những điểm đến yêu thích tại Đà Nẵng.
        </p>
      </ServiceSection>

      <ReviewSection />

      <ServiceSection
        data={{
          image: "/images/home/12.jpg",
          link: "/service",
          title: "Khám phá thêm tại PĀMA",
          subTitle: "Trải Nghiệm Nghỉ Dưỡng Hoàn Hảo",
        }}
      >
        <p className="block antialiased tracking-normal text-base leading-snug text-white text-center font-normal mb-5">
          Phòng ngủ với tầm nhìn hướng biển tuyệt đẹp, mang lại cảm giác thư
          thái.
        </p>

        <p className="block antialiased tracking-normal text-base leading-snug text-white text-center font-normal mb-5">
          Trải nghiệm spa và massage giảm giá 50% dành cho khách lưu trú.
        </p>

        <p className="block antialiased tracking-normal text-base leading-snug text-white text-center font-normal mb-5">
          Không gian bistro sang trọng với các món ăn châu Âu tinh tế và
          cocktail độc đáo với nhiều ưu đãi hấp dẫn.
        </p>
      </ServiceSection>
      <div className="inset-0 h-screen w-full md:bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/images/gallery/13.png')]" />
      <BranchSection />
    </>
  );
}
