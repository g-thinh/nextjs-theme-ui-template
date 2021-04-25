import { Container, Card, Flex, Text } from 'theme-ui';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Text as="h1" color="text">
          Hello World
        </Text>
        <Text as="p" color="text" sx={{ fontWeight: 'bold' }}>
          This is a P
        </Text>
        <Card p={2} mt={2}>
          This is a Card
        </Card>
        <Flex sx={{ justifyContent: 'center' }}>This is a Flexbox</Flex>
      </Container>
    </Layout>
  );
}
