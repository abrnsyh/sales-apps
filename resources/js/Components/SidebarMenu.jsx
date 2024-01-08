import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from '@inertiajs/react';

export default function SidebarMenu({ active = false, title, icon, href }) {
  return (
    <Flex
      as={Link}
      role="group"
      alignItems="center"
      gap="8px"
      w="88px"
      flexDirection="column"
      position="relative"
      transition="all 300ms"
      px="18px"
      _before={{
        transition: 'all 300ms',
        content: `""`,
        display: active ? 'block' : 'none',
        borderRight: '3px solid #066C98',
        position: 'absolute',
        height: '52px',
        right: 0,
        top: 0,
        left: 0,
        bottom: 0,
      }}
      href={href}
    >
      <Box
        transition="all 300ms"
        _groupHover={{
          // This is the active state
          // bg: 'linear-gradient(rgba(32, 116, 152, 0.54), rgba(32, 116, 152, 0.34), rgba(32, 116, 152, 0.24), #000000)',
          bg: active
            ? ''
            : 'linear-gradient(rgba(32, 116, 152, 0.10),  #000000)',
          color: '#818184',
        }}
        p="12px"
        bg={
          active
            ? 'linear-gradient(rgba(32, 116, 152, 0.54), rgba(32, 116, 152, 0.34), rgba(32, 116, 152, 0.24), #000000)'
            : '#000000'
        }
        color={active ? '#818184' : '#066C98'}
        borderRadius="16px"
        w="52px"
        display="flex"
        justifyContent="center"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      >
        {icon}
      </Box>
      <Heading
        transition="all 300ms"
        textAlign="center"
        variant="h6"
        fontSize="10px"
        _groupHover={{ color: active ? '' : '#4D4D4D' }}
        color={active ? '#FFFFFF' : '#818184'}
      >
        {title}
      </Heading>
    </Flex>
  );
}
