import request from './request';
import { Cities } from '../types/Cities';

const getCities = async (): Promise<Cities | string> => {
  const cityURL: string =
    '/v2/cities?limit=100&page=1&offset=0&sort=asc&country_id=GB&order_by=city';

  return await request('GET', cityURL, {})
    .then((response) => {
      return response.data as Cities;
    })
    .catch((error) => {
      if (error) {
        return error.message;
      }
    });
};

export default getCities;
