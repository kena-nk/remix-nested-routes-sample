import {
  HStack,
  Avatar,
  Text,
  Spacer,
} from '@chakra-ui/react';
import {
  Link,
} from 'remix';

const Index = () => (
  <HStack spacing="0px" h="62px">
    <Link to="/pokemon">
      <Text variant="dotBody1" fontWeight="bold">
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

export default Index;
