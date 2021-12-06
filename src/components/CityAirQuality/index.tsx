import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Location } from '../../types/AirQuality';
import DateSinceLastUpdate from './DateSinceLastUpdate';

interface Props {
  location: Location;
}

//picked first measurement for last updated as they all appear to
//contain the same value
// if different countries were being looked up, United Kingdom
// would not be hardcoded.

const CityAirQuality: React.FC<Props> = ({ location }) => {
  return (
    <Box
      width="30em"
      rounded="md"
      backgroundColor="#ffffff"
      key={`${location.location}_box`}
      padding="30px"
      alignItems="left"
      textAlign="left"
    >
      <DateSinceLastUpdate lastUpdated={location.measurements[0].lastUpdated} />
      <Text
        fontSize={['18px', '25px']}
        color="#6a0dad"
        fontWeight="bold"
        paddingBottom="5px"
      >
        {location.location}
      </Text>
      <Text fontSize={['14px', '18px']} color="#000000">
        in {location.city}, United Kingdom
      </Text>
    </Box>
  );
};

export default CityAirQuality;
