import { Box, Stack } from '@mui/material';
import { Sidebar } from '@components/Sidebar';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        overflow: 'hidden'
      }}
    >
      <Sidebar />
      <Stack flex={1} overflow={'hidden'}>
        <Box
          flex={1}
          component={'main'}
          sx={{
            display: 'flex',
            height: '100%'
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};
