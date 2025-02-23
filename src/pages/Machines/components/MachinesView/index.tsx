import * as React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { IMachinesItem } from '@pages/Machines/config/items';
import { ColorStatus } from '@components/ColorStatus';
import ArrowIcon from '@assets/icons/arrow.svg';
import SettingsIcon from '@assets/icons/settings.svg';
import { ITabItem, Tabs } from '@components/Tabs';
import { Overview } from '../Overview';

interface IMachinesViewProps {
  currentMachine: IMachinesItem;
}

const tabsItems: ITabItem[] = [
  {
    id: 1,
    label: 'Overview',
    element: (
      <Box p={'16px 24px'} overflow={'hidden auto'}>
        <Overview />
      </Box>
    )
  },
  {
    id: 2,
    label: 'Timeline',
    element: (
      <Box p={'16px 24px'} overflow={'auto'}>
        Timeline
      </Box>
    )
  },
  {
    id: 3,
    label: 'Diagnostics',
    element: (
      <Box p={'16px 24px'} overflow={'auto'}>
        Diagnostics
      </Box>
    )
  },
  {
    id: 4,
    label: 'Tool Monitoring',
    element: (
      <Box p={'16px 24px'} overflow={'auto'}>
        Tool Monitoring
      </Box>
    )
  }
];

export const MachinesView: React.FC<IMachinesViewProps> = ({ currentMachine }) => {
  return (
    <Stack flex={1} overflow={'hidden auto'}>
      <Stack p={'28px 24px 16px'} alignItems={'center'} justifyContent={'space-between'} direction={'row'} gap={'24px'}>
        <Stack direction={'row'} gap={'12px'} alignItems={'center'}>
          <Typography variant={'h2'}>{currentMachine.title}</Typography>
          <ColorStatus code={currentMachine.status} />
        </Stack>
        <Stack direction={'row'} gap={'12px'} alignItems={'center'}>
          <IconButton variant={'contained'}>
            <ArrowIcon />
          </IconButton>
          <Typography flexShrink={0} variant={'bodyMedium'}>
            1 of 22
          </Typography>
          <IconButton
            sx={{
              transform: 'rotate(180deg)'
            }}
            variant={'contained'}
          >
            <ArrowIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Box position={'relative'}>
        <Tabs items={tabsItems} />
        <IconButton
          sx={{
            position: 'absolute',
            top: '0',
            right: '24px'
          }}
          variant={'contained'}
        >
          <SettingsIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};
