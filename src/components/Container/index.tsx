import React from "react";

import type { ComponentProps } from "@/types";

export default function Container({ children, className }: ComponentProps) {
  return <div className={`max-w-[1920px] h-full w-full mx-auto ${className}`}>{children}</div>;
}
