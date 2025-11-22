"use client";

import BookingModal, { IBookingData } from "@/components/common/BookingModal";
import { BookingCard } from "@/components/Service/BookingCard";
import { HorizontalCard } from "@/components/Service/HorizontalCard";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [bookingData, setBookingData] = useState<IBookingData | null>(null);
  const [openBookingModal, setOpenBookingModal] = useState(false);

  const handleOpenBookingModal = () => setOpenBookingModal((cur) => !cur);

  const onSubmitBooking = async (formData: FormData) => {
    try {
      const startTime = formData.get("start_time");
      const endTime = formData.get("end_time");
      const today = new Date().getTime() / 1000;

      if (typeof startTime !== "string" || typeof endTime !== "string") {
        alert("Dữ liệu thời gian không hợp lệ.");
        return;
      }
      const startTimestamp = new Date(startTime).getTime() / 1000;
      const endTimestamp = new Date(endTime).getTime() / 1000;
      if (startTimestamp > endTimestamp) {
        alert("Ngày bắt đầu phải trước ngày kết thúc");
        return;
      }

      if (startTimestamp < today || endTimestamp < today) {
        alert("Quý khách chỉ có thể đặt phòng cho tương lai");
        return;
      }

      const data = {
        name: formData.get("name") || "",
        phonenumber: formData.get("phonenumber") || "",
        start_time: startTimestamp,
        end_time: endTimestamp,
      };

      const newFormData = new FormData();
      newFormData.append("name", data.name);
      newFormData.append("phonenumber", data.phonenumber);
      newFormData.append("start_time", data.start_time.toString());
      newFormData.append("end_time", data.end_time.toString());
      const response = await fetch(
        "https://pama-api.finance94.com/web/booking/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.status === "ok") {
        alert(
          `Thành công! PĀMA sẽ sớm liên hệ theo số điện thoại ${data.phonenumber} để xác nhận đặt phòng! Vui lòng chú ý điện thoại`
        );
        handleOpenBookingModal();
        setBookingData(null);
      }
    } catch (error) {
      alert(
        "Có lỗi xảy ra trong quá trình xử lý dữ liệu! Vui lòng thử lại sau ít phút."
      );
      console.error(error);
    }
  };
  const FACILITY_TYPE = {
    bed: 1,
    view: 2,
    tub: 3,
    design: 4,
    butler: 5,
    food: 6,
    relax: 7,
    bistro: 8,
  };

  const rooms = [
    {
      name: "Phòng Panoramic Ocean View King Suite",
      type: "1",
      description:
        "Căn phòng tầng cao, hướng trực diện ra biển, mang đến tầm nhìn tuyệt mỹ và không gian tràn đầy ánh sáng tự nhiên cùng tiện nghi cao cấp.",
      capacity: 2,
      facilities: [
        {
          label: "Bồn tắm cao cấp",
          type: FACILITY_TYPE.tub,
        },
        {
          label: "Hướng biển",
          type: FACILITY_TYPE.view,
        },
        {
          label: "Giường King",
          type: FACILITY_TYPE.bed,
        },
        {
          label: "Thiết kế hiện đại và trang bị độc nhất",
          type: FACILITY_TYPE.design,
        },
        {
          label: "Quản gia 24/7",
          type: FACILITY_TYPE.butler,
        },
        {
          label: "Buffet sáng - từ 6h30 tới 10h",
          type: FACILITY_TYPE.food,
        },
        {
          label: "Sauna - từ 8h tới 22h",
          type: FACILITY_TYPE.relax,
        },
        {
          label: "Bistro & Restaurant – GIẢM 10% khi lưu trú tại khách sạn",
          type: FACILITY_TYPE.bistro,
        },
      ],
      price: "x,xxx,xxx VND",
    },
    {
      name: "Phòng Sea View King Bed",
      type: "2",
      description:
        "Lựa chọn tuyệt vời cho các cặp đôi muốn trải nghiệm ngắm bình minh với góc nhìn hướng biển lãng mạn.",
      capacity: 2,
      facilities: [
        {
          label: "Bồn tắm cao cấp",
          type: FACILITY_TYPE.tub,
        },
        {
          label: "Hướng biển",
          type: FACILITY_TYPE.view,
        },
        {
          label: "Giường King",
          type: FACILITY_TYPE.bed,
        },
        {
          label: "Thiết kế hiện đại và trang bị độc nhất",
          type: FACILITY_TYPE.design,
        },
        {
          label: "Quản gia 24/7",
          type: FACILITY_TYPE.butler,
        },
        {
          label: "Buffet sáng - từ 6h30 tới 10h",
          type: FACILITY_TYPE.food,
        },
        {
          label: "Sauna - từ 8h tới 22h",
          type: FACILITY_TYPE.relax,
        },
        {
          label: "Bistro & Restaurant – GIẢM 10% khi lưu trú tại khách sạn",
          type: FACILITY_TYPE.bistro,
        },
      ],
      price: "x,xxx,xxx VND",
    },
    {
      name: "Phòng Deluxe King Bed",
      type: "3",
      description:
        "Phòng hoàn hảo cho các cặp đôi, nổi bật với giường King êm ái và không gian thoải mái.",
      capacity: 2,
      facilities: [
        {
          label: "Bồn tắm cao cấp",
          type: FACILITY_TYPE.tub,
        },
        {
          label: "Hướng biển",
          type: FACILITY_TYPE.view,
        },
        {
          label: "Giường King",
          type: FACILITY_TYPE.bed,
        },
        {
          label: "Thiết kế hiện đại và trang bị độc nhất",
          type: FACILITY_TYPE.design,
        },
        {
          label: "Quản gia 24/7",
          type: FACILITY_TYPE.butler,
        },
        {
          label: "Buffet sáng - từ 6h30 tới 10h",
          type: FACILITY_TYPE.food,
        },
        {
          label: "Sauna - từ 8h tới 22h",
          type: FACILITY_TYPE.relax,
        },
        {
          label: "Bistro & Restaurant – GIẢM 10% khi lưu trú tại khách sạn",
          type: FACILITY_TYPE.bistro,
        },
      ],
      price: "x,xxx,xxx VND",
    },
    {
      name: "Phòng Superior Double",
      type: "4",
      description:
        "Phòng tiêu chuẩn dành cho cặp đôi, mang đến trải nghiệm tiện nghi cơ bản và thoải mái khi lưu trú.",
      capacity: 2,
      facilities: [
        {
          label: "Bồn tắm cao cấp",
          type: FACILITY_TYPE.tub,
        },
        {
          label: "Hướng biển",
          type: FACILITY_TYPE.view,
        },
        {
          label: "Giường King",
          type: FACILITY_TYPE.bed,
        },
        {
          label: "Thiết kế hiện đại và trang bị độc nhất",
          type: FACILITY_TYPE.design,
        },
        {
          label: "Quản gia 24/7",
          type: FACILITY_TYPE.butler,
        },
        {
          label: "Buffet sáng - từ 6h30 tới 10h",
          type: FACILITY_TYPE.food,
        },
        {
          label: "Sauna - từ 8h tới 22h",
          type: FACILITY_TYPE.relax,
        },
        {
          label: "Bistro & Restaurant – GIẢM 10% khi lưu trú tại khách sạn",
          type: FACILITY_TYPE.bistro,
        },
      ],
      price: "x,xxx,xxx VND",
    },
    {
      name: "Phòng cho Family",
      type: "5",
      description:
        "Lựa chọn hoàn hảo cho gia đình hoặc nhóm bạn 3-4 người, với tầm nhìn hướng biển cùng thiết kế hiện đại và sang trọng.",
      capacity: 4,
      facilities: [
        {
          label: "Bồn tắm cao cấp",
          type: FACILITY_TYPE.tub,
        },
        {
          label: "Hướng biển",
          type: FACILITY_TYPE.view,
        },
        {
          label: "Giường King",
          type: FACILITY_TYPE.bed,
        },
        {
          label: "Thiết kế hiện đại và trang bị độc nhất",
          type: FACILITY_TYPE.design,
        },
        {
          label: "Quản gia 24/7",
          type: FACILITY_TYPE.butler,
        },
        {
          label: "Buffet sáng - từ 6h30 tới 10h",
          type: FACILITY_TYPE.food,
        },
        {
          label: "Sauna - từ 8h tới 22h",
          type: FACILITY_TYPE.relax,
        },
        {
          label: "Bistro & Restaurant – GIẢM 10% khi lưu trú tại khách sạn",
          type: FACILITY_TYPE.bistro,
        },
      ],
      price: "x,xxx,xxx VND",
    },
    {
      name: "Phòng Superior Twin Bed",
      type: "6",
      description:
        "Phòng phù hợp cho nhóm 2-3 người hoặc gia đình có trẻ nhỏ với đầy đủ tiện nghi sang trọng nhưng không kém phần ấm cúng.",
      capacity: 3,
      facilities: [
        {
          label: "Bồn tắm cao cấp",
          type: FACILITY_TYPE.tub,
        },
        {
          label: "Hướng biển",
          type: FACILITY_TYPE.view,
        },
        {
          label: "Giường King",
          type: FACILITY_TYPE.bed,
        },
        {
          label: "Thiết kế hiện đại và trang bị độc nhất",
          type: FACILITY_TYPE.design,
        },
        {
          label: "Quản gia 24/7",
          type: FACILITY_TYPE.butler,
        },
        {
          label: "Buffet sáng - từ 6h30 tới 10h",
          type: FACILITY_TYPE.food,
        },
        {
          label: "Sauna - từ 8h tới 22h",
          type: FACILITY_TYPE.relax,
        },
        {
          label: "Bistro & Restaurant – GIẢM 10% khi lưu trú tại khách sạn",
          type: FACILITY_TYPE.bistro,
        },
      ],
      price: "x,xxx,xxx VND",
    },
    {
      name: "Phòng Dormitory",
      type: "7",
      description:
        "Lựa chọn thân thiện không thể hợp lý hơn cho các bạn trẻ, hội nhóm, muốn du lịch phượt dài ngày với chi phí phải chăng.",
      capacity: 3,
      facilities: [
        {
          label: "Bồn tắm cao cấp",
          type: FACILITY_TYPE.tub,
        },
        {
          label: "Hướng biển",
          type: FACILITY_TYPE.view,
        },
        {
          label: "Giường King",
          type: FACILITY_TYPE.bed,
        },
        {
          label: "Thiết kế hiện đại và trang bị độc nhất",
          type: FACILITY_TYPE.design,
        },
        {
          label: "Quản gia 24/7",
          type: FACILITY_TYPE.butler,
        },
        {
          label: "Buffet sáng - từ 6h30 tới 10h",
          type: FACILITY_TYPE.food,
        },
        {
          label: "Sauna - từ 8h tới 22h",
          type: FACILITY_TYPE.relax,
        },
        {
          label: "Bistro & Restaurant – GIẢM 10% khi lưu trú tại khách sạn",
          type: FACILITY_TYPE.bistro,
        },
      ],
      price: "x,xxx,xxx VND",
    },
  ];
  const facilities = [
    {
      name: "Buffet sáng (06:30-10:00)",
      description:
        "Bắt đầu ngày mới đầy năng lượng với buffet sáng tại tầng 2, từ 06:30 đến 10:00, với thực đơn phong phú, bao gồm các món ăn hấp dẫn Á - Âu. Khách lưu trú sẽ được thưởng thức bữa sáng miễn phí, mang đến trải nghiệm tuyệt vời ngay tại khách sạn.",
      type: "Dịch vụ",
      image: "/images/service/buffet.jpg",
    },
    {
      name: "Xông hơi, phòng sauna, Spa và massage",
      description:
        "Khách lưu trú tại khách sạn sẽ được trải nghiệm miễn phí dịch vụ sauna và steam, giúp thư giãn, giải tỏa căng thẳng và tái tạo năng lượng sau một ngày dài. Ngoài ra, khách còn được giảm 50% cho tất cả các dịch vụ spa và massage, mang đến cơ hội thư giãn tuyệt vời và phục hồi sức khỏe với mức giá ưu đãi.",
      type: "Dịch vụ",
      image: "/images/gallery/9.jpg",
    },
    {
      name: "Hỗ trợ check-in sớm, check-out muộn",
      description:
        "Chúng tôi sẵn sàng hỗ trợ check-in sớm và check-out muộn tùy vào tình hình phòng và yêu cầu của khách. Bạn có thể thông báo trước để chúng tôi chuẩn bị tốt nhất cho bạn.",
      type: "Dịch vụ",
      image: "/images/gallery/10.jpg",
    },
    {
      name: "Dịch vụ đón sân bay, cho thuê xe máy / xe ôtô 4 chỗ, 7 chỗ, 16 chỗ",
      description:
        "Chúng tôi cung cấp dịch vụ đón khách tại sân bay, đảm bảo sự thuận tiện và thoải mái ngay từ khi bạn vừa đặt chân đến. Ngoài ra chúng tôi còn cung cấp dịch vụ cho thuê xe máy và ôtô(4, 7, 16 chỗ), giúp bạn dễ dàng khám phá thành phố và tận hưởng chuyến đi thoải mái và linh hoạt.",
      type: "Dịch vụ",
      image: "/images/IMG_4177.JPG",
    },
    {
      name: "Dịch vụ đặt tour du lịch",
      description:
        "Hỗ trợ đặt tour tham quan du lịch, giúp bạn dễ dàng khám phá những địa điểm nổi bật và trải nghiệm văn hóa đặc sắc của khu vực.",
      type: "Dịch vụ",
      image: "/images/service/cauvang.png",
    },
    {
      name: "Quản gia, Bãi đỗ xe 24/7",
      description:
        "Quản gia 24/7 của chúng tôi luôn sẵn sàng hỗ trợ mọi yêu cầu của bạn, ngoài ra còn cung cấp dịch vụ đỗ xe 24/7, đảm bảo không gian an toàn và tiện lợi cho phương tiện cũng như sự tiện nghi và trải nghiệm hoàn hảo suốt thời gian lưu trú.",
      type: "Dịch vụ",
      image: "/images/5.jpg",
    },
    {
      name: "Dịch vụ ăn uống tại phòng",
      description:
        "Khách lưu trú có thể dễ dàng gọi món ăn ngay tại phòng, tận hưởng bữa ăn ngon miệng và tiện lợi mà không cần rời khỏi không gian riêng tư của mình.",
      type: "Dịch vụ",
      image: "/images/gallery/5.jpg",
    },
    {
      name: "Dịch vụ vé kí ức Hội An, vé đi Bà Nà",
      description:
        "Cung cấp dịch vụ đặt vé Ký Ức Hội An và vé đi Bà Nà, mang đến cơ hội khám phá những trải nghiệm văn hóa độc đáo và cảnh đẹp huyền bí tại các điểm du lịch nổi tiếng.",
      type: "Dịch vụ",
      image: "/images/service/banahill.png",
    },
  ];

  const foodItems = [
    {
      name: "Chả giò PAMA",
      image:
        "https://cdn.pamaboutique.com/menu/cha%CC%89%20gio%CC%80%20PAMA.jpg",
    },
    {
      name: "Cơm chiên tôm tỏi",
      image:
        "https://cdn.pamaboutique.com/menu/co%CC%9Bm%20chie%CC%82n%20to%CC%82m%20to%CC%89i.jpg",
    },
    {
      name: "Mì ý bò bằm",
      image:
        "https://cdn.pamaboutique.com/menu/mi%CC%80%20y%CC%81%20bo%CC%80%20ba%CC%86%CC%80m.jpg",
    },
    {
      name: "Mì ý hải sản",
      image:
        "https://cdn.pamaboutique.com/menu/mi%CC%80%20y%CC%81%20ha%CC%89i%20sa%CC%89n.jpg",
    },
    {
      name: "Mực chiên giòn",
      image:
        "https://cdn.pamaboutique.com/menu/mu%CC%9B%CC%A3c%20chie%CC%82n%20gio%CC%80n.jpg",
    },
    {
      name: "Mì ý sốt phô mai trứng",
      image:
        "https://cdn.pamaboutique.com/menu/mi%CC%80%20y%CC%81%20so%CC%82%CC%81t%20pho%CC%82%20mai%20tru%CC%9B%CC%81ng.jpg",
    },
    {
      name: "Salad Ceasar nguyên bản",
      image:
        "https://cdn.pamaboutique.com/menu/salad%20ceasar%20nguye%CC%82n%20ba%CC%89n.jpg",
    },
    {
      name: "Salad tôm trái cây mùa hè",
      image:
        "https://cdn.pamaboutique.com/menu/salad%20to%CC%82m%20tra%CC%81i%20ca%CC%82y%20mu%CC%80a%20he%CC%80.jpg",
    },
    {
      name: "Salad rau trái cây & sốt mật ong",
      image:
        "https://cdn.pamaboutique.com/menu/salad%20rau%20tra%CC%81i%20ca%CC%82y%20%26%20so%CC%82%CC%81t%20ma%CC%A3%CC%82t%20ong.jpg",
    },
  ];
  return (
    <>
      <section className="bg-[url('/images/home/about-section-background.webp')] bg-cover w-full h-[50vh] flex flex-col items-center justify-center py-12 px-4"></section>
      <section id="food" className="px-4 max-w-7xl mx-auto mt-8">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mt-10">
          <h2 className="text-green-900 text-2xl py-4 border-y-2 border-orange-400 text-center px-4 mb-6 font-bold">
            Món ăn của PĀMA
          </h2>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((food, index) => {
            return (
              <div
                key={index}
                className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-green-900 font-raleway text-center">
                    {food.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="room" className="px-4 max-w-7xl mx-auto mt-8">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mt-10">
          <h2 className="text-green-900 text-2xl py-4 border-y-2 border-orange-400 text-center px-4 mb-6 font-bold">
            Danh sách phòng của PĀMA
          </h2>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room, index) => {
            return (
              <BookingCard
                onBooking={handleOpenBookingModal}
                key={index}
                data={room}
              />
            );
          })}
          <BookingModal
            onDataChange={(data) => {
              setBookingData(data);
            }}
            onSubmit={(event) => {
              onSubmitBooking(new FormData(event.currentTarget));
            }}
            data={bookingData}
            handler={handleOpenBookingModal}
            open={openBookingModal}
          />
        </div>
      </section>
      <section id="facility" className="px-4 max-w-7xl mx-auto mt-8 mb-8">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <h2 className="text-green-900 text-2xl py-4 border-y-2 border-orange-400 text-center px-4 mb-6 font-bold">
            Dịch vụ của PĀMA
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {facilities.map((fac, index) => {
            return (
              <HorizontalCard
                key={index}
                data={{ ...fac, rtl: index % 2 == 0 }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
