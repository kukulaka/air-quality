import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Flex, Stack, Image, Text, Button, Container } from '@chakra-ui/react';
import { AiOutlinePhone } from 'react-icons/ai';

import CartNotification from '../../CartNotification';
import SearchBox from '../../SearchBox';
import CategoriesDropdown from './CategoriesDropdown';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../state/auth';
import UserBadge from '../../UserBadge';

const Header = ({ styles, fixed, showSearch }) => {
    const router = useRouter();
    const { user } = useRecoilValue(authAtom);

    const handleLoginClick = (e) => {
        e.preventDefault();
        router.push('/login');
    };

    const handleSignupClick = (e) => {
        e.preventDefault();
        router.push('/signup');
    };

    return (
        <>
            <Flex
                w='100%'
                position='fixed'
                top={fixed === true ? '0' : ''}
                left={fixed === true ? '0' : ''}
                justify='flex-start'
                align='center'
                height='75px'
                backgroundColor={styles.header?.styles?.backgroundColor}
                zIndex={700}
            >
                <Container variant='content-wrapper'>
                    <Flex align='center'>
                        <Flex align='center'>
                            <Link href='/' passHref>
                                <Image
                                    src='/images/logo-marble.svg'
                                    alt='Marble'
                                    w={{ base: '150px', xl: '200px' }}
                                    mr='30px'
                                    mt='5px'
                                    cursor='pointer'
                                />
                            </Link>

                            <CategoriesDropdown />
                        </Flex>
                        <Flex mx='25px' flex={1} minWidth='250px'>
                            {showSearch && (
                                <SearchBox
                                    placeholderText='Search our courses....'
                                    data={styles}
                                    hideButton={true}
                                    isHeader
                                />
                            )}
                        </Flex>
                        <Flex
                            ml='auto'
                            align='center'
                            display={{ base: 'none', xl: 'flex' }}
                            mx='25px'
                        >
                            <AiOutlinePhone
                                color={
                                    styles.header?.styles?.telephoneColor ??
                                    '#ffffff'
                                }
                                fontSize='22px'
                            />
                            <Text
                                color={
                                    styles.header?.styles?.telephoneColor ??
                                    '#ffffff'
                                }
                                fontSize='17px'
                                textAlign='center'
                                pl='10px'
                            >
                                0333 567 8300
                            </Text>
                        </Flex>

                        <Stack
                            isInline
                            spacing='10px'
                            ml='auto'
                            alignItems='center'
                        >
                            <CartNotification
                                color={
                                    styles.header?.styles?.telephoneColor ??
                                    '#ffffff'
                                }
                            />
                            {!user && (
                                <>
                                    <Button
                                        backgroundColor={
                                            styles.header?.styles?.button
                                                ?.backgroundColor ??
                                            'transparent'
                                        }
                                        color={
                                            styles.header?.styles?.button
                                                ?.color ?? '#fffffff'
                                        }
                                        borderColor={
                                            styles.header?.styles?.button
                                                ?.border?.color ?? '#ffffff'
                                        }
                                        variant='link'
                                        colorScheme='white'
                                        onClick={handleLoginClick}
                                        fontSize='16px'
                                        size='lg'
                                        minWidth='50px'
                                        fontWeight='normal'
                                        _hover={{
                                            borderColor: 'gray.400',
                                            color: 'gray.400',
                                        }}
                                        pr='5px'
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        backgroundColor={
                                            styles.header?.styles?.button
                                                ?.backgroundColor ??
                                            'transparent'
                                        }
                                        color={
                                            styles.header?.styles?.button
                                                ?.color ?? '#fffffff'
                                        }
                                        colorScheme='white'
                                        borderColor={
                                            styles.header?.styles?.button
                                                ?.border?.color ?? '#ffffff'
                                        }
                                        variant='outline'
                                        onClick={handleSignupClick}
                                        fontSize='16px'
                                        size='lg'
                                        minWidth='120px'
                                        _hover={{
                                            borderColor: 'gray.400',
                                            color: 'gray.400',
                                        }}
                                    >
                                        Sign up
                                    </Button>
                                </>
                            )}
                        </Stack>
                        {user && (
                            <Flex align='center' ml='auto'>
                                <UserBadge user={user} />
                            </Flex>
                        )}
                    </Flex>
                </Container>
            </Flex>
        </>
    );
};

export default Header;
