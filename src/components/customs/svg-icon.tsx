import { Icons } from "@/components/icons/icons";
import React from "react";

interface SVGIconProps {
  name: keyof typeof Icons;
  className?: string;
  width?: number;
  height?: number;
}

export default function SVGIcon({ name, className, width = 24, height = 24, ...props }: SVGIconProps) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return React.cloneElement(IconComponent, {
    className,
    width,
    height,
    ...props,
  });
}
