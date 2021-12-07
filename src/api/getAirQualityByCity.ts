import request from './request';
import { AirQuality, Error } from '../types/AirQuality';

const getAirQualityByCity = async (
  cities: string
): Promise<AirQuality | Error | undefined> => {
  console.log('cities', cities);
  const airValueURL: string = `/latest?limit=100&page=1&offset=0&sort=asc&radius=10&country_id=GB${cities}&order_by=lastUpdated&dumpRaw=false`;

  return await request('GET', airValueURL, {})
    .then((response) => {
      return response.data as AirQuality;
    })
    .catch((error) => {
      if (error) {
        return {
          error: true,
          errorMsg: error.message,
          meta: null,
          results: null,
        } as Error;
      }
    });
};

export default getAirQualityByCity;
