"use client";
import ImageGallery from "@/components/common/ImageGallery";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="w-full h-screen bg-[url('/images/about/9.jpg')] bg-cover bg-center">
        {/* <p className="w-full h-full flex items-center justify-center text-4xl text-center  bg-gradient-b-to-rt text-transparent font-bold drop-shadow-md  bg-clip-text">
          Chúng tôi là <br /> PĀMA Boutique Hotel & Bistro
        </p> */}
      </section>
      <section className="max-w-7xl mx-auto mt-8">
        <div className="max-w-40 lg:max-w-64 border border-orange-700 mx-auto my-8"></div>

        <div className="grid mx-auto lg:grid-cols-2 px-4 relative">
          <Image
            className="object-cover w-full h-auto rounded-xl aspect-square sticky lg:block lg:top-32 lg:bottom-0"
            width={757}
            height={988}
            alt="service"
            src="/images/about/2.jpg"
          />
          <div className="items-center flex flex-col justify-center w-full py-10 md:py-14 lg:px-8">
            <h4 className="block antialiased tracking-normal text-2xl lg:text-3xl text-left w-full leading-snug text-primary font-bold mb-5">
              Sứ mệnh của chúng tôi
            </h4>
            <div className="items-center w-full text-base mb-4">
              PĀMA Boutique Hotel & Bistro ra đời với khát vọng không chỉ mang
              lại một điểm dừng chân, mà còn là nơi những kỷ niệm đáng nhớ được
              tạo dựng. Chúng tôi khao khát mang đến cho du khách một không gian
              mà sự sang trọng, tiện nghi và ấm cúng hòa quyện với nhau, tạo
              thành trải nghiệm khó quên.
            </div>
            <div className="items-center w-full text-base mb-4">
              Chúng tôi đặt sứ mệnh vượt qua những tiêu chuẩn thông thường để
              làm hài lòng mọi du khách. Tại PĀMA, mọi chi tiết, dù là nhỏ nhất,
              đều được chúng tôi chăm chút kỹ lưỡng. Đó không chỉ là việc bạn có
              một chỗ nghỉ ngơi thoải mái, mà là cả một hành trình khám phá, thư
              giãn và cảm nhận trọn vẹn. Với đội ngũ tâm huyết, PĀMA cam kết trở
              thành người bạn đồng hành trong từng khoảnh khắc đáng nhớ của
              khách hàng.
            </div>
          </div>
        </div>

        <div className="max-w-40 lg:max-w-64 border border-orange-700 mx-auto my-8"></div>

        <div className="grid mx-auto lg:grid-cols-2 px-4 relative">
          <Image
            className="object-cover w-full h-auto rounded-xl aspect-square sticky lg:block lg:top-32 lg:bottom-0 object-right"
            width={757}
            height={988}
            alt="service"
            src="/images/about/8.jpg"
          />
          <div className="items-center flex flex-col justify-center w-full py-10 md:py-14 lg:px-8">
            <h4 className="block antialiased tracking-normal text-2xl lg:text-3xl text-left w-full leading-snug text-primary font-bold mb-5">
              Giá trị cốt lõi
            </h4>
            <div className="items-center w-full text-base mb-4">
              Khách hàng là ưu tiên hàng đầu: Chúng tôi coi mỗi vị khách như một
              thành viên gia đình, với mục tiêu làm hài lòng cả những yêu cầu
              nhỏ nhất. Đội ngũ PĀMA luôn sẵn sàng mang đến dịch vụ cá nhân hóa
              theo nhu cầu cụ thể của từng khách hàng.
            </div>
            <div className="items-center w-full text-base mb-4">
              Tinh thần đổi mới và sáng tạo: Luôn tìm kiếm và áp dụng các ý
              tưởng mới mẻ để tạo ra sự khác biệt trong từng trải nghiệm. PĀMA
              tin rằng, sự sáng tạo trong dịch vụ sẽ tạo nên sự kết nối sâu sắc
              hơn với du khách.
            </div>
            <div className="items-center w-full text-base mb-4">
              Phát triển bền vững: Chúng tôi cam kết sử dụng tài nguyên một cách
              có trách nhiệm, ưu tiên các giải pháp thân thiện với môi trường
              như giảm rác thải nhựa, tái chế và hỗ trợ các sản phẩm địa phương.
            </div>
            <div className="items-center w-full text-base mb-4">
              Tinh hoa văn hóa Việt: Tại PĀMA, chúng tôi tự hào giới thiệu văn
              hóa Việt Nam đến bạn bè quốc tế qua từng góc thiết kế, cách bày
              trí và dịch vụ. Sự giao thoa giữa văn hóa hiện đại và truyền thống
              chính là một phần của trải nghiệm PĀMA.
            </div>
          </div>
        </div>
        <div className="max-w-40 lg:max-w-64 border border-orange-700 mx-auto my-8"></div>

        <div className="grid mx-auto lg:grid-cols-2 px-4 relative">
          <Image
            className="object-cover w-full h-auto rounded-xl aspect-square sticky lg:block lg:top-32 lg:bottom-0"
            width={757}
            height={988}
            alt="service"
            src="/images/about/vision_1.jpg"
          />
          <div className="items-center flex flex-col justify-center w-full py-10 md:py-14 lg:px-8">
            <h4 className="block antialiased tracking-normal text-2xl lg:text-3xl text-left w-full leading-snug text-primary font-bold mb-5">
              Đội ngũ của chúng tôi
            </h4>
            <div className="items-center w-full text-base mb-4">
              PĀMA không chỉ là một khách sạn, mà còn là một mái nhà của những
              con người mang trong mình lòng đam mê mãnh liệt với nghề hiếu
              khách. Mỗi thành viên của đội ngũ chúng tôi không chỉ được đào tạo
              bài bản mà còn chia sẻ cùng nhau tầm nhìn về sự tận tụy.
            </div>
            <div className="items-center w-full text-base mb-4">
              Sự ấm áp trong từng nụ cười chào đón hay lời hỏi thăm nhẹ nhàng là
              điều mà khách hàng sẽ luôn ghi nhớ khi ghé thăm. Đội ngũ của chúng
              tôi hiểu rõ từng chi tiết của khách sạn, từ các tiện nghi, dịch vụ
              cho đến những câu chuyện thú vị xung quanh Đà Nẵng, sẵn sàng là
              người bạn đồng hành trên hành trình của bạn.
            </div>
            <div className="items-center w-full text-base mb-4">
              Ngoài sự chuyên nghiệp, PĀMA tự hào là nơi đội ngũ nhân viên luôn
              gắn bó với tinh thần gia đình. Họ không chỉ phục vụ mà còn sẻ chia
              và lan tỏa giá trị yêu thương đến mọi du khách bước chân đến đây.
            </div>
          </div>
        </div>

        <div className="max-w-40 lg:max-w-64 border border-orange-700 mx-auto my-8"></div>

        <div className="grid mx-auto lg:grid-cols-2 px-4 relative">
          <Image
            className="object-cover w-full h-auto rounded-xl aspect-square sticky lg:block lg:top-32 lg:bottom-0"
            width={757}
            height={988}
            alt="service"
            src="/images/about/4.jpg"
          />
          <div className="items-center flex flex-col justify-center w-full py-10 md:py-14 lg:px-8">
            <h4 className="block antialiased tracking-normal text-2xl lg:text-3xl text-left w-full leading-snug text-primary font-bold mb-5">
              Hành trình hình thành và phát triển
            </h4>
            <div className="items-center w-full text-base mb-4">
              Hành trình của PĀMA bắt đầu từ niềm đam mê của một đội ngũ nhỏ với
              mong muốn xây dựng một không gian lưu trú khác biệt giữa lòng Đà
              Nẵng – một thành phố đang vươn mình mạnh mẽ trên bản đồ du lịch
              thế giới.
            </div>
            <div className="items-center w-full text-base mb-4">
              Ban đầu chỉ là một khách sạn boutique nhỏ, chúng tôi đã không
              ngừng cải tiến và mở rộng để trở thành một tổ hợp lưu trú đầy đủ
              tiện nghi với phong cách độc đáo. PĀMA không chỉ đáp ứng nhu cầu
              nghỉ dưỡng mà còn là nơi giao thoa của văn hóa, trải nghiệm và sự
              tận hưởng.
            </div>
            <div className="items-center w-full text-base mb-4">
              Ngày hôm nay, PĀMA đã ghi dấu ấn như một trong những lựa chọn hàng
              đầu của du khách khi ghé thăm Đà Nẵng. Mỗi bước phát triển đều gắn
              liền với sự ủng hộ và tin tưởng từ khách hàng, điều này không chỉ
              là niềm vinh dự mà còn là động lực lớn để chúng tôi tiến xa hơn
              trong tương lai.
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col my-8 items-center justify-center max-w-7xl mx-auto px-4">
        <h2 className="text-green-900 text-2xl py-4 px-4 mb-8 border-y-2 border-orange-400 text-center font-bold">
          Thư viện ảnh
        </h2>
        <ImageGallery />
      </section>
    </>
  );
}
