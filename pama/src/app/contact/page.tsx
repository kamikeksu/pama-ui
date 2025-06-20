"use client";
import PamaMapEmbed from "@/components/common/PamaMapEmbed";
import Image from "next/image";

export default function Page() {const SOCIAL = {
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
  return (
    <>
   <section className="bg-[url('/images/home/about-section-background.webp')] bg-cover w-full h-[20vh] flex flex-col items-center justify-center py-12 px-4"></section>
      <section className="max-w-7xl mx-auto py-5 my-5 md:py-10 md:my-10 ">
        <div className="flex md:flex-row flex-col-reverse gap-3 w-full justify-start">
        <div className="w-full md:w-1/2 p-5"><div className="flex items-center justify-center">
                <PamaMapEmbed />
              </div></div>
          <div className="w-full md:w-1/3 p-5">
          <ul
                      key="social"
                      className="flex flex-wrap max-w-80 gap-3 justify-between"
                    >
                     
                      {SOCIAL.items.map((item) => {
                        return (
                          <li key={item.link} className="basis-5/12">
                            <a
                              target={`${item.isBlank ? "_blank" : "_self"}`}
                              href={item.link}
                              className="py-1.5 text-lg font-normal transition-colors hover:text-blue-gray-900 flex gap-3 group"
                            >
                              <Image
                                src={`/icons/${item.icon}`}
                                width={26}
                                height={26}
                                alt={item.title}
                                className="w-7 h-7 min-w-7 min-h-7 aspect-square rounded-full overflow-hidden group-hover:shadow-lg bg-white"
                              />
                              {item.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
          </div>

        </div>
      </section>
     
    </>
  );
}
