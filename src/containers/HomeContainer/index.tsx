import React, { FC, useEffect, useState } from 'react';
import PageContainer from '../../components/PageContainer';
import {  Box, Spinner } from '@chakra-ui/react';
import { AllCities, Error, CitiesList } from '../../../src/types/Cities';
import { City } from '../../../src/types/City';
import getCities from '../../api/getCities';
import TextHeader from './TextHeader';
import SearchAndDisplay from './SearchAndDisplay'
import SearchAnDisplay from './SearchAndDisplay';
interface Props {}

const HomeContainer: FC<Props> = (Props) => {
  const [allCitiesData, setAllCitiesData] = useState<Promise<
    AllCities | Error | undefined | null
  > | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [cityList, setCityList] = useState<CitiesList | null>(null);

  useEffect(() => {
    if (!allCitiesData) {
      setLoading(true);
      const allData = getCities();
      setAllCitiesData(allData);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    allCitiesData?.then((response) => {
      if (response!.results) {
        const cityArray: City[] = [];
        response!.results.map((city) => {
          const cityObj = {
            ...city,
            label: city.city,
            value: city.city,
          };
          cityArray.push(cityObj);
        });
        const cityUpdate: CitiesList = { cities: cityArray };
        setCityList(cityUpdate);
        console.log(response!.results);
      }
      if (response!.error) {
        setError(true);
      }
    });
  }, [allCitiesData]);

  return (
    <PageContainer>
      <Box width="100%" height="100%" textAlign="center">
        <TextHeader />
        <Box paddingTop="30px" paddingBottom="30px" color="#000000" fontSize="16px" width="100%">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {cityList && cityList.cities.length > 0 && (
                <SearchAnDisplay
                  label="Search City"
                  placeholder="Search City"
                  itemsList={cityList!.cities}
                />
              )}
            </>
          )}
        </Box>
      </Box>
    </PageContainer>
  );
};

export default HomeContainer;
