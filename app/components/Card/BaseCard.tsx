import {
  Box,
  Text,
  VStack,
  Image,
  Spacer,
} from '@chakra-ui/react';

export type CardProps = {
  name: string;
  url: string;
  isSelected: boolean;
  imgHeight?: string;
}

export const BaseCard = ({
  name, url, isSelected, imgHeight,
}: CardProps) => (
  <VStack
    spacing="0px"
    w="300px"
    h="300px"
    bg={isSelected ? 'gray.200' : 'gray.50'}
    borderRadius="8px"
    _hover={{
      bg: isSelected ? 'gray.200' : 'gray.100',
      boxShadow: isSelected ? 'none' : '3px 5px 5px rgba(0, 0, 0, 0.25)',
    }}
  >
    <VStack spacing="0px" h="250px" justify="center">
      <Image
        src={url}
        w="100%"
        h={imgHeight || '200px'}
        objectFit="contain"
      />
    </VStack>
    <Text pb="24px" variant="dotBody1">
      {name}
    </Text>
  </VStack>
);
