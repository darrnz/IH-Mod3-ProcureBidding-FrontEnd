import {
  Box,
  chakra,
  Container,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import React ,{ ReactNode } from 'react';
import logoMain from '../../../images/logo1.png'


export default function Logo (props) {/* props: any */
  return (
    <Img
      height={20}
      src={logoMain}
      />

  );
};
