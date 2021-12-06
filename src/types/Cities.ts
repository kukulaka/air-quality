import { City } from './City';
export interface AllCities {
  meta: MetaData;
  results: City[];
  error: Error;
}

export interface CitiesList {
  cities: City[];
}

export interface Error {
  meta: null;
  results: null;
  error: boolean;
  errorMsg: string | null;
}

interface MetaData {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}
