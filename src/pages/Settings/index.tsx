import { Box, Stack, tabsClasses, Typography } from '@mui/material';
import { Tabs } from '@components/Tabs';
import { Users } from '@pages/Settings/components/Users';

export const Settings = () => {
  return (
    <Box flex={1} overflow={'hidden auto'}>
      <Stack p={'20px 24px'} gap={'24px'}>
        <Typography variant={'h2'}>Settings</Typography>
        <Tabs
          sx={{
            [`.${tabsClasses.flexContainer}`]: {
              pl: 0
            }
          }}
          items={[
            {
              id: 1,
              label: 'Users',
              element: <Users />
            },
            {
              id: 2,
              label: 'Company',
              element: <Box>Company</Box>
            },
            {
              id: 3,
              label: 'Sites',
              element: <Box>Sites</Box>
            },
            {
              id: 4,
              label: 'Configuration',
              element: <Box>Configuration</Box>
            },
            {
              id: 5,
              label: 'Service Providers',
              element: <Box>Service Providers</Box>
            },
            {
              id: 6,
              label: 'Pipe Profiles',
              element: <Box>Pipe Profiles</Box>
            },
            {
              id: 7,
              label: 'End-Users & Rigs',
              element: <Box>End-Users & Rigs</Box>
            }
          ]}
        />
      </Stack>
    </Box>
  );
};
