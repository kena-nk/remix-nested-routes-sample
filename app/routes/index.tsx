import {
  Box,
  Flex,
} from '@chakra-ui/react';
import { useLoaderData, LoaderFunction } from 'remix';
import Card from '../components/Card';
import type { CardProps } from '../components/Card';

export const loader: LoaderFunction = async () => {
  const urls = [];
  const data:any[] = [];

  for (let i = 1; i < 100; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    urls.push(url);
  }

  const getRequest = async (url: string) => {
    const response = await fetch(url);
    console.log('hoge');
    return response.json();
  };

  const requests = urls.map((url) => getRequest(url));

  await Promise.all(requests).then((responses) => data.push(responses));

  const response = data[0]?.map((item: any) => ({
    name: item.name,
    url: item.sprites.front_default,
  }));
  return response;
};

const Index = () => {
  const data = useLoaderData<CardProps[]>();

  return (
    <Flex wrap="wrap" py="24px">
      {data?.map((item, index) => (
        <Box key={index} mx="8px" mb="16px">
          <Card {...item} />
        </Box>
      ))}
    </Flex>
  );
};

export default Index;
