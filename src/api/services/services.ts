import queryString from 'query-string';

import { axiosApi } from '@/app/api/axios';
import { PageHomeQueryParams } from '@/app/page';

export const LOCATIONS = {
  WARSAW: "WARSAW",
  CRACOW: "CRACOW",
  WROCLAW: "WROCLAW",
  POZNAN: "POZNAN",
  GDANSK: "GDANSK",
} as const;

export type TLocation = (typeof LOCATIONS)[keyof typeof LOCATIONS];

export const BRAND = {
  CONSTRUCTION: "CONSTRUCTION",
  ELECTRICITY: "ELECTRICITY",
  IT: "IT",
  PRODUCTION: "PRODUCTION",
  TRANSPORT: "TRANSPORT",
  MECHANICS: "MECHANICS",
  BIOMEDICAL: "BIOMEDICAL",
  AUTOMATION: "AUTOMATION",
  OTHER: "OTHER",
} as const;

type TMapCoordinates = { lat: number; lng: number };

export type TBrand = (typeof BRAND)[keyof typeof BRAND];

export type TService = {
  id: string;
  name: string;
  location: TLocation;
  minSalary: number;
  maxSalary: number;
  logoUrl: string;
  brand: TBrand;
  company: string;
  map: TMapCoordinates;
};

const jsonServerMaper = ({
  minSalary,
  maxSalary,
  ...rest
}: PageHomeQueryParams) => ({
  ...rest,
  minSalary_gte: minSalary,
  maxSalary_lte: maxSalary,
});

export async function getProjects(params: PageHomeQueryParams) {
  const jsonServerValue = jsonServerMaper(params);
  console.log(jsonServerValue);
  const stringParams = queryString.stringify(jsonServerValue);

  const { NEXT_PUBLIC_BACKEND_URL = "http://localhost:3004/services" } =
    process.env;
  const { data } = await axiosApi.get<TService[]>(
    `${NEXT_PUBLIC_BACKEND_URL}?${stringParams}`
  );

  return data;
}
