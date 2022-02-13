import {
  Box,
  Flex,
} from '@chakra-ui/react';
import {
  useLoaderData,
  LoaderFunction,
  Link,
  Outlet,
  useLocation,
} from 'remix';
import { BaseCard } from '../components/Card';
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
  const location = useLocation();
  const isPage = location.pathname === '/pokemon';

  return (
    <Flex>
      <Flex wrap="wrap" py="24px" w={isPage ? '100%' : '83%'}>
        {data?.map((item, index) => (
          <Link prefetch="intent" key={index} to={`/pokemon/${String(index + 1)}`}>
            <Box mx="8px" mb="16px">
              <BaseCard {...item} isSelected={location.pathname === `/pokemon/${index + 1}`} />
            </Box>
          </Link>
        ))}
      </Flex>
      <Outlet />
    </Flex>
  );
};

export default Index;
