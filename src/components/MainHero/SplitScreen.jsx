import React from 'react'
import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import imgage from '../../images/Digital-Procurement-Bank-SIPMM-1280x720.jpg'
import Loader from '../layout/Loader';

  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                mb={5}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Naak' eProcurement
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Conecta y agiliza tus operaciones de compras y pagos.
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                Enlances directos con los proveedores, cotiza y encuentra el mejor precio más rápido que nunca.
                Comienza a enfocarte en el crecimiento de tu negocio.
            </Text>
            <Stack d='flex' direction={{ base: 'column', md: 'row' }} 
                alignItems='center' alignContent='center' justifyContent='center'  spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                href={'/signup'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Inscribete
              </Button>
                
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            fallback={<Loader/>}
            alt={'Login Image'}
            objectFit={'cover'}
            src={imgage}
          />
        </Flex>
      </Stack>
    );
  }