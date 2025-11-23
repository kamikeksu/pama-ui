import { Typography } from "@material-tailwind/react";

interface IAboutInforItem {
  data: {
    raw: {
      title: string;
      description: string;
    };
    en: {
      title: string;
      description: string;
    };
  };
}
export function AboutInforItem({ data }: IAboutInforItem) {
  const { raw, en } = data;
  return (
    <div className="w-full text-center mt-4 bg-black/60 p-4 rounded-lg">
      <Typography
        variant="h3"
        color="white"
        className="font-raleway mb-4 text-highlight text-4xl lg:text-5xl"
      >
        {raw.title}
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="font-raleway mb-8 text-lg opacity-80"
      >
        {raw.description}
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="font-raleway mb-8 text-lg opacity-80"
      >
        {en.description}
      </Typography>
    </div>
  );
}
