import {
  Box,
  Text,
} from '@chakra-ui/react';
import { useLoaderData, LoaderFunction } from 'remix';

export const loader: LoaderFunction = async ({ params }) => params.id;

const Index = () => {
  const id = useLoaderData();

  return (
    <Box>
      <Text>{id}</Text>
    </Box>
  );
};

export default Index;
