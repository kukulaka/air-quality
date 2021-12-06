import React from 'react';
import { Text } from '@chakra-ui/react';
import { Measurements } from '../../types/AirQuality';

interface Props {
  measurements: Measurements[];
}

const AirQualityReadings: React.FC<Props> = ({ measurements }) => {
  const mesurementsList = () => {
    let itemslist: string = '';
    if (measurements && measurements.length > 0) {
      measurements.map((item, i, arr) => {
        itemslist = `${itemslist} ${item.parameter.toUpperCase()}: ${
          item.value
        }${i != arr.length - 1 ? ',' : ''}`;
      });
      return itemslist;
    } else return '';
  };

  return (
    <>
      {measurements && measurements.length > 0 && (
        <Text fontWeight="bold" paddingBottom="3px">
          Values: {mesurementsList()}
        </Text>
      )}
    </>
  );
};

export default AirQualityReadings;
