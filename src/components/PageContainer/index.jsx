import React from 'react';
import { Flex, Box, useMediaQuery } from '@chakra-ui/react';
import Meta from 'components/Meta';
import Footer from './Footer';
import Header from './Header';
import Loader from 'components/Loader';

import { themeSelector } from '../../state/themes';
import { useRecoilValue } from 'recoil';

import MobileHeader from './MobileHeader';

const PageContainer = (props) => {
    const [isMobile] = useMediaQuery(`(max-width: 1000px)`);

    const styles = useRecoilValue(themeSelector);

    const {
        loading,
        title,
        description,
        transparentHeader,
        fixed,
        showSearch,
        bg,
        metaTitle,
    } = props;

    return (
        <>
            <Meta
                title={metaTitle ? metaTitle : title}
                description={description}
            />
            <Flex
                direction='column'
                position='relative'
                bg={
                    bg
                        ? bg
                        : styles.backgroundColor
                        ? styles.backgroundColor
                        : 'white'
                }
                minHeight='100vh'
            >
                <header>
                    {!isMobile && (
                        <Header
                            transparentHeader={transparentHeader}
                            styles={styles}
                            fixed={fixed}
                            showSearch={showSearch}
                        />
                    )}
                    {isMobile && <MobileHeader styles={styles} />}
                </header>

                {loading ? (
                    <Loader />
                ) : (
                    <Box
                        pt={{ base: '50px', lg: '70px' }}
                        minHeight='calc(100vh - 300px)'
                    >
                        {props.children}
                    </Box>
                )}

                <Footer />
            </Flex>
        </>
    );
};

export default PageContainer;
