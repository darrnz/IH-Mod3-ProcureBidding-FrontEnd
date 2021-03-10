import React from 'react'
import {
    Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent, Link,
    useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
/* import Profile from './AuthApp/components/Profile' */
import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'


export default function MainNav() {

    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
        <Flex
            bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')} minH={'60px'}
            py={{ base: 2 }} px={{ base: 4 }} borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}>
            <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
                onClick={onToggle}
                icon={
                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }   
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
            />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                color={useColorModeValue('gray.800', 'white')}>
                Logo
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                <DesktopNav />
            </Flex>
            </Flex>

            <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
                {/* <Link to='/purchaser/item-list'>Lista PRoductos</Link>
                <Link to='/purchaser'>Comprador</Link>
                <Link to='/app/profile'>Vendedor</Link>
                <Link to='/signup'></Link>
                <Link to='/login'>Login</Link>
                <Link to='/app/profile'>PRofileAdmin</Link> */}
            <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'/login'}>
            Inicia Sesión
            </Button>

            <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'red.400'}
                
                href={'/signup'}
                _hover={{
                bg: 'pink.300',
                }}>
                Iniscribete
            </Button>

            {/* <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'red.400'}
                
                href={'/logput'}
                _hover={{
                bg: 'pink.300',
                }}>
                Iniscribete
            </Button> */}

            </Stack>
        </Flex>

        {/* <Collapse in={isOpen} animateOpacity>
            <MobileNav />
        </Collapse> */}
    </Box>
    )
}
