import React from 'react';
import PageContainer from '../../components/PageContainer';
import { Box, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { AllCities, Error, CitiesList } from '../../../src/types/Cities';
import { City } from '../../../src/types/City';
import getCities from '../../api/getCities';
import TextHeader from './TextHeader';
import SearchAndDisplay from './SearchAndDisplay';


const HomeContainer: React.FC = (Props) => {
  const [allCitiesData, setAllCitiesData] = React.useState<Promise<
    AllCities | Error | undefined | null
  > | null>(null);
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [cityList, setCityList] = React.useState<CitiesList | null>(null);

  React.useEffect(() => {
    if (!allCitiesData) {
      setLoading(true);
      const allData = getCities();
      setAllCitiesData(allData);
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
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
                <Alert status="error">
                  <AlertIcon />
                  There was an error retrieving cities data
                </Alert>
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
