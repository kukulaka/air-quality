import React from 'react';
import Location from './Location';
import { Grid, Box } from '@chakra-ui/react';
import { Ul, Li, SearchBarLink } from '../../../common';
import Link from 'next/link';

const Locations = ({ locations }) => {
    return (
        <>
            <Grid
                templateColumns={[
                    '1fr',
                    '1fr 1fr',
                    '1fr 3fr 1fr 1fr 1fr 1fr',
                    '1fr 3fr 1fr 1fr 1fr 1fr',
                ]}
                gap='24px'
                textAlign={['center', 'center', 'left', 'left']}
                width='100%'
            >
                <Box width='100%'>
                    <Ul margin='0'>
                        <Li padding='5px 0 5px 0'>
                            <Link href='/about'>
                                <SearchBarLink
                                    color='#ffffff'
                                    fontSize='16px'
                                    fontWeight='500'
                                    lineHeight='28px'
                                    font='arboria'
                                >
                                    About
                                </SearchBarLink>
                            </Link>
                        </Li>
                        <Li padding='5px 0 5px 0'>
                            <Link href='/jobs'>
                                <SearchBarLink
                                    color='#ffffff'
                                    fontSize='16px'
                                    fontWeight='500'
                                    lineHeight='28px'
                                    font='arboria'
                                >
                                    Jobs
                                </SearchBarLink>
                            </Link>
                        </Li> 
                        <Li padding='5px 0 5px 0'>
                            <Link href='/contact'>
                                <SearchBarLink
                                    color='#ffffff'
                                    fontSize='16px'
                                    fontWeight='500'
                                    lineHeight='28px'
                                    font='arboria'
                                >
                                    Contact
                                </SearchBarLink>
                            </Link>
                        </Li>
                        <Li padding='5px 0 5px 0'>
                            <Link href='/blog'>
                                <SearchBarLink
                                    color='#ffffff'
                                    fontSize='16px'
                                    fontWeight='500'
                                    lineHeight='28px'
                                    font='arboria'
                                >
                                    Blog
                                </SearchBarLink>
                            </Link>
                        </Li>
                    </Ul>
                </Box>
                <Box
                    gridColumn={['span 1', 'span 1', 'span 2', 'span 2']}
                    width='100%'
                >
                    <Ul>
                        <Li padding='5px 0 5px 0'>
                            <Link href='/downloads'>
                                <SearchBarLink
                                    color='#ffffff'
                                    fontSize='16px'
                                    fontWeight='500'
                                    lineHeight='28px'
                                    font='arboria'
                                >
                                    Downloads
                                </SearchBarLink>
                            </Link>
                        </Li>
                        <Li padding='5px 0 5px 0'>
                            <Link href='/terms'>
                                <SearchBarLink
                                    color='#ffffff'
                                    fontSize='16px'
                                    fontWeight='500'
                                    lineHeight='28px'
                                    font='arboria'
                                >
                                    Terms and conditions
                                </SearchBarLink>
                            </Link>
                        </Li>
                    </Ul>
                </Box>
                {/* <Box width='100%'>
          <Ul>
            {locations
              .filter(
                (location) => location.location_type.location_type === "HSA"
              )
              .map((location, key) => (
                <Location key={key} location={location} />
              ))}
          </Ul>
        </Box> */}
                {/* <Box>
          <Ul>
            {locations
              .filter(
                (location) => location.location_type.location_type === "SSSTS"
              )
              .map((location, key) => (
                <Location key={key} location={location} />
              ))}
          </Ul>
        </Box>
        <Box>
          <Ul>
            {locations
              .filter(
                (location) => location.location_type.location_type === "SMSTS"
              )
              .map((location, key) => (
                <Location key={key} location={location} />
              ))}
          </Ul>
        </Box> */}
            </Grid>
        </>
    );
};

export default Locations;
