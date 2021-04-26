/** @jsxImportSource theme-ui */
import { Flex, Box } from 'theme-ui';
import Header from '@components/Header';

const Layout: React.FC = (props) => (
  <Flex
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Header />
    <Box
      as="main"
      sx={{
        marginTop: [2, 4],
        width: '100%',
        flex: '1 1 auto',
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
    </Box>
  </Flex>
);

export default Layout;
