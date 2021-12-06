import React from 'react';
import { City } from '../../types/City';
import { Grid, Box, Spinner } from '@chakra-ui/react';
import { AirQuality, Error } from '../../types/AirQuality';
import getAirQualityByCity from '../../api/getAirQualityByCity';
import AlertDisplay from '../AlertDisplay';
import CityAirQuality from '../CityAirQuality';

interface Props {
  selectedItems: City[];
}

// this component is a little long and if I had time
// I would refactor

const ResultsLayout: React.FC<Props> = ({ selectedItems }) => {
  const [allLocations, setAllLocations] = React.useState<
    AirQuality | Error | undefined | null
  >(null);
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleRemoveLocation = (location: string) => {
    console.log('got here');
    //delete from results array and replace
    if (allLocations && allLocations.results) {
      const resultsClone = [...allLocations.results];
      const resultsArray = resultsClone.filter(function (obj) {
        return obj.location !== location;
      });

      setAllLocations({ ...allLocations, results: resultsArray });
    }
  };

  React.useEffect(() => {
    if (selectedItems && selectedItems.length > 0) {
      const cityList = () => {
        const start: string = '&';
        let city = '';
        selectedItems.map((cityData) => {
          city = `${city}city=${cityData.city}&`;
        });
        const cityConcact: string = `${start}${city}`;

        return cityConcact;
      };

      const getLocationsByCity = async () => {
        const allData: AirQuality | Error | undefined | null =
          await getAirQualityByCity(cityList());
        setAllLocations(allData);
      };

      setLoading(true);
      getLocationsByCity();
      setLoading(false);
    }
  }, [selectedItems]);

  React.useEffect(() => {
    if (allLocations) {
      if (allLocations!.error) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [allLocations]);
  return (
    <Box width="100%">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <AlertDisplay
              status="error"
              description="There was an error retrieving location data"
            />
          ) : (
            <Grid
              templateColumns={['1fr', 'repeat(2, 1fr)']}
              gap={6}
              paddingTop="20px"
              width="100%"
            >
              {allLocations &&
                allLocations!.results! &&
                allLocations.results.length > 0 && (
                  <>
                    {allLocations!.results!.map((location) => (
                      <CityAirQuality
                        location={location}
                        handleRemoveLocation={handleRemoveLocation}
                      />
                    ))}
                  </>
                )}
            </Grid>
          )}
        </>
      )}
    </Box>
  );
};

export default ResultsLayout;
