import React from 'react';
import { Box, Text, Icon, Button } from '@chakra-ui/react';
import { Location } from '../../types/AirQuality';
import DateSinceLastUpdate from './DateSinceLastUpdate';
import AirQualityReadings from './AirQualityReadings';
import { AiOutlineClose } from 'react-icons/ai';

//picked first measurement for last updated as they all appear to
//contain the same value
// if different countries were being looked up, United Kingdom
// would not be hardcoded.
// as cities can have multiple locations, the cross only removes
// that specific location
interface Props {
  location: Location;
  handleRemoveLocation(location?: string): any;
}

const CityAirQuality: React.FC<Props> = ({
  location,
  handleRemoveLocation,
}) => (
  <Box
    width="100%"
    rounded="md"
    backgroundColor="#ffffff"
    key={`${location.location}_box`}
    padding="10px"
    alignItems="left"
    textAlign="left"
  >
    <Box
      width="100%"
      alignItems="right"
      textAlign="right"
      fontSize="30px"
      fontWeight="bold"
    >
      <Icon
        as={AiOutlineClose}
        cursor="pointer"
        onClick={() => handleRemoveLocation(location.location)}
      />
    </Box>
    <Box
      with="100%"
      paddingLeft="15px"
      paddingRight="15px"
      paddingTop="5px"
      paddingBottom="15px"
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
      <Text fontSize={['14px', '18px']} color="#000000" paddingBottom="3px">
        in {location.city}, United Kingdom
      </Text>
      <AirQualityReadings measurements={location.measurements} />
    </Box>
  </Box>
);

export default CityAirQuality;
