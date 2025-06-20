import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

interface IBookingCard {
  image: string;
  description?: string;
  name: string;

  type?: string;
  rtl?: boolean;
}

export function HorizontalCard({ data }: { data: IBookingCard }) {
  return (
    <Card
      className={`w-full ${
        data?.rtl ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col items-center justify-center`}
    >
      <CardHeader
        shadow={false}
        floated={false}
        className={`m-0 sm:w-full md:w-2/5 shrink-0 ${
          data.rtl ? "md:rounded-l-none" : "md:rounded-r-none"
        }`}
      >
        <Image
          className={`h-full w-full object-cover ${
            data.rtl ? "rounded-l-none" : "rounded-r-none"
          }`}
          src={data.image}
          width={500}
          height={500}
          alt=""
        />
      </CardHeader>
      <CardBody className={`${data?.rtl ? "text-right" : "text-left"}`}>
        <Typography
          variant="h6"
          color="gray"
          className="mb-4 font-raleway uppercase"
        >
          {data.type}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="font-raleway mb-2"
        >
          {data.name}
        </Typography>
        <Typography color="gray" className="mb-8 font-raleway font-normal">
          {data.description}
        </Typography>
      </CardBody>
    </Card>
  );
}
