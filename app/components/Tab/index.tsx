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
    { id: 0, path: '/', title: 'Pokémon' },
    { id: 1, path: '/item', title: 'アイテム' },
    { id: 2, path: '/location', title: '場所' },
  ];
  const selectedItemId = tabLinks.find((item) => item.path === location.pathname)?.id;

  const TabElement = ({ item }:{ item: TabType }) => (
    <Link to={item.path}>
      <Tab h="46px" w="100px">
        <Text fontWeight="bold">{item.title}</Text>
      </Tab>
    </Link>
  );

  return (
    <Tabs colorScheme="red" defaultIndex={selectedItemId}>
      <TabList>
        {tabLinks.map((item) => (<TabElement key={item.id} item={item} />))}
      </TabList>
    </Tabs>
  );
}
