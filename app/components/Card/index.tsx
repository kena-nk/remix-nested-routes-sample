import {
  Box,
  Text,
  VStack,
  Image,
  HStack,
} from '@chakra-ui/react';

export type CardProps = {
  name: string;
  url: string;
}

const Index = ({ name, url }: CardProps) => (
  <VStack
    spacing="0px"
    w="300px"
    h="360px"
    borderRadius="8px"
    borderWidth="1px"
    borderColor="gray.200"
  >
    <Box
      pb="4px"
      bg="yellow.100"
    >
      <HStack
        h="300px"
        w="300px"
      >
        <Image
          src={url}
          w="100%"
          h="200px"
          objectFit="contain"
        />
      </HStack>
    </Box>
    <Text fontWeight="bold" p="16px">
      {name}
    </Text>
  </VStack>
);

export default Index;
