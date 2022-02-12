import {
  Link,
  useLocation,
} from 'remix';
import {
  Text,
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';

type TabType = {
  id: number;
  path: string;
  title: string;
}

export default function index() {
  const location = useLocation();
  const tabLinks: TabType[] = [
    { id: 0, path: '/pokemon', title: 'ぽけもん' },
    { id: 1, path: '/item', title: 'あいてむ' },
  ];
  const selectedItemId = tabLinks.find(
    (item) => item.path === location.pathname || location.pathname.match(item.path),
  )?.id;

  const TabElement = ({ item }:{ item: TabType }) => (
    <Link prefetch="intent" to={item.path}>
      <Tab h="46px" w="100px">
        <Text variant="dotBody2">{item.title}</Text>
      </Tab>
    </Link>
  );

  return (
    <Tabs colorScheme="red" defaultIndex={selectedItemId} bg="white">
      <TabList>
        {tabLinks.map((item) => (<TabElement key={item.id} item={item} />))}
      </TabList>
    </Tabs>
  );
}
