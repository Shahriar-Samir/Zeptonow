import { SVGProps } from "react";
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Ensure `id` exists on the session user
      email: string; // Ensure `email` exists
    };
  }

  interface User {
    id: string; // Ensure `id` exists for user
    email: string; // Ensure `email` exists for user
  }
}
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type categoryType = {
  link: string;
  img: string;
};

export type subCategoryType = {
  path: string;
  img: string;
  title: string;
};

export type ProductsType = {
  name: string;
  img1: string;
  price: number | string;
  discountedPrice: number | string;
  unit: string;
  discount: number;
};

export type ProductType = {
  name: string | null;
  unit?: string | null;
  price?: number;
  discountedPrice?: number;
  discount?: number;
  model?: string | null;
  subcategory?: string | null;
  category?: string | null;
  img1?: string | null;
  description?: string | null;
  origin?: string | null;
  life?: string | null;
  manufacturer?: string | null;
  FSSAILicense?: string | null | number;
  manufacturerAddress?: string | null;
  ingredients?: string | null;
  nutritionalInfo?: string | null;
};

export type SuggestionsType = {
  components: { _normalized_city: string };
  formatted: string;
  geometry: { lat: string; lng: string };
};

export interface CartItem {
  name: string | null;
  unit?: string | null;
  price?: number;
  discountedPrice?: number;
  discount?: number;
  model?: string | null;
  subcategory?: string | null;
  category?: string | null;
  img1?: string | null;
  description?: string | null;
  origin?: string | null;
  life?: string | null;
  manufacturer?: string | null;
  FSSAILicense?: string | null | number;
  manufacturerAddress?: string | null;
  ingredients?: string | null;
  nutritionalInfo?: string | null;
  quantity: number;
}

export interface CartState {
  list: CartItem[];
  total: number;
}
