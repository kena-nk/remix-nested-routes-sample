import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import Card from '../components/Card';
import type { CardProps } from '../components/Card';
import { useLoaderData, LoaderFunction } from 'remix';

export let loader: LoaderFunction = async () => {
  let urls = [];
  let data:any[] = [];

  for (let i = 1; i < 100; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    urls.push(url)
  }

  const getRequest = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  const requests = urls.map(url => getRequest(url));

  await Promise.all(requests).then((responses) => data.push(responses))

  const response = data[0]?.map((item: any) => ({
    name: item.name,
    url: item.sprites.front_default
  }))
  return response;
};

export default function Index() {
  const data = useLoaderData<CardProps[]>();

  return (
    <Flex wrap="wrap" py="24px">
      {data?.map((item, index) =>
        (
          <Box key={index} mr="16px" mb="16px">
            <Card {...item} />
          </Box>
        )
      )}
    </Flex>
  );
}
