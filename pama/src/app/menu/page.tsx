"use client";

import Image from "next/image";

export default function Page() {
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
      <section id="food" className="px-4 max-w-7xl mx-auto mt-8 mb-8">
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
    </>
  );
}
