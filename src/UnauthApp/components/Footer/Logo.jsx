import {
  chakra,
  Img,
} from '@chakra-ui/react';
import React  from 'react';
import logoMain from '../../../images/logo1.png'


export default function Logo (props) {
  return (
    <Img
      height={20}
      src={logoMain}
      />

  );
};
