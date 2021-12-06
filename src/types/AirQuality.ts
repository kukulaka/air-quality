export interface AirQuality {
  meta: MetaData;
  results: Location[];
  error: Error;
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

interface LatLong {
  latitude: number;
  longitude: number;
}

interface Measurements {
  parameter: string;
  valu: number;
  lastUpdated: string;
  unit: string;
}
export interface Location {
  location: string;
  city: string;
  country: string;
  coordinates: LatLong;
  measurements: Measurements[];
}
