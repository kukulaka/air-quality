import React, { FC } from 'react';

import { City } from '../../types/City';
import { Grid, Box } from '@chakra-ui/react';

interface Props {
  selectedItems: City[];
}

const ResultsLayout: FC<Props> = ({ selectedItems }) => {
  return (
    <Grid
      templateColumns={['1fr', 'repeat(3, 1fr)']}
      gap={6}
      paddingTop="20px"
      width="100%"
    >
      <Box>cheese</Box>
      <Box>cheese</Box>
      <Box>cheese</Box>
    </Grid>
  );
};

export default ResultsLayout;
