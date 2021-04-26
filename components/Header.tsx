/** @jsxImportSource theme-ui */
import { Box, Flex, Text } from 'theme-ui';
import NavButtons from '@components/NavButtons';

const Header: React.FC = () => (
  <Box as="header" p={2} mx={[0, 4]}>
    <Flex
      sx={{
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
        alignContent: 'center',
        height: '100%',
      }}
    >
      <Text
        as="p"
        sx={{
          userSelect: 'none',
          fontSize: [3, 4],
          textAlign: 'center',
        }}
      >
        Simple Next.js{' '}
        <Text color="primary" sx={{ fontWeight: 'bold' }}>
          Template
        </Text>
      </Text>
      <Box sx={{ display: ['none', 'block'] }}>
        <NavButtons />
      </Box>
    </Flex>
  </Box>
);

export default Header;
