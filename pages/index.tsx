import { Container, Card, Text, Paragraph, Link } from 'theme-ui';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Text
          as="h1"
          color="text"
          sx={{ fontSize: [3, 4, 5], textAlign: 'center', fontWeight: 'bold' }}
        >
          Bringing the power of Theme-UI to Next.js
        </Text>
        <Text as="p" color="text" my={3} sx={{ textAlign: 'center' }}>
          by Gia Thinh Nguyen
        </Text>
        <Card p={2} mt={2} bg="muted" sx={{ borderRadius: 'card' }}>
          <Paragraph as="p" variant="block" my={3}>
            This is my quick grab template for any front-end app using{' '}
            <Link
              href="https://nextjs.org/"
              sx={{
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'primary',
                transition: 'all 0.3s',
                '&:hover': { color: 'text' },
              }}
            >
              Next.js
            </Link>{' '}
            and{' '}
            <Link
              href="https://theme-ui.com/home"
              sx={{
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'primary',
                transition: 'all 0.3s',
                '&:hover': { color: 'text' },
              }}
            >
              Theme-UI
            </Link>{' '}
            as my frameworks of choice.
          </Paragraph>
          <Paragraph as="p" variant="block" my={3}>
            This amazing combo provides an excellent out of the box developer
            experience when creating a custom design system while still using
            modern React patterns with a CSS-in-JS solution.
          </Paragraph>
        </Card>
      </Container>
    </Layout>
  );
}
