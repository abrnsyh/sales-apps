import { Box, Flex, Image } from '@chakra-ui/react';
import SidebarMenu from './SidebarMenu';
import {
  KanbanSquare,
  LayoutDashboard,
  Newspaper,
  Percent,
  Settings,
  Wallet,
} from 'lucide-react';

const menu = [
  { title: 'Dashboard', icon: <LayoutDashboard size="24px" />, href: '/' },
  { title: 'Data Master', icon: <KanbanSquare size="24px" />, href: '/' },
  { title: 'Kontrak', icon: <Newspaper size="24px" />, href: '/' },
  { title: 'Promo', icon: <Percent size="24px" />, href: '/' },
  { title: 'Pembayaran', icon: <Wallet size="24px" />, href: '/' },
  { title: 'Konfigurasi', icon: <Settings size="24px" />, href: '/' },
];

export default function Sidebar() {
  return (
    <Flex
      position="sticky"
      top="0"
      bottom="0"
      flexDir="column"
      alignItems="center"
      bg="#0B0B20"
      gap="8px"
      w="88px"
      h={'100vh'}
      _before={{
        content: `""`,
        pos: 'absolute',
        bgImage: "url('/sidebar.jpeg')",
        bgRepeat: 'no-repeat',
        bgPos: 'right',
        bgSize: 'cover',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.7,
      }}
    >
      <Box position="relative" mt="60px">
        <Image w="78px" src="/logo.png" alt="logo" />
      </Box>

      <Flex flexDir="column" gap="16px" position="relative">
        {menu.map((item, index) => (
          <SidebarMenu
            key={index}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </Flex>
    </Flex>
  );
}
