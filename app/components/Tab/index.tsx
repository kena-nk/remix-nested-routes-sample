import {
  Link,
} from 'remix';
import {
  Text,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';

export default function index() {
  return (
    <Tabs colorScheme="red">
      <TabList>
        <Link to="/">
          <Tab h="46px" w="100px">
            <Text fontWeight="bold">Pokémon</Text>
          </Tab>
        </Link>
        <Link to="/item">
          <Tab h="46px" w="100px">
            <Text fontWeight="bold">アイテム</Text>
          </Tab>
        </Link>
        <Link to="/location">
          <Tab h="46px" w="100px">
            <Text fontWeight="bold">場所</Text>
          </Tab>
        </Link>
      </TabList>
    </Tabs>
  );
}
