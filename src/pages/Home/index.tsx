import React, { FC } from 'react';
import PageContainer from '../../components/PageContainer';
import { Text, Box } from '@chakra-ui/react';

interface Props {}

const Home: FC<Props> = (Props) => {
  return (
    <PageContainer>
      <Box width="100%" height="100%" textAlign="center">
        <Text textStyle="h1">Compare your Air</Text>
        <Text paddingTop="40px" id="header" paddingBottom="5px">
          Compare the air quality between cities in the UK.
        </Text>
        <Text>Select cities to compare using the search tool below.</Text>
      </Box>
    </PageContainer>
  );
};

export default Home;
