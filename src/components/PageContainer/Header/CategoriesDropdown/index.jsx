import React from 'react';
import { Flex } from '@chakra-ui/react';
import CustomOption from './CustomOption';
import { HiOutlineChevronDown } from 'react-icons/hi';
import {
  useDisclosure,
  ScaleFade,
  Button,
  useOutsideClick,
} from '@chakra-ui/react';

const CategoriesDropdown = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const ref = React.useRef();
  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  return (
    <div ref={ref}>
      <Button
        variant='ghost'
        _focus={{ outline: 0 }}
        _hover={{ bg: 'whiteAlpha.100' }}
        color='white'
        onClick={() => onToggle()}
        fontSize='16px'
        rightIcon={<HiOutlineChevronDown fontSize='20px' />}
      >
        Course Categories
      </Button>
      {isOpen && (
        <Flex w='90vw' pos='fixed' left='5%' top='70px'>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Flex
              w='90vw'
              bg='white'
              rounded='lg'
              shadow='lg'
              maxHeight='85vh'
              overflowY='auto'
            >
              <CustomOption onClose={onClose} />
            </Flex>
          </ScaleFade>
        </Flex>
      )}
    </div>
  );
};

export default CategoriesDropdown;
