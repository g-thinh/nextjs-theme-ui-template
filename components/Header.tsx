import { Box, Flex, Text, Button, useColorMode } from 'theme-ui';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();

  const isDark = colorMode === 'dark';

  function handleColorChange() {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }

  return (
    <Box as="header" p={2} mb={2} mx={2}>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignContent: 'center',
          height: '100%',
        }}
      >
        <Text
          as="p"
          sx={{
            userSelect: 'none',
            fontSize: 4,
            textAlign: 'center',
          }}
        >
          Simple Next.js{' '}
          <Text color="primary" sx={{ fontWeight: 'bold' }}>
            Template
          </Text>
        </Text>
        <Flex sx={{ justifyContent: 'center', alignContent: 'center' }}>
          <Button bg="transparent" p={0} px={1} onClick={handleColorChange}>
            <DarkModeSwitch
              style={{ marginTop: '6px' }}
              checked={isDark}
              onChange={handleColorChange}
            />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
