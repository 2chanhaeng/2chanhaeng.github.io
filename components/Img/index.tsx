import type React from "react";
import Image from "next/image";

export default function Img(props: React.ImgHTMLAttributes<{}>) {
  return (
    <Image
      // @ts-expect-error
      width={600}
      // @ts-expect-error
      height={400}
      style={{ width: "100vw" }}
      layout="responsive"
      alt=""
      {...props}
    />
  );
}
