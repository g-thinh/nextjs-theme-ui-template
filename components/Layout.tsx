/** @jsxImportSource theme-ui */
import { Flex, Box } from 'theme-ui';
import Header from '@components/Header';
import NavButtons from '@components/NavButtons';

const Layout: React.FC = (props) => (
  <Flex
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Header />
    <Flex
      as="main"
      sx={{
        marginTop: [2, 4],
        width: '100%',
        flex: '1 1 auto',
        alignItems: ['center', 'flex-start'],
      }}
    >
      <Box
        sx={{
          maxWidth: '48em',
          mx: 'auto',
          px: [1, 3],
        }}
      >
        {props.children}
      </Box>
    </Flex>
    <Box
      as="footer"
      py={[2, 3]}
      sx={{
        display: ['block', 'none'],
      }}
    >
      <NavButtons />
    </Box>
  </Flex>
);

export default Layout;
