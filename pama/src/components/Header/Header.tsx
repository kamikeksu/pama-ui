"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Logo from "@/components/Logo/Logo";
import { Drawer } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookingModal, { IBookingData } from "../common/BookingModal";
import NavItem from "./NavItem";

function isActive(pathname: string, href: string): boolean {
  if (pathname === href) return true;
  if (href === "/" && pathname === "/") return true;
  if (pathname.startsWith(href) && pathname !== href && href !== "/")
    return true;
  return false;
}

const NAV_MENU = [
  {
    name: "Trang Chủ",
    href: "/",
  },
  {
    name: "Giới Thiệu",
    href: "/about",
  },
  {
    name: "Pāma Bistro",
    href: "/menu",
  },
  {
    name: "Dịch Vụ",
    href: "/service",
  },
  {
    name: "Tin Tức",
    href: "/blog",
  },
];

export function Header() {
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
  const [bookingData, setBookingData] = useState<IBookingData | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const pathname = usePathname();

  const handleOpenBookingModal = () => setOpenBookingModal((cur) => !cur);
  const handleOpenMenuDrawer = () => setOpenMenuDrawer((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenBookingModal(false)
    );
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div
      className={`site-header fixed top-0 z-[51] border-0 w-full h-28 sm:h-auto px-4 transition-all duration-200 py-4 ${
        isScrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="h-full mx-auto grid grid-cols-3">
        <div
          className={`text-lg grow font-bold flex items-center h-full justify-start gap-5 ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <button onClick={handleOpenMenuDrawer}>
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          </button>
          <div className="hidden sm:block">
            <p className={`${isScrolling ? "text-gray-900" : "text-white"}`}>
              Hot line
            </p>
            <p
              className={`${
                isScrolling ? "text-gray-900" : "text-white"
              } font-[monospace]`}
            >
              <a href="tel:0905 685 986">0905 685 986</a>
            </p>
          </div>
        </div>
        <div className="flex h-full justify-center items-center">
          <Logo isScrolling={isScrolling} />
        </div>
        <div
          className={`flex h-full justify-end items-center gap-4 grow ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {/* <Button
            className="bg-transparent pr-0 sm:pr-7 shadow-none sm:bg-gradient-b-to-rt rounded-full flex items-center w-fit sm:min-w-48 justify-center"
            size="lg"
            onClick={handleOpenBookingModal}
            fullWidth={true}
          >
            <CalendarDateRangeIcon
              className={`w-6 h-6 ${
                isScrolling ? "text-primary sm:text-white" : ""
              }`}
            />
            <span className="hidden sm:block font-raleway">Đặt Phòng</span>
          </Button> */}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ul
          className={`ml-10 hidden items-center gap-6 md:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              <span
                className={`font-raleway ${pathname} ${
                  isActive(pathname, href)
                    ? `${
                        isScrolling ? "text-highlight" : "text-white"
                      } font-bold`
                    : ""
                }`}
              >
                {name}
              </span>
            </NavItem>
          ))}
        </ul>
      </div>
      <Drawer size={9000} open={openMenuDrawer} className="p-4">
        <div className="bg-white px-6 py-5 h-full w-full">
          <div className="flex justify-end items-center">
            <button
              color={isScrolling ? "gray" : "white"}
              onClick={handleOpenMenuDrawer}
            >
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={pathname === href ? "#" : href}>
                <span
                  className={`font-raleway  ${
                    isActive(pathname, href) ? `text-highlight font-bold` : ""
                  }`}
                >
                  {name}
                </span>
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-center gap-4">
            {/* <Button
              className="bg-gradient-b-to-rt rounded-full flex items-center justify-center"
              size="lg"
              onClick={handleOpenBookingModal}
              fullWidth={true}
            >
              <CalendarDateRangeIcon className="w-6 h-6" />
              <span className="block font-raleway">Đặt Phòng</span>
            </Button> */}
          </div>
        </div>
      </Drawer>

      <BookingModal
        onDataChange={(data) => {
          setBookingData(data);
        }}
        onSubmit={(event) => {
          const formData = new FormData(event.currentTarget);
          onSubmitBooking(formData);
        }}
        data={bookingData}
        handler={handleOpenBookingModal}
        open={openBookingModal}
      />
    </div>
  );
}

export default Header;
