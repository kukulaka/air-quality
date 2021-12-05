import React, { useContext } from 'react';
import {
    Flex,
    Image,
    Icon,
    useDisclosure,
    Slide,
    Text,
    Stack,
    Collapse,
    Divider,
    Button,
    IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { CgMenu } from 'react-icons/cg';
import { APIContext } from '../../../context/APIContext';
import { useRouter } from 'next/router';
import { FiChevronDown, FiChevronUp, FiPhoneCall } from 'react-icons/fi';
import SearchBox from '../../SearchBox';
import CartNotification from '../../CartNotification';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../state/auth';
import UserBadge from '../../UserBadge';
import { MdClose } from 'react-icons/md';

const MobileHeader = ({ styles }) => {
    const { user } = useRecoilValue(authAtom);
    const { isOpen, onToggle, onClose } = useDisclosure();
    const { providers } = useContext(APIContext);
    const router = useRouter();

    return (
        <Flex direction='column' w='100%'>
            <Flex
                justify='space-between'
                backgroundColor={styles.header?.styles?.backgroundColor}
                pos='fixed'
                top={0}
                left={0}
                w='100%'
                h='55px'
                align='center'
                px='10px'
                zIndex={9001}
            >
                <Flex align='center'>
                    <Icon
                        color='white'
                        fontSize='26px'
                        mt='-10px'
                        onClick={() => onToggle()}
                    >
                        {isOpen ? <MdClose /> : <CgMenu />}
                    </Icon>
                </Flex>
                <Flex justify='center' flex={1} onClick={() => onClose()}>
                    <Link href='/' passHref>
                        <Image
                            src='/images/logo-marble.svg'
                            alt='Marble'
                            w='130px'
                            cursor='pointer'
                        />
                    </Link>
                </Flex>
                <IconButton
                    variant='link'
                    color='white'
                    fontSize='22px'
                    mr='10px'
                    as='a'
                    href='tel:0333 5678 300'
                >
                    <FiPhoneCall />
                </IconButton>
                <Flex onClick={() => onClose()} ml='auto' w='auto'>
                    <CartNotification color='white' />
                </Flex>
                {user && (
                    <Flex align='center' justify='center' ml='auto'>
                        <UserBadge user={user} />
                    </Flex>
                )}
            </Flex>
            <Slide
                direction='top'
                in={isOpen}
                style={{ zIndex: 9000, position: 'absolute' }}
                maxHeight='100vh'
                overflowY='hidden'
                overflowY='scroll'
            >
                <Flex
                    direction='column'
                    minHeight='100vh'
                    pb='100px'
                    pt='40px'
                    bg={styles.header?.styles?.backgroundColor}
                    overflowY='scroll'
                >
                    <Flex align='center' px='15px' mb='15px'>
                        {!user && (
                            <Stack
                                isInline
                                align='center'
                                spacing='15px'
                                p='15px'
                                mx='auto'
                            >
                                <Link href='/login' passHref>
                                    <Button
                                        onClick={() => onClose()}
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
                                </Link>
                                <Link href='/signup' passHref>
                                    <Button
                                        onClick={() => onClose()}
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
                                </Link>
                            </Stack>
                        )}
                    </Flex>
                    <Divider borderColor='whiteAlpha.400' />
                    <Flex p='10px'>
                        <SearchBox
                            placeholderText='Search our courses....'
                            data={styles}
                            hideButton={true}
                        />
                    </Flex>
                    <Divider borderColor='whiteAlpha.400' mb='20px' />

                    <Stack mb='20px'>
                        {providers.map((provider, i) => (
                            <DropdownItem
                                key={`mobile-provider-${i}`}
                                provider={provider}
                                styles={styles}
                                closeMenu={onClose}
                            />
                        ))}
                    </Stack>
                    <Divider borderColor='whiteAlpha.400' />
                    <Flex p='15px' align='center' color='white'>
                        <Text opacity={0.5} pr='15px'>
                            <FiPhoneCall fontSize='30px' />
                        </Text>
                        <Flex direction='column'>
                            <Text opacity={0.5}>Contact our team</Text>
                            <Text
                                as='a'
                                href='tel:0333 567 8300'
                                fontSize='24px'
                                fontWeight='bold'
                            >
                                0333 567 8300
                            </Text>
                        </Flex>
                    </Flex>
                    <Divider borderColor='whiteAlpha.400' />
                    <Stack mb='20px' p='15px' spacing='15px'>
                        <Link passHref href='/about'>
                            <Text
                                as='a'
                                color='white'
                                fontSize='18px'
                                opacity={0.6}
                                onClick={() => onClose()}
                            >
                                About Us
                            </Text>
                        </Link>
                        <Link passHref href='/contact'>
                            <Text
                                as='a'
                                color='white'
                                fontSize='18px'
                                opacity={0.6}
                                onClick={() => onClose()}
                            >
                                Contact Us
                            </Text>
                        </Link>
                    </Stack>
                </Flex>
            </Slide>
        </Flex>
    );
};

const DropdownItem = ({ provider, closeMenu }) => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const router = useRouter();

    const newRoute = () => {
        closeMenu();
        router.push({
            pathname: `/courses/${provider.slug}`,
            query: { category: provider.slug },
        });
    };
    return (
        <Flex direction='column' w='100%' px='10px'>
            <Flex
                as='a'
                direction='column'
                onClick={() => onToggle()}
                color='white'
                px='15px'
                py='10px'
                bg='whiteAlpha.200'
                rounded='lg'
                fontSize='17px'
                fontWeight='bold'
            >
                <Flex align='center'>
                    {provider.name} Courses
                    <Text ml='auto'>
                        {isOpen ? (
                            <FiChevronUp fontSize='30px' />
                        ) : (
                            <FiChevronDown fontSize='30px' />
                        )}
                    </Text>
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                    <Stack my='15px' spacing='10px'>
                        <Text
                            fontSize='15px'
                            as='a'
                            opacity={0.8}
                            rounded='md'
                            fontWeight='normal'
                            onClick={() => newRoute()}
                        >
                            View all {provider.name} courses
                        </Text>

                        {provider.courses.map((course, i) => (
                            <Link
                                href={`/courses/${provider.slug}/${course.slug}`}
                                passHref
                            >
                                <Text
                                    fontSize='15px'
                                    key={`course-${i}`}
                                    as='a'
                                    opacity={0.8}
                                    rounded='md'
                                    fontWeight='normal'
                                    onClick={() => closeMenu()}
                                >
                                    {course.name}
                                </Text>
                            </Link>
                        ))}
                    </Stack>
                </Collapse>
            </Flex>
        </Flex>
    );
};

export default MobileHeader;
