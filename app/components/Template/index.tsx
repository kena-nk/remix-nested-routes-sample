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
      <Header />
      <Tab />
      {children}
    </Box>
  );
}
