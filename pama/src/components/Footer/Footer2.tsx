import { FacebookIcon } from "@/components/icons";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

import Logo from "../Logo/Logo";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();
export default function Footer() {
  const SOCIAL_ITEM = [
    { icon: EnvelopeIcon, name: "Mail", href: "mailto:someone@example.com" },
    { icon: PhoneIcon, name: "Phone", href: "tel:+123456789" },
    { icon: FacebookIcon, name: "Facebook", href: "tel:+123456789" },
  ];
  return (
    <div className="bg-green-900 text-white py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 py-5">
          <div className="basis-1/4">
            <div className="flex flex-col items-start justify-center mb-3">
              <Logo isScrolling={true} />
            </div>
            <p>Giờ mở cửa</p>
            <p>9:30 - 20:00</p>
            <p>Từ thứ 2 - Chủ nhật</p>
            <div className="flex gap-2 mt-3">
              {SOCIAL_ITEM.map(({ href, icon: Icon, name }) => (
                <a key={name} href={href} title={`Pama's ${name}`}>
                  <Icon width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between gap-6">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p color="blue-gray" className="mb-3 font-medium uppercase">
                  {title}
                </p>
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex flex-col flex-grow max-w-md">
            <p className="uppercase mb-5 text-sm">
              Đăng ký nhận thông tin khuyến mãi
            </p>
            <form action="/subscribe" method="post" className="w-full flex">
              <input
                type="email"
                name="email"
                className="h-12 bg-white flex-grow px-2 shadow-sm text-gray-800 rounded-md"
                placeholder="Địa chỉ email"
              />
              <button
                type="submit"
                className="h-12 w-28 bg-[#e29f3b] shadow-sm text-white rounded-md"
              >
                Đăng ký
              </button>
            </form>
            <p className="text-wrap text-sm mt-5">
              Giấy phép kinh doanh số: 03081329xxx cấp ngày 20/04/2xxx bởi Sở Kế
              hoạch và Đầu Tư TP. ABC.
            </p>
          </div>
        </div>
        <div className="border-t border-orange-600 flex justify-between items-center py-5">
          <div className="">
            <p>webdemo@gmail.com</p>
            <p>96 Tran Bach Dang, My An, Ngu Hanh Son, Da Nang</p>
          </div>
          <div className="">
            <p>Copyright © {currentYear} PĀMA Boutique Hotel & Bistro</p>
            <p>
              Hotline: <a href="tel:+84905685986">+84.905 685 986</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
