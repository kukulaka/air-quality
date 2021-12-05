import React from 'react';
import { Flex, Box, Grid, Text, Image, Container } from '@chakra-ui/react';
import FooterLinks from './FooterLinks';
import { FaFacebookF } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <Flex
        bg='footerBodyBg'
        direction='row'
        width='100%'
        align='flex-start'
        justify='flex-start'
        wrap='nowrap'
        paddingTop='38px'
        paddingBottom='38px'
      >
        <Container variant='content-wrapper'>
          <FooterLinks />
        </Container>
      </Flex>
      <Grid
        templateColumns='1fr'
        gap='10px'
        width='100%'
        backgroundColor='#030E19'
        alignItems='center'
        justifyContent='center'
      >
        <Container variant='content-wrapper'>
          <Flex direction='column' width='100%' wrap='nowrap'>
            <Grid
              templateColumns={['1fr', '1fr', '1fr 1fr 1fr', '1fr 1fr 1fr']}
              py='32px'
            >
              <Flex w='100%' justify={{ base: 'center', lg: 'flex-start' }}>
                <Image
                  src='/images/logo-marble.svg'
                  w='150px'
                  mb={{ base: '20px', lg: 0 }}
                />
              </Flex>
              <Flex justifyContent='center'>
                <Box p='7px'>
                  <Link href='https://www.facebook.com/marbletraining'>
                    <FaFacebookF color='white' size='20px' />
                  </Link>
                </Box>
                <Box p='7px'>
                  <Link href='https://twitter.com/marble_training'>
                    <ImTwitter color='white' size='20px' />
                  </Link>
                </Box>
                <Box p='7px'>
                  <Link href='https://www.linkedin.com/company/loxbrook-associates-ltd/'>
                    <AiFillLinkedin color='white' size='20px' />
                  </Link>
                </Box>
                <Box p='7px'>
                  <Link href='https://www.youtube.com/channel/UCNOVToVhAfUMrQqLDbb26Cg'>
                    <ImYoutube color='white' size='20px' />
                  </Link>
                </Box>
              </Flex>
              <Text
                fontSize='12px'
                color='#ffffff'
                verticalAlign='middle'
                textAlign={{ base: 'center', lg: 'right' }}
                lineHeight='20px'
                fontWeight='500'
              >
                Copyright &copy; {currentYear} Marble Training - All rights
                reserved
              </Text>
            </Grid>
          </Flex>
        </Container>
      </Grid>
    </footer>
  );
};

export default Footer;
