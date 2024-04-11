import { PropsWithChildren } from "react";

export interface ExtraTWClassProps {
  className?: string;
}

export type ComponentProps = PropsWithChildren<ExtraTWClassProps>;

export interface KindCardProps {
  title: string;
  description: string;
  sublabel: string;
  kindlabel: string;
  show?: boolean;
}
