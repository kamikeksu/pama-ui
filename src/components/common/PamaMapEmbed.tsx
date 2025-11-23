interface GoogleMapIframeProps {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  allowFullScreen?: boolean;
}
export default function PamaMapEmbed(config: GoogleMapIframeProps) {
  const {
    width = "800",
    height = "600",
    style,
    allowFullScreen = true,
  } = config;
  return (
    <iframe
      className="rounded-xl shadow-xl"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3834.199673451956!2d108.245729!3d16.055125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177acd3811a3%3A0xc261e77152de9217!2sP%C4%80MA%20Boutique%20Hotel!5e0!3m2!1svi!2s!4v1735547644599!5m2!1svi!2s"
      width={width}
      height={height}
      style={style}
      allowFullScreen={allowFullScreen}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
