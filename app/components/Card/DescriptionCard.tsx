import {
  Box,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'remix';
import { CloseIcon } from '@chakra-ui/icons';

export type CardProps = {
  name: string;
  description: string;
  url: string;
  navigatePath: string;
}

export const DescriptionCard = ({
  name, url, description, navigatePath,
}: CardProps) => {
  const navigate = useNavigate();

  return (
    <Box
      py="24px"
      w="320px"
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
          onClick={() => { navigate(navigatePath); }}
        >
          <CloseIcon />
        </Flex>
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
};
