import React, { useContext, useEffect } from 'react'
import {
    Image, Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent, 
    useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import AuthContext from '../../../context/auth/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { MdPerson } from 'react-icons/md'
import logoMain from '../../../images/logo1.png'
export default function MainNav(props) {

    const { isOpen, onToggle } = useDisclosure();
    const authContext = useContext(AuthContext)
    const { autenticado, cerrarSesion, usuario} = authContext;
    const history = useHistory()

    const clickLogout = () => {
        cerrarSesion()
        history.push('/')
    }

    useEffect(() => {

    }, [usuario])

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
                    <a href={'/'}><Image src={logoMain} alt='logo' width={180} /></a>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                {
                    autenticado?
                    <Flex mr={10} justifyContent='space-evenly'>
                        <Box mr={10}  alignItems='center'  justifyContent='center' >
                            { usuario == null? <p>Cargando</p>:
                                <Flex d='flex' alignItems='center'  justifyContent='center' verticalAlign='center' >
                                    <MdPerson size={42} />
                                    <Text mr={4} ml={2} fontSize={25}
                                    fontWeight={600}
                                    >
                                        {usuario.firstName} 
                                    </Text>
                                </Flex>
                            }
                        </Box>
                        <Button
                            size='lg'
                            as={'a'}
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'md'}
                            fontWeight={600}
                            color={'white'}
                            bg={'red.400'}
                            
                            onClick={()=>cerrarSesion()}
                            _hover={{
                            bg: 'pink.300',
                            }}>
                            Cerrar Sesión
                        </Button>
                    </Flex>
                    : 
                    <Flex mr={10} justifyContent='space-around' alignContent='space-around'> 
                        <Button 
                            mr={10}
                            px={10}
                            colorScheme={'red.400'}
                            size='lg'
                            as={'a'}
                            fontSize={20}
                            fontWeight={600}
                            variant='link'
                            _hover={{
                                textDecoration:'underline',
                            }}
                            href={'/login'}>
                            
                        Iniciar Sesión
                        </Button>

                        <Button
                            size='lg'
                            as={'a'}
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={20}
                            fontWeight={600}
                            color={'white'}
                            bg={'red.400'}
                            href={'/signup'}
                            _hover={{
                            bg: 'pink.300',
                            }}>
                            Inscríbete
                        </Button>
                    </Flex>      

                }

                </Stack>
            </Flex>

        {/* <Collapse in={isOpen} animateOpacity>
            <MobileNav />
        </Collapse> */}
    </Box>
    )
}
