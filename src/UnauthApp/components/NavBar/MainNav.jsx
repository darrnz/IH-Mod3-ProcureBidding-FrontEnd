import React, { useContext, useEffect } from 'react'
import {
    Image, Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent, 
    useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
/* import Profile from './AuthApp/components/Profile' */
import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import tokenAuth from '../../../services/token'
import AuthContext from '../../../context/auth/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { MdPerson } from 'react-icons/md'
import logoMain from '../../../images/logo1.png'
export default function MainNav(props) {

    const { isOpen, onToggle } = useDisclosure();
    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, iniciarSesion, cerrarSesion, usuario} = authContext;
    const history = useHistory()
    console.log(usuario)

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
            <Image src={logoMain} alt='logo' width={180} />

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
                <>
                    <Box>
                        { usuario == null? <p>Cargando</p>:
                            <Flex>
                            <MdPerson />
                            <Text mr={5} leftIcon={<MdPerson />}> {usuario.email} </Text>
                            </Flex>
                        }
                    </Box>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'red.400'}
                        
                        onClick={()=>cerrarSesion()}
                        _hover={{
                        bg: 'pink.300',
                        }}>
                        Cerrar Sesión
                    </Button>
                </>
                : 
                <> 
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
                </>      

            }

            </Stack>
        </Flex>

        {/* <Collapse in={isOpen} animateOpacity>
            <MobileNav />
        </Collapse> */}
    </Box>
    )
}
