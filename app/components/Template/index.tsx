import {
  Box,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from '../Header';
import Tab from '../Tab';

type TemplateProps = {
    children: ReactNode;
}

export default function index({ children }: TemplateProps) {
  return (
    <Box px="40px">
      <Box position="fixed" top="0px" w="calc(100% - 80px)">
        <Header />
        <Tab />
      </Box>
      <Box mt="108px">
        {children}
      </Box>
    </Box>
  );
}
