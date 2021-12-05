import React, { FC } from 'react';
import { Flex, Box } from '@chakra-ui/react';

interface Props {
  children: JSX.Element;
}

const PageContainer: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Flex
        direction="column"
        position="relative"
        minHeight="100vh"
        bgGradient="linear(to-l, #0da2ff, #6a0dad)"
        align="center"
        justifyContent="center"
      >
        <Box with="100%" padding="50px">
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageContainer;
