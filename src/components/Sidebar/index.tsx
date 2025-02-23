import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router';
import logo from '@assets/images/logo.svg?url';
import logoSmall from '@assets/images/logo-small.svg?url';
import { SidebarItem } from './SidebarItem';
import { mainMenu, systemMenu } from './data/menu';
import SidebarArrowIcon from '@assets/icons/sidebar-arrow.svg';
import { useStore } from '@/store';
import CorpIcon from '@assets/icons/corp.svg';

export const Sidebar = () => {
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  return (
    <Stack
      component="aside"
      width={isSidebarOpen ? 216 : 72}
      flexShrink={0}
      bgcolor="main"
      position="relative"
      zIndex={11}
      sx={(theme) => ({
        boxShadow: theme.shadows[1],
        transition: 'all 0.3s ease'
      })}
    >
      <Box
        position="absolute"
        top={10}
        right={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={toggleSidebar}
        sx={{
          cursor: 'pointer',
          transformOrigin: 'center',
          transform: 'translateX(50%)',
          svg: {
            width: 24,
            height: 24,
            transform: `rotate(${isSidebarOpen ? 0 : 180}deg)`
          }
        }}
      >
        <SidebarArrowIcon />
      </Box>
      <Stack
        flex={1}
        sx={{
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        <Box
          p={isSidebarOpen ? 2 : 1.5}
          sx={{
            transition: 'all 0.3s ease'
          }}
        >
          <Box
            width={isSidebarOpen ? 125 : 24}
            height={24}
            sx={{
              transition: 'transform 0.3s',
              transform: `translateX(${isSidebarOpen ? 0 : 12}px)`,
              img: {
                width: '100%',
                objectFit: 'contain'
              }
            }}
          >
            <Link to="/">
              {isSidebarOpen && <Box component={'img'} src={logo} alt="logo" />}
              {!isSidebarOpen && <Box component={'img'} src={logoSmall} alt="logo" />}
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: '4px',
            bgcolor: 'background.default',
            py: 1,
            mx: isSidebarOpen ? 2 : 1.5,
            mt: 1,
            mb: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.5,
            svg: {
              width: 24,
              height: 24
            }
          }}
        >
          <CorpIcon />
          <Box
            sx={{
              transition: 'all 0.15s ease',
              transitionDelay: isSidebarOpen ? '1s' : '0s',
              display: isSidebarOpen ? 'block' : 'none',
              height: isSidebarOpen ? '20px' : 0
            }}
          >
            <Typography fontWeight={500} color="neutral.700" whiteSpace="nowrap">
              InMetal Inc
            </Typography>
          </Box>
        </Box>
        <Stack mb={'24px'} gap={'8px'}>
          {mainMenu.map((item) => (
            <SidebarItem isOpened={isSidebarOpen} key={item.title} data={item} />
          ))}
        </Stack>
        <Stack mt="auto" gap={'8ox'} pb={'16px'}>
          {systemMenu.map((item) => (
            <SidebarItem isOpened={isSidebarOpen} key={item.title} data={item} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
