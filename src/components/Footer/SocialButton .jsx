import {
    chakra,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaTwitter } from 'react-icons/fa';
  import React from 'react';

  export default function SocialButton (props) {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        //href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{props.label}</VisuallyHidden>
        <FaTwitter />
      </chakra.button>
    );
  };