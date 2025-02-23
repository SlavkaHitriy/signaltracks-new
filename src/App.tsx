import { Navigate, Route, Routes } from 'react-router';
import { Sidebar } from '@components/Sidebar';

import { Box, Stack } from '@mui/material';
import { Machines } from '@pages/Machines';
import { Company } from '@pages/Company';

export const App = () => {
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
          <Routes>
            <Route path="/machines" element={<Machines />} />
            <Route path="/company" element={<Company />} />

            <Route path="*" element={<Navigate to="/machines" replace />} />
          </Routes>
        </Box>
      </Stack>
    </Box>
  );
};
