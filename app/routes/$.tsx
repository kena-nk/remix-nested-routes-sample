import {
  VStack,
  Button,
  Text,
} from '@chakra-ui/react';
import {
  useNavigate,
} from 'remix';

const Index = () => {
  const navigate = useNavigate();

  return (
    <VStack spacing="40px" p="40px">
      <Text variant="dotBody1">
        存在しないURLにアクセスしたな
      </Text>
      <Button onClick={() => navigate('/pokemon')}>
        TOPにもどる
      </Button>
    </VStack>
  );
};

export default Index;
