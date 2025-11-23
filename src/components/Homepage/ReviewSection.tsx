import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export function ReviewSection() {
  const REVIEWS = [
    {
      description: `“Mình rất ưng nơi đây từ vị trí đến không gian phòng, view biển rất đẹp. Các bạn nhân viên cũng rất takecare bọn mình. Bữa sáng buffet ở PĀMA ngon và đa dạng. Điểm cộng là bọn mình còn được xông hơi free thư giãn nữa nên rất thích. Cảm ơn PĀMA nhiều!”`,
      img: "/images/reviews/1.jpg",
      reviewer: "Huỳnh Lê Bảo Diệp",
      name: "1",
    },
    {
      description: `“Mình đặt phòng sớm qua fanpage nên được giảm 10%. Đồ ăn tại Bistro cũng rất ngon và phù hợp khẩu vị với cả gia đình mình. Phòng sạch sẽ và hiện đại, còn có cửa sổ lớn có thể tận hưởng trọn view biển và đón bình minh rất hợp lý.”`,
      img: "/images/reviews/2.jpg",
      reviewer: "Nguyễn Ngọc Ánh Ly",
      name: "2",
    },
    {
      description: `“Gia đình mình đến Đà Nẵng du lịch nhân kỷ niệm ngày cưới của bố mẹ. Mình chọn PĀMA Boutique Hotel vì thấy khách sạn có dịch vụ trang trí phòng theo yêu cầu. Bố mẹ mình rất hài lòng, nhân viên lại nhiệt tình hỗ trợ. Chắc chắn sẽ quay lại khi có dịp!”`,
      img: "/images/reviews/3.jpg",
      reviewer: "Nguyễn Trần Trung Hiếu",
      name: "3",
    },
    {
      description: `“Phòng sạch sẽ thoáng mát, quầy bar tại Bistro trông đẹp mà sang nhìn rất thích, rất đúng gu. Các bạn nhân viên còn tư vấn cho mình nhiều điểm vui chơi tại Đà Nẵng. Chuyến đi của mình đã rất ý nghĩa nhờ có khách sạn PĀMA.”`,
      img: "/images/reviews/4.jpg",
      reviewer: "Võ Quỳnh Trâm",
      name: "4",
    },
    {
      description: `“Our room was very large and airy, allowing us to see the entire beauty of Da Nang's seascape. PĀMA gives us very useful and interesting experiences. Professional service and the hotel is always ready to assist when we need it. If I have the opportunity to return to Da Nang, I will always choose PĀMA as my place to stay.”`,
      img: "/images/reviews/5.jpg",
      reviewer: "Evelyn Mae Harper",
      name: "5",
    },
    {
      description: `“I came to Vietnam alone and when I arrived at PĀMA I felt like this was my family and did not feel lonely when traveling alone. The staff here are very cute and friendly, always ready to support and advise when I need it. The bartenders at the Bistro are very friendly and humorous, always making me laugh and ask questions when I visit. This place is wonderful, thank you PĀMA!”`,
      img: "/images/reviews/6.png",
      reviewer: "Samuel Charles Wilson",
      name: "6",
    },
    {
      description: `“Phòng sạch sẽ và thiết kế decor của khách sạn rất có gu. Đặc biệt là khách sạn còn có một bé chó tên Sạn rất đáng yêu và hiếu khách nữa, nhờ có bé chó nên thời gian lưu trú của mình và con gái rất vui.”`,
      img: "/images/reviews/7.png",
      reviewer: "Võ Huỳnh Anh Thi",
      name: "7",
    },
  ];
  return (
    <section className="w-full h-fit bg-white py-12 px-4">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
        <h2 className="text-green-900 text-2xl py-4 px-4 mb-8 border-y-2 border-orange-400 text-center font-bold">
          Cảm nhận khách hàng
        </h2>
        <Carousel autoplay draggable autoplayDelay={5000} loop>
          {REVIEWS.map((item) => {
            return (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center gap-5"
              >
                <Image
                  className="w-52 h-52 aspect-square rounded-md object-cover"
                  alt={item.name}
                  src={item.img}
                  width={96}
                  height={96}
                />
                <div>
                  <p className="text-center text-xl text-primary my-3">
                    {item.reviewer}
                  </p>
                  <p className="text-center">{item.description}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
