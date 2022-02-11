import {
} from '@chakra-ui/react';
import {
  useNavigate,
} from 'remix';
import { useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/pokemon');
  }, []);
  return null;
};

export default Index;
