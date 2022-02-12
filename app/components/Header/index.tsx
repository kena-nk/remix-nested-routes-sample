import {
  HStack,
  Text,
  Spacer,
} from '@chakra-ui/react';
import {
  Link,
} from 'remix';

const Index = () => (
  <HStack spacing="0px" h="62px" bg="white">
    <Link to="/pokemon">
      <Text variant="dotBody1" fontWeight="bold">
        ぽけもんずかん
      </Text>
    </Link>
    <Spacer />
  </HStack>
);

export default Index;
