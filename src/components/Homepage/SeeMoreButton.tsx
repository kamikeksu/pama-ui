import { Button } from "@material-tailwind/react";

interface ISeeMoreButton {
  goto?: string;
}
export function SeeMoreButton({ goto }: ISeeMoreButton) {
  return goto ? (
    <a href={goto}>
      <Button
        variant="outlined"
        size="md"
        className="font-raleway rounded-full max-w-36 mx-auto border-white/50 border  text-white"
      >
        Xem thêm
      </Button>
    </a>
  ) : (
    <Button
      variant="outlined"
      size="md"
      className="rounded-full font-raleway max-w-36 mx-auto border-white/50 border text-white"
    >
      Xem thêm
    </Button>
  );
}
