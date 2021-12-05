import React, { useContext } from 'react';

import { APIContext } from '../../../../context/APIContext';
import { FiChevronRight } from 'react-icons/fi';
import { Stack, Grid, Flex, Text, Icon } from '@chakra-ui/react';
import Link from 'next/link';

const CustomOption = ({ onClose }) => {
  const { providers } = useContext(APIContext);

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
      gap='15px'
      w='100%'
      p='10px'
    >
      {providers.map((parent, index) => (
        <Stack
          spacing='2px'
          key={`provider-${index}`}
          bg='blackAlpha.100'
          rounded='md'
          py='15px'
          px='20px'
          flex={1}
        >
          <Link
            passHref
            href={`/courses/${parent.slug}?category=${parent.slug}`}
          >
            <Text
              as='a'
              fontWeight='bold'
              fontSize={{ base: '15px', xl: '18px' }}
              pb={{ base: '5px', xl: '10px' }}
            >
              {parent.name} courses
            </Text>
          </Link>

          {parent.courses.length > 0 &&
            parent.courses.map((child, index) => (
              <Flex
                key={`course-${index}`}
                _hover={{ cursor: 'pointer' }}
                align='center'
              >
                <Icon as={FiChevronRight} fontSize='11px' color='gray.500' />
                <Link passHref href={`/courses/${parent.slug}/${child.slug}`}>
                  <Text
                    as='a'
                    fontSize={{ base: '13px', xl: '15px' }}
                    onClick={() => onClose()}
                  >
                    {child.name}
                  </Text>
                </Link>
              </Flex>
            ))}
          <Link
            passHref
            href={`/courses/${parent.slug}?category=${parent.slug}`}
          >
            <Text
              fontWeight='bold'
              color='marbleBlue'
              as='a'
              fontSize={{ base: '13px', xl: '15px' }}
              onClick={() => onClose()}
            >
              View all {parent.name} courses
            </Text>
          </Link>
        </Stack>
      ))}
    </Grid>
  );
};

export default CustomOption;
