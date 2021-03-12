import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import React from 'react';    
import Logo from './Logo';
import SocialButton from './SocialButton '

export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text>© 2021 Naak' eProcurement. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <Text>
              Sobre Naak'
            </Text>
            <Text>
              Carreras
            </Text>
          </Stack>
        </Container>
      </Box>
    );
  }