import React from 'react';
import PageContainer from '../../components/PageContainer';
import { Box, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { AllCities, Error, CitiesList } from '../../../src/types/Cities';
import { City } from '../../../src/types/City';
import getCities from '../../api/getCities';
import TextHeader from './TextHeader';
import SearchAndDisplay from './SearchAndDisplay';
import AlertDisplay from '../../components/AlertDisplay';

// getting the city data in this manner and this overall component
// needs refactoring as think I can write this better....
// component is a little long for my liking

const HomeContainer: React.FC = (Props) => {
  const [allCitiesData, setAllCitiesData] = React.useState<
    AllCities | Error | undefined | null
  >(null);
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [cityList, setCityList] = React.useState<CitiesList | null>(null);

  React.useEffect(() => {
    const getCityList = async () => {
      const allData: AllCities | Error | undefined | null = await getCities();
      setAllCitiesData(allData);
    };
    if (!allCitiesData) {
      setLoading(true);
      getCityList();
      setLoading(false);
    }
  }, []);

  //especially this.
  React.useEffect(() => {
    if (allCitiesData) {
      if (allCitiesData!.results) {
        const cityArray: City[] = [];
        allCitiesData!.results.map((city) => {
          const cityObj = {
            ...city,
            label: city.city,
            value: city.city,
          };
          cityArray.push(cityObj);
        });
        const cityUpdate: CitiesList = { cities: cityArray };
        setCityList(cityUpdate);
      }
      if (allCitiesData!.error) {
        setError(true);
      }
    }
  }, [allCitiesData]);

  return (
    <PageContainer>
      <Box width="100%" height="100%" textAlign="center">
        <TextHeader />
        <Box
          paddingTop="30px"
          paddingBottom="30px"
          color="#000000"
          fontSize="16px"
          width="100%"
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
              {error ? (
                <AlertDisplay
                  status="error"
                  description="There was an error retrieving cities data"
                />
              ) : (
                <>
                  {cityList && cityList.cities.length > 0 && (
                    <SearchAndDisplay
                      label=""
                      placeholder="Type City name"
                      itemsList={cityList!.cities}
                    />
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </PageContainer>
  );
};

export default HomeContainer;
