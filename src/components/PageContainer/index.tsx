import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

interface Props {
  children: JSX.Element;
}

const PageContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Flex
        direction="column"
        position="relative"
        minHeight="100vh"
        bgGradient="linear(to-r,  #6a0dad, #0da2ff)"
        align="center"
        justifyContent="center"
        overflow="auto"
      >
        <Box with="100%" padding="20px">
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageContainer;
