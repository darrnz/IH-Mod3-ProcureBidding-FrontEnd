import React, { useContext, useEffect } from 'react'
import {Link  } from 'react-router-dom'
import DesktopSubNav from './DesktopSubNav'
import NavItem from './NavItem'
import {
    Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent,
    useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
/* import Profile from './AuthApp/components/Profile' */
import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import AuthContext from '../../../context/auth/AuthContext'

export default function DesktopNav () {

    const authContext = useContext(AuthContext)
    const { mensaje, autenticado, registrarUsuario, usuario } = authContext;

    useEffect(() => {

    }, [usuario])

    return (
        <Stack direction={'row'} spacing={4}>
            {/* {navItems.map((navItem) => ( */}

                <Link
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
                                    </Box>
            <Box >
                   {/*  {
                        usuario == null ? '' :
                        autenticado? 
                            usuario.role === 'Admin' ? 
                                (
                                    <Box>
                                    
                                    <Link
                                        colorScheme="black" variant="outline" border='black'
                                        p={2}
                                        href={'/purchaser'}>
                                    Comprador
                                    </Link>

                                    <Link
                                        colorScheme="black" variant="outline" border='black'
                                        p={2}
                                        href={'/purchaser/item-list'}>
                                    Lista de Productos
                                    </Link>
                                    </Box>
                                )
                        :   (
                                <Link
                                    colorScheme="black" variant="outline" border='black'
                                    p={2}
                                    href={'/vendor'}>
                                Vendedor
                                </Link>
                            )
                        : ""
                    } */}


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
