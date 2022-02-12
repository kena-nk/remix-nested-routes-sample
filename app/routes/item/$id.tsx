import { useLoaderData, LoaderFunction } from 'remix';
import {
  Box,
} from '@chakra-ui/react';
import { DescriptionCard } from '../../components/Card/DescriptionCard';

type Data = {
  name: string;
  description: string;
  url: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const url = `https://pokeapi.co/api/v2/item/${params.id}`;
  const response: any = await fetch(url);
  const data = await response.json();
  return {
    name: data?.names[0].name,
    description: data?.flavor_text_entries[16]?.text,
    url: data?.sprites?.default,
  };
};

const Index = () => {
  const data = useLoaderData<Data>();

  return (
    <Box position="fixed" right="40px">
      <DescriptionCard {...data} navigatePath="/item" />
    </Box>
  );
};

export default Index;
