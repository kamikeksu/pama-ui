import {
  Card,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
interface IImageWithPreviewModal {
  thumbnailURL: string;
  originalURL?: string;
  title?: string;
  mainImageClassName?: string;
}

export function ImageWithPreviewModal({
  thumbnailURL,
  originalURL,
  mainImageClassName,
  title,
}: IImageWithPreviewModal) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Card
        className="h-auto w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <Image
          className={`${
            mainImageClassName || "h-full w-full object-cover object-center"
          } shadow-lg`}
          src={thumbnailURL}
          width={500}
          height={500}
          alt=""
        />
      </Card>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3 justify-center w-full">
            {title || "Preview image"}
          </div>
        </DialogHeader>
        <DialogBody>
          <Image
            alt="nature"
            className="h-auto w-full rounded-lg object-cover object-center"
            src={originalURL || thumbnailURL}
            width={500}
            height={500}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}
export default ImageWithPreviewModal;
