import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import DesktopSubNav from './DesktopSubNav'
import NavItem from './NavItem'
import {
    Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent,
    useColorModeValue,useBreakpointValue,useDisclosure,
    BreadcrumbItem, Breadcrumb
} from '@chakra-ui/react';
/* import Profile from './AuthApp/components/Profile' */
import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import AuthContext from '../../../context/auth/AuthContext'
import Loader from '../../layout/Loader';

export default function DesktopNav () {

    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, registrarUsuario, usuario, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado()
    },[])

    return (
        <Stack direction={'row'} >
                {/* <Link
                    colorScheme="black" variant="outline" border='black'
                    p={2}
                    to='/vendor'>
                    Vendedor
                </Link>

                <Box>
                                    
                <Link
                    colorScheme="black" variant="outline" border='black'
                    p={2}
                    to='/purchaser'>
                Comprador
                </Link>

                <Link
                    colorScheme="black" variant="outline" border='black'
                    p={2}
                    to='/purchaser/item-list'>
                Lista de Productos
                </Link>
                </Box> */}
                <Box >
                    {
                        usuario == null ? '' :
                            usuario.role === 'Admin' ? 
                                (<Box mt={8} alignItems='center' alignContent='space-around' >
                                    <Breadcrumb>
                                    <BreadcrumbItem>
                                    <NavLink
                                        style={{fontSize:'21px',paddingRight:'5px', 
                                                paddingLeft:'5px' ,fontWeight:600,  
                                                textDecoration:'underline'}}
                                        colorScheme="black" variant="outline" border='black'
                                        href={'/login'}
                                        to='/purchaser'
                                    >
                                        Licitaciones
                                    </NavLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                    <NavLink
                                     style={{fontSize:'21px',paddingRight:'5px', 
                                            paddingLeft:'13px' ,fontWeight:600,  
                                            textDecoration:'underline'}}
                                        colorScheme="black" variant="outline" border='black'
                                        to='/purchaser/item-list'
                                    >
                                        Productos
                                    </NavLink>
                                    </BreadcrumbItem>
                                    </Breadcrumb>
                                </Box>)
                            :
                                (<NavLink
                                    style={{fontSize:'21px',paddingRight:'5px', 
                                            paddingLeft:'13px' ,fontWeight:600,  
                                            textDecoration:'underline'}}
                                        colorScheme="black" variant="outline" border='black'
                                    to='/vendor'
                                >
                                    Vendedor
                                </NavLink>)
                    }


                    {/* {navItem.children && (
                    <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={useColorModeValue('white', 'gray.800')}
                    p={4}
                    rounded={'xl'}
                    minW={'sm'}>
                    <Stack>
                        {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                        ))}
                    </Stack>
                    </PopoverContent>
                )} */}
        
            </Box>
           {/*  ))} */}
        </Stack>
    );
  };
