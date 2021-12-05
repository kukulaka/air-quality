export interface Cities {
  meta: metaData;
  results: city[];
}

interface metaData {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}

interface city {
  country: string;
  city: string;
  count: number;
  locations: number;
  firstUpdated: string;
  lastUpdated: string;
  parameters: string[];
}
