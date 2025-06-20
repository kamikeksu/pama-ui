import { Button } from "@material-tailwind/react";
import Logo from "../Logo/Logo";
import { AboutInforItem } from "./AboutInforItem";

export function InforSection() {
  const ABOUT_INFOR_ITEMS = [
    {
      title: "Vị trí",
      description:
        "Nằm bên bãi biển Mỹ Khê - một trong những bãi biển đẹp nhất thế giới, PĀMA mang đến sự tiện lợi và trải nghiệm không gian nghỉ dưỡng tuyệt vời chỉ cách các điểm du lịch nổi tiếng vài phút di chuyển. Từ đây, bạn có thể dễ dàng di chuyển đến Hội An, Bà Nà Hill hay Cầu Rồng.",
      enTitle: "Location",
      enDescription:
        "Located on My Khe beach - one of the most beautiful beaches in the world, PĀMA offers convenience and a wonderful resort experience just a few minutes away from famous tourist attractions. From here, you can easily move to Hoi An, Ba Na Hill or Dragon Bridge.",
    },
    {
      title: "Thiết kế",
      description:
        "Mỗi phòng tại PĀMA là sự kết hợp hài hòa giữa phong cách hiện đại và văn hóa địa phương, tạo nên không gian thư giãn độc đáo và đầy cảm hứng. Với từng chi tiết nội thất được chọn lọc, chúng tôi mang đến một không gian sang trọng và gần gũi.",
      enTitle: "Design",
      enDescription:
        "Each room at PĀMA is a harmonious combination of modern style and local culture, creating a unique and inspiring relaxation space. With every selected interior detail, we bring a luxurious and intimate space.",
    },
    {
      title: "Dịch vụ",
      description:
        "Chúng tôi tự hào mang đến dịch vụ cá nhân hóa, đáp ứng nhu cầu riêng của từng khách hàng, từ quản gia 24/7 cho đến đặt tour du lịch theo sở thích cá nhân. PĀMA là nơi mọi yêu cầu của bạn được thấu hiểu và đáp ứng.",
      enTitle: "Service",
      enDescription:
        "We are proud to offer personalized service that meets each customer's unique needs, from 24/7 housekeeping to booking tours according to personal preferences. PĀMA is where all your requirements are understood and met.",
    },
  ];
  return (
    <section className="bg-[url('/images/home/10.jpg')] bg-cover bg-center w-full h-fit flex flex-col items-center justify-center py-12 px-4">
      <Logo isScrolling />
      <p className="text-lg text-white text-center max-w-4xl mt-5 bg-black/20 p-4 rounded-lg">
        PĀMA Boutique Hotel & Bistro
        <br />
        Tọa lạc tại vị trí hoàn hảo bên bãi biển Mỹ Khê tuyệt đẹp của Đà Nẵng.
        Khách sạn mang đến sự kết hợp hài hòa giữa phong cách hiện đại và sự
        thoải mái với những tiện nghi đẳng cấp. Chúng tôi cam kết mang lại những
        khoảnh khắc đáng nhớ cho bạn và gia đình khi lựa chọn PĀMA làm điểm dừng
        chân.
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl">
        {ABOUT_INFOR_ITEMS.map((item, index) => (
          <AboutInforItem
            key={index}
            data={{
              raw: { title: item.title, description: item.description },
              en: { title: item.enTitle, description: item.enDescription },
            }}
          />
        ))}
      </div>

      <a href="/about">
        <Button
          variant="outlined"
          size="md"
          className="rounded-full mt-4 max-w-36 mx-auto border-white/50 border  text-white"
        >
          Xem thêm
        </Button>
      </a>
    </section>
  );
}
