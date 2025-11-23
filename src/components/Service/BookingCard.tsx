import {
  BellIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CakeIcon,
  HeartIcon,
  SparklesIcon,
  SquaresPlusIcon,
  SunIcon,
  TvIcon,
  UserGroupIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

interface IBookingCard {
  name: string;
  type: string;
  description: string;
  capacity: number;
  facilities: {
    label: string;
    type: number;
  }[];
  price: string;
  images?: undefined;
}

const FACI_ICON = {
  "1": HeartIcon,
  "2": ViewfinderCircleIcon,
  "3": SparklesIcon,
  "4": BuildingOffice2Icon,
  "5": BellIcon,
  "6": CakeIcon,
  "7": SunIcon,
  "8": BuildingStorefrontIcon,
};
export function BookingCard({
  data,
}: {
  data: IBookingCard;
  onBooking: () => void;
}) {
  return (
    <Card className="w-full shadow-lg mx-auto">
      <CardHeader floated={false} color="blue-gray">
        <Image
          className="h-56 w-full object-cover"
          src={`/images/room/${data.type}/1.png`}
          width={500}
          height={500}
          alt=""
        />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-start justify-between">
          <Tooltip className="max-w-xs" content={data.name}>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-medium font-raleway w-full overflow-hidden h-7 whitespace-nowrap overflow-ellipsis"
            >
              {data.name}
            </Typography>
          </Tooltip>
        </div>
        <Tooltip className="max-w-xs" content={data.description}>
          <Typography
            className="h-20 font-raleway line-clamp-4 text-ellipsis"
            color="gray"
          >
            {data.description}
          </Typography>
        </Tooltip>
        <div className="group my-4 inline-flex flex-wrap items-center gap-3">
          <Tooltip content={`Tối đa ${data.capacity} người`}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <UserGroupIcon width={20} height={20} />
            </span>
          </Tooltip>
          {data.facilities.slice(0, 6).map((fac, index) => {
            const IconKey = fac.type.toString();
            const Icon = FACI_ICON[IconKey as keyof typeof FACI_ICON] || TvIcon;
            return (
              <Tooltip key={index} content={`${fac.label}`}>
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <Icon width={20} height={20} />
                </span>
              </Tooltip>
            );
          })}
          <Tooltip content="Và thêm nhiều tiện ích khác">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <SquaresPlusIcon width={20} height={20} />
            </span>
          </Tooltip>
        </div>

        {/* <Typography className="w-full font-raleway font-bold" color="orange">
          {data.price}/ngày
        </Typography> */}
      </CardBody>
      {/* <CardFooter className="pt-0">
        <Button
          className="bg-gradient-b-to-rt rounded-full"
          size="lg"
          onClick={onBooking}
          fullWidth={true}
        >
          Đặt phòng ngay
        </Button>
      </CardFooter> */}
    </Card>
  );
}
