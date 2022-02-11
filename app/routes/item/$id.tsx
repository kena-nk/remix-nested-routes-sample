import {
  Box,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useLoaderData, LoaderFunction, useNavigate } from 'remix';
import { CloseIcon } from '@chakra-ui/icons';

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
  const navigate = useNavigate();

  return (
    <Box
      py="24px"
      w="100%"
      maxW="300px"
      h="fit-content"
    >
      <Box
        borderRadius="8px"
        bg="gray.200"
        pb="24px"
        px="24px"
      >
        <Flex
          justify="end"
          cursor="pointer"
          py="16px"
          onClick={() => { navigate('/item'); }}
        >
          <CloseIcon />
        </Flex>
        <Box
          mt="4px"
        >
          <Image
            src={data.url}
            w="100%"
            h="100px"
            objectFit="contain"
          />
          <Text variant="dotBody1">{data.name}</Text>
          <Text variant="dotBody2" whiteSpace="pre-wrap">{data.description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
