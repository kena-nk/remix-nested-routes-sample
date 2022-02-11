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
  isSelected: boolean;
}

const Index = ({
  name, url, isSelected,
}: CardProps) => (
  <VStack
    spacing="0px"
    w="300px"
    h="360px"
    bg={isSelected ? 'gray.200' : 'gray.50'}
    borderRadius="8px"
    _hover={{
      bg: isSelected ? 'gray.200' : 'gray.100',
      boxShadow: isSelected ? 'none' : '3px 5px 5px rgba(0, 0, 0, 0.25)',
    }}
  >
    <Box
      pb="4px"
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
    <Text variant="dotBody1" p="16px">
      {name}
    </Text>
  </VStack>
);

export default Index;
