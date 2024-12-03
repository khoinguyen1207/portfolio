import Image from "next/image";
import React from "react";

interface IconProps {
  name: "logo";
  width?: number;
  height?: number;
}

const icons = [
  {
    name: "logo",
    path: "/icons/logo.png",
  },
];

export default function Icon({ name, width = 24, height = 24 }: IconProps) {
  return <Image src={icons.find((item) => item.name === name)?.path || ""} width={width} height={height} alt="" />;
}
