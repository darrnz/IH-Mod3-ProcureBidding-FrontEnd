import React from 'react'
import { Link } from 'react-router-dom'
import DesktopSubNav from './DesktopSubNav'
import NavItem from './NavItem'
import {
    Box, Flex, Text,IconButton, Button,Stack,Collapse,Icon, Popover,PopoverTrigger,PopoverContent,/* Link, */
    useColorModeValue,useBreakpointValue,useDisclosure,} from '@chakra-ui/react';
/* import Profile from './AuthApp/components/Profile' */
import { HamburgerIcon,CloseIcon,ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';



export default function DesktopNav () {
    return (
        <Stack direction={'row'} spacing={4}>
            {/* {navItems.map((navItem) => ( */}
            <Box >
                <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                    <Link
                    p={2}
                    to={'/purchaser'}
                    
                    fontSize={'sm'}
                    fontWeight={500}
                    color={useColorModeValue('gray.600', 'gray.200')}
                    _hover={{
                        textDecoration: 'none',
                        color: useColorModeValue('gray.800', 'white'),
                    }}>
                    Comprador
                    </Link>
                </PopoverTrigger>
    
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
                </Popover>
            </Box>
           {/*  ))} */}
        </Stack>
    );
  };
