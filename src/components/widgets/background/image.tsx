// export default function Image({ ...props }) {
//   return <img className="w-52 h-52 rounded-full" {...props} />;
// }
import Image from "next/image";

interface imagemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

export default function Imagem({
  src,
  alt,
  width,
  height,
  className,
}: imagemProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
