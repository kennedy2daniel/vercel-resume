import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link href="/">
              <strong>dan.sevnth.net</strong>
            </Link>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={
                      'https://avatars.githubusercontent.com/u/68309118?s=160&v=4'
                    }
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={
                        'https://avatars.githubusercontent.com/u/68309118?s=160&v=4'
                      }
                    />
                  </Center>
                  <br />
                  <Center flexDir="column">
                    <p>Daniel Kennedy, II</p>
                    <address>
                      34 Jefferson Drive <br />
                      Monessen, PA 15062
                    </address>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Link href="mailto:kennedy2.daniel+vercel-resume@gmail.com">
                      <EmailIcon style={{ marginRight: '1rem' }} />
                      Email
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="tel:9092976469">
                      <PhoneIcon style={{ marginRight: '1rem' }} /> Phone
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
