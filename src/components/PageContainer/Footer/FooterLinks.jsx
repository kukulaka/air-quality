import React, { useContext } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Locations from './Locations';
import { APIContext } from '../../../context/APIContext';

const FooterLinks = () => {
    const { locations, loading } = useContext(APIContext);

    return (
        <>
            <Flex direction='column' width='100%'>
                <Box width='100%'>
                    {!loading && locations.length > 0 && (
                        <Locations locations={locations} />
                    )}
                </Box>
            </Flex>
        </>
    );
};

export default FooterLinks;
