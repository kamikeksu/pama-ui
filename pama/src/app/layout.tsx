import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PĀMA Boutique Hotel",
  description: `Tọa lạc ở Đà Nẵng, cách Bãi biển Mỹ Khê 6 phút đi bộ, PĀMA Boutique Hotel & Bistro cung cấp chỗ nghỉ có xe đạp miễn phí, chỗ đậu xe riêng miễn phí, phòng chờ chung và sân hiên. Ngoài nhà hàng, chỗ nghỉ còn có quầy bar và phòng xông hơi khô. Chỗ nghỉ cung cấp lễ tân 24/24, dịch vụ đưa đón sân bay, dịch vụ phòng và Wi-Fi miễn phí.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="scroll-smooth">
        <Header />
        {children}
        <Footer />
        <div className="fixed z-[90] bottom-10 right-10 flex flex-col gap-2">
          <a
            href="https://m.me/104909962335259"
            target="_blank"
            className="hover:animate-shake animate-none"
          >
            <div className="bg-white rounded-full">
              <img
                src="/images/messenger.png"
                className="w-12 h-12"
                alt="zalo"
              />
            </div>
          </a>
          <a
            href="https://zalo.me/0905685986"
            target="_blank"
            className="hover:animate-shake animate-none"
          >
            <div className="bg-blue-600 rounded-full p-1">
              <img src="/images/zalo.webp" className="w-10 h-10" alt="zalo" />
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
