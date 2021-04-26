/** @jsxImportSource theme-ui */
import { Box, Flex, Text, Button, useColorMode, Link } from 'theme-ui';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FiGithub } from 'react-icons/fi';
import { useThemeUI } from 'theme-ui';

const Header: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  const { theme } = useThemeUI();
  console.log(theme?.colors?.primary);

  const isDark = colorMode === 'dark';

  function handleColorChange() {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }

  return (
    <Box as="header" p={2} mb={2} mx={2}>
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
        <Flex
          sx={{
            justifyContent: ['center', 'flex-start'],
            alignItems: 'center',
          }}
        >
          <Link
            href="#!"
            sx={{
              textDecoration: 'none',
              color: 'text',
              '&:hover': {
                color: 'primary',
              },
            }}
          >
            <Flex
              sx={{
                alignItems: 'center',
                marginRight: 2,
                width: ['60%', '100%'],
              }}
            >
              <FiGithub size={24} />
            </Flex>
          </Link>
          <Flex sx={{ justifyContent: 'center', alignContent: 'center' }}>
            <Button bg="transparent" p={0} px={1} onClick={handleColorChange}>
              <DarkModeSwitch
                style={{
                  marginTop: '6px',
                }}
                moonColor="var(--theme-ui-colors-primary)"
                sunColor="var(--theme-ui-colors-primary)"
                checked={isDark}
                onChange={handleColorChange}
              />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
