import React, { FC } from 'react';
import { Text, Box } from '@chakra-ui/react';


const TextHeader: FC= (Props) => {
  return (
    <>
      <Text textStyle="h1">Compare your Air</Text>
      <Text paddingTop="40px" id="header" paddingBottom="5px">
        Compare the air quality between cities in the UK.
      </Text>
      <Text>Select cities to compare using the search tool below.</Text>
    </>
  );
};

export default TextHeader;
