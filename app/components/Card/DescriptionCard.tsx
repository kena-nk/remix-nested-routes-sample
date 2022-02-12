import {
  Box,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'remix';
import { CloseIcon } from '@chakra-ui/icons';

export type CardProps = {
  name: string;
  description: string;
  url: string;
  navigatePath: string;
}

export const DescriptionCard = ({
  name, url, description, navigatePath,
}: CardProps) => (
  <Box
    py="24px"
    w="320px"
  >
    <Box
      borderRadius="8px"
      bg="gray.200"
      pb="24px"
      px="24px"
      h="calc(100vh - (108px + 24px + 24px))"
    >
      <Link to={navigatePath}>
        <Flex
          justify="end"
          cursor="pointer"
          py="16px"
        >
          <CloseIcon />
        </Flex>
      </Link>
      <Box
        mt="4px"
      >
        <Image
          src={url}
          w="100%"
          h="100px"
          objectFit="contain"
        />
        <Text variant="dotBody1">{name}</Text>
        <Text variant="dotBody2" whiteSpace="pre-wrap">{description}</Text>
      </Box>
    </Box>
  </Box>
);
