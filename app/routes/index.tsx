import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import Card from '../components/Card';
import type { CardProps } from '../components/Card';
import { useLoaderData } from 'remix';

export const loader = async () => {
  const mock: CardProps[] = [
    {
      title: '天丼',
      url: 'https://1.bp.blogspot.com/-R-93rk6Bfqc/YHDkI0o9c6I/AAAAAAABdlA/hL5egaLPavYrBmEGVsltrlYgyHuAu-sQgCNcBGAsYHQ/s400/food_udon_goboten.png'
    },
    {
      title: '天丼',
      url: 'https://1.bp.blogspot.com/-R-93rk6Bfqc/YHDkI0o9c6I/AAAAAAABdlA/hL5egaLPavYrBmEGVsltrlYgyHuAu-sQgCNcBGAsYHQ/s400/food_udon_goboten.png'
    },
    {
      title: '天丼',
      url: 'https://1.bp.blogspot.com/-R-93rk6Bfqc/YHDkI0o9c6I/AAAAAAABdlA/hL5egaLPavYrBmEGVsltrlYgyHuAu-sQgCNcBGAsYHQ/s400/food_udon_goboten.png'
    },
    {
      title: '天丼',
      url: 'https://1.bp.blogspot.com/-R-93rk6Bfqc/YHDkI0o9c6I/AAAAAAABdlA/hL5egaLPavYrBmEGVsltrlYgyHuAu-sQgCNcBGAsYHQ/s400/food_udon_goboten.png'
    },
    {
      title: '天丼',
      url: 'https://1.bp.blogspot.com/-R-93rk6Bfqc/YHDkI0o9c6I/AAAAAAABdlA/hL5egaLPavYrBmEGVsltrlYgyHuAu-sQgCNcBGAsYHQ/s400/food_udon_goboten.png'
    },
  ]
  return mock;
};

export default function Index() {
  const data = useLoaderData<CardProps[]>();
  console.log(data)

  return (
    <Flex wrap="wrap" py="24px">
      {data.map((item, index) =>
        (
          <Box mr="16px" mb="16px">
            <Card key={index} {...item} />
          </Box>
        )
      )}
    </Flex>
  );
}
