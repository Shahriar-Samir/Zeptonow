import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type categoryType = {
  link: string;
  img: string;
};

export type subCategoryType = {
  path: string,
  img:string,
  title:string
}

