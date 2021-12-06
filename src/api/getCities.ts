import request from './request';
import { AllCities, Error } from '../types/Cities';

const getCities = async (): Promise<AllCities | Error | undefined> => {
  const cityURL: string =
    '/cities?limit=100&page=1&offset=0&sort=asc&country_id=GB&order_by=city';

  return await request('GET', cityURL, {})
    .then((response) => {
      return response.data as AllCities;
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

export default getCities;
