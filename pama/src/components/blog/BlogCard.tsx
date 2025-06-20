/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export function BlogCard({ data }: any) {
  const date = new Date(data.timestamp * 1000);
  const dateString = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return (
    <a href={`/blog/${data.slug}`}>
      <Card className="max-w-full overflow-hidden group">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <Image
            alt={data.slug}
            src={data.image}
            className="h-72 w-full object-cover"
            width={300}
            height={291}
          />
        </CardHeader>
        <CardBody>
          <Typography
            className="font-raleway group-hover:underline"
            variant="h4"
            color="blue-gray"
          >
            {data.title}
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-3 font-raleway font-normal"
          >
            {data.excerpt || ""}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between pt-0">
          <div className="flex gap-5 items-center"></div>
          <Typography className="font-normal font-raleway">
            {dateString}
          </Typography>
        </CardFooter>
      </Card>
    </a>
  );
}
