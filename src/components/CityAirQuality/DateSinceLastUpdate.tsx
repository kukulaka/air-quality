import React from 'react';
import { Text } from '@chakra-ui/react';
import moment from 'moment';

interface Props {
  lastUpdated: string;
}

const DateSinceLastUpdate: React.FC<Props> = ({ lastUpdated }) => {
  const newDate = new Date(lastUpdated);
  const differenceString = moment(newDate).fromNow();

  return (
    <Text
      textTransform="uppercase"
      fontWeight="bold"
      fontSize={['14px', '14px']}
      paddingBottom="3px"
    >
      Updated {differenceString}
    </Text>
  );
};

export default DateSinceLastUpdate;
