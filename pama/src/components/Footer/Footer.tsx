"use client";

import Image from "next/image";
import Logo from "../Logo/Logo";

const LINKS = [
  {
    title: "Khách sạn",
    items: [
      { title: "Giới thiệu", link: "/about" },
      { title: "Dịch Vụ", link: "/service" },
      { title: "Tin tức", link: "/blog" },
    ],
  },
  {
    title: "Liên hệ",
    items: [
      { title: "Mail", link: "mailto:pamaboutiquevn@gmail.com" },
      { title: "Phone", link: "tel:+84905685986" },
      {
        title: "Google Map",
        link: "https://maps.app.goo.gl/sdpX5VcwvpeKcVZq8",
        isBlank: true,
      },
    ],
  },
];

const SOCIAL = {
  title: "Mạng xã hội",
  items: [
    {
      title: "Google",
      isBlank: true,
      icon: "google.png",
      link: "https://www.facebook.com/pamaboutique.danang?mibextid=LQQJ4d",
    },
    {
      title: "Facebook",
      isBlank: true,
      icon: "facebook.png",
      link: "https://www.facebook.com/pamaboutique.danang?mibextid=LQQJ4d",
    },
    {
      title: "Instagram",
      isBlank: true,
      icon: "instagram.png",
      link: "https://www.instagram.com/pamaboutiquehotel?igsh=ZHJ1MWRpN3JoODB5",
    },
    {
      title: "Agoda",
      isBlank: true,
      icon: "agoda.png",
      link: "https://www.agoda.com/vi-vn/pama-boutique-hotel-bistro/hotel/da-n-ng-vn.html",
    },
    {
      title: "Booking.com",
      isBlank: true,
      icon: "booking.png",
      link: "https://www.booking.com/hotel/vn/pama-boutique-amp-bistro.vi.html",
    },
    {
      title: "Tripadvisor",
      isBlank: true,
      icon: "tripadvisor.png",
      link: "https://www.tripadvisor.com.vn/Hotel_Review-g298085-d25212368-Reviews-Pama_Boutique_Hotel_Bistro-Da_Nang.html",
    },
    {
      title: "Traveloka",
      isBlank: true,
      icon: "traveloka.png",
      link: "https://www.traveloka.com/vi-vn/hotel/vietnam/pama-boutique-hotel--bistro-9000001136744 ",
    },
    {
      title: "Ctrip",
      isBlank: true,
      icon: "ctrip.png",
      link: "https://vn.trip.com/hotels/da-nang-hotel-detail-102393931/pama-boutique-hotel-bistro-danang/",
    },
    {
      title: "Expedia",
      isBlank: true,
      icon: "expedia.png",
      link: "https://www.expedia.com/Da-Nang-And-Vicinity-Hotels-PAMA-Boutique-Hotel-Bistro-Danang.h90507938.Hotel-Reviews",
    },
  ],
};

const coppyYear = "2022";

export function Footer2() {
  return (
    <footer className="relative w-full bg-gradient-b-to-rt py-10 text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex justify-start gap-10 flex-wrap">
          <div className="w-full sm:w-fit min-w-52 flex items-start justify-start [&>a]:mx-auto">
            <Logo isScrolling={false} />
          </div>
          <div className="grow flex flex-wrap justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p className="mb-3 text-highlight font-bold uppercase">
                  {title}
                </p>
                {items.map((item) => (
                  <li key={item.link}>
                    <a
                      target={`${item.isBlank ? "_blank" : "_self"}`}
                      href={item.link}
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
            <ul
              key="social"
              className="flex flex-wrap max-w-80 gap-3 justify-between"
            >
              <p className="text-highlight font-bold uppercase basis-full">
                {SOCIAL.title}
              </p>
              {SOCIAL.items.map((item) => {
                return (
                  <li key={item.link} className="basis-5/12">
                    <a
                      target={`${item.isBlank ? "_blank" : "_self"}`}
                      href={item.link}
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900 flex gap-3 group"
                    >
                      <Image
                        src={`/icons/${item.icon}`}
                        width={24}
                        height={24}
                        alt={item.title}
                        className="w-6 h-6 min-w-6 min-h-6 aspect-square rounded-full overflow-hidden group-hover:shadow-lg bg-white"
                      />
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <p className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {coppyYear} &nbsp;
            <a href="/">Pama Boutique</a>. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <div className="flex gap-2 mt-3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
