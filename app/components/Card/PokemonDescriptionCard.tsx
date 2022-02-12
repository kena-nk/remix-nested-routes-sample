import {
  Box,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'remix';
import { CloseIcon } from '@chakra-ui/icons';

export type PokemonCardProps = {
  name: string;
  url: string;
  type: string[];
  height: number;
  ability: string[];
  baseExperience: number;
  navigatePath: string;
}

export const PokemonDescriptionCard = ({
  name, url, type, height, ability, baseExperience, navigatePath,
}: PokemonCardProps) => (
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
          h="300px"
          objectFit="contain"
        />
        <Text variant="dotBody1">{name}</Text>
        <Text variant="dotBody2" whiteSpace="pre-line" mt="8px">
          {`種類: ${type}`}
        </Text>
        <Text variant="dotBody2" whiteSpace="pre-line" mt="8px">
          {`高さ: ${height}m`}
        </Text>
        <Text variant="dotBody2" whiteSpace="pre-line" mt="8px">
          {`能力: ${ability}`}
        </Text>
        <Text variant="dotBody2" whiteSpace="pre-line" mt="8px">
          {`基礎経験値: ${baseExperience}`}
        </Text>
      </Box>
    </Box>
  </Box>
);
