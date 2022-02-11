import {
  HStack,
  Avatar,
  Text,
  Spacer,
} from '@chakra-ui/react';
import {
  Link,
} from 'remix';

export default function Index() {
  return (
    <HStack spacing="0px" h="62px">
      <Link to="/">
        <Text fontSize="30px" fontWeight="bold">
          PokeSample
        </Text>
      </Link>
      <Spacer />
      <HStack
        cursor="pointer"
        bg="gray.200"
        justify="center"
        borderRadius="100%"
      >
        <Avatar
          h="40px"
          w="40px"
          borderRadius="100%"
          objectFit="contain"
        />
      </HStack>
    </HStack>
  );
}
