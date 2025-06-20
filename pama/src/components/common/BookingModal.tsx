/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import CustomInput from "./CustomInput";
interface IBookingModalData {
  open: boolean;
  data: IBookingData | null;
  handler: () => void;
  onDataChange: (data: IBookingData) => void;
  onSubmit: (data: any) => void;
}

export interface IBookingData {
  startDate?: Date;
  endDate?: Date;
  name?: string;
  phonenumber?: string;
}
export default function BookingModal({
  open,
  handler,
  onSubmit,
}: IBookingModalData) {
  return (
    <Dialog className="font-raleway" open={open} size="lg" handler={handler}>
      <DialogHeader className="justify-center">Đặt phòng tại PAMA</DialogHeader>
      <DialogBody className="pt-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
          className="flex flex-col gap-4"
        >
          <div className="md:grid md:grid-cols-2 gap-y-1 gap-x-5">
            <CustomInput
              id="name"
              name="name"
              label="Tên Khách Hàng"
              title="Vui lòng nhập tên của bạn"
              type="text"
              placeholder="Nguyễn Văn A"
              required
            />
            <CustomInput
              id="phone"
              name="phonenumber"
              label="Số điện thoại"
              placeholder="0905685986"
              type="tel"
              title="Vui lòng nhập đúng định dạng số điện thoại ở Việt Nam"
              required
              pattern="^(0?)(3[2-9]|5[6-9]|7[0-9]|8[0-9]|9[0-9])[0-9]{7}$"
            />
            <CustomInput
              id="start_time"
              name="start_time"
              label="Ngày thuê"
              type="datetime-local"
            />
            <CustomInput
              id="end_time"
              name="end_time"
              label="Ngày trả phòng"
              type="datetime-local"
            />
          </div>
          <Button className="bg-gradient-b-to-rt" type="submit">
            <span>Đặt phòng</span>
          </Button>
        </form>
      </DialogBody>
    </Dialog>
  );
}
