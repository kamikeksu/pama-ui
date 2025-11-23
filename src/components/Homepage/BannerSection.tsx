import { Carousel } from "@material-tailwind/react";

export function BannerSection() {
  const HOME_BANNERS = [
    {
      description: `Welcome to <br/> PĀMA Boutique Hotel & Bistro`,
      img: "/images/banner/3.webp",
      order: 3,
      name: "3",
      href: null,
    },
    {
      description: `Welcome to <br/> PĀMA Boutique Hotel & Bistro`,
      img: "/images/banner/2.jpg",
      order: 1,
      name: "1",
      href: null,
    },
    // {
    //   description: `Welcome to <br/> PĀMA Boutique Hotel & Bistro`,
    //   img: "/images/banner/2.webp",
    //   order: 2,
    //   name: "2",
    //   href: null,
    // },
    {
      description: `Welcome to <br/> PĀMA Boutique Hotel & Bistro`,
      img: "/images/banner/4.webp",
      order: 4,
      name: "4",
      href: null,
    },
  ];

  return (
    <section className="w-full h-screen max-w-full">
      <Carousel draggable autoplayDelay={5000} loop>
        {HOME_BANNERS.map((item) => {
          return (
            <div key={item.name} className="relative">
              <div
                className="w-full h-screen bg-cover bg-center"
                style={{
                  backgroundImage: `url('${item.img}')`,
                }}
              ></div>
              <div
                className="absolute top-0 left-0 w-full h-screen text-center text-green-800 items-center justify-center select-none text-4xl flex flex-col bg-black/10"
                // dangerouslySetInnerHTML={{ __html: item.description || "" }}
              >
                <h2 className="bg-gradient-b-to-rt inline-block text-transparent font-bold drop-shadow-md  bg-clip-text">
                  Welcome to
                </h2>
                <h2 className="bg-gradient-b-to-rt inline-block text-transparent font-bold drop-shadow-md  bg-clip-text">
                  Pama boutique
                </h2>
                <p>
                  <span className="relative before:contents-none  font-bold drop-shadow-md before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-10 before:h-0.5 bg-gradient-b-to-rt inline-block text-transparent bg-clip-text before:bg-gradient-b-to-rt before:-translate-x-full after:contents-none after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-10 after:h-0.5 after:bg-gradient-b-to-rt after:translate-x-full">
                    Since 2022
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
