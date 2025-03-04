import { Box, IconButton, Stack, Typography } from '@mui/material';
import { DefaultSelect } from '@components/DefaultSelect';
import { Difference } from '@components/Difference';
import * as React from 'react';
import ChartIcon from '@assets/icons/chart.svg';
import DotsIcon from '@assets/icons/dots.svg';
import { Chart } from './components/Chart';
import { Tabs } from '@components/Tabs';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './config/columns';

interface IOverviewTab {
  id: number;
  title: string;
  value: string;
  isDown: boolean;
  difference: string;
  chartName: string;
}

const tabs: IOverviewTab[] = [
  {
    id: 1,
    title: 'Utilization',
    value: '37.6%',
    isDown: false,
    difference: '2.1pp',
    chartName: 'Utilization rate'
  },
  {
    id: 2,
    title: 'Parts',
    value: '45',
    isDown: false,
    difference: '3 parts',
    chartName: 'Parts rate'
  },
  {
    id: 3,
    title: 'Downtime',
    value: '92h 14m',
    isDown: true,
    difference: '3h 20m',
    chartName: 'Downtime rate'
  },
  {
    id: 4,
    title: 'Alarms',
    value: '0',
    isDown: false,
    difference: '0 alarms',
    chartName: 'Alarms rate'
  },
  {
    id: 5,
    title: 'OEE',
    value: '63.6%',
    isDown: false,
    difference: '0.1pp',
    chartName: 'OEE rate'
  }
];

export const Utilization = () => {
  const [currentTab, setCurrentTab] = React.useState<IOverviewTab>(tabs[0]);

  return (
    <Box>
      <Stack direction={'row'} gap={'8px'} mb={'12px'}>
        <DefaultSelect defaultValue="Last 7 days" name="days" />
        <DefaultSelect defaultValue="All Shifts" name="shifts" />
        <DefaultSelect defaultValue="All Operations" name="operations" />
        <DefaultSelect defaultValue="All Operators" name="operators" />
      </Stack>
      <Box
        sx={(theme) => ({
          border: theme.borders.default,
          borderRadius: '4px'
        })}
        bgcolor={'common.white'}
      >
        <Stack
          direction={'row'}
          p={'16px 24px 0'}
          gap={'24px'}
          sx={(theme) => ({
            borderBottom: theme.borders.default
          })}
        >
          {tabs.map((tab) => {
            const isActive = currentTab.id === tab.id;

            return (
              <Stack
                sx={(theme) => ({
                  cursor: 'pointer',
                  ...(isActive && {
                    borderBottom: `2px solid ${theme.palette.main}`
                  })
                })}
                flex={1}
                key={`overview-tab-${tab.id}`}
                gap={'12px'}
                pb={'8px'}
                onClick={() => setCurrentTab(tab)}
              >
                <Typography color={isActive ? 'neutral.500' : 'neutral.300'} variant={'bodyMedium'}>
                  {tab.title}
                </Typography>
                <Stack gap={'4px'}>
                  <Typography color={isActive ? 'neutral.500' : 'neutral.300'} variant={'h1'}>
                    {tab.value}
                  </Typography>
                  <Difference isDown={tab.isDown}>{tab.difference}</Difference>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
        <Stack gap={'42px'} p={'16px 24px'}>
          <Stack direction={'row'} gap={'24px'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant={'h4'}>{currentTab.chartName}</Typography>
            <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
              <IconButton variant={'contained'}>
                <ChartIcon />
              </IconButton>
              <IconButton variant={'contained'}>
                <DotsIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Chart />
        </Stack>
      </Box>

      <Box
        bgcolor={'common.white'}
        mt={'16px'}
        pt={'8px'}
        sx={(theme) => ({
          border: theme.borders.default,
          borderRadius: '4px'
        })}
      >
        <Tabs
          items={[
            {
              id: 1,
              label: 'Operations',
              amount: 3,
              element: (
                <Box p={'16px 24px'}>
                  <DataGrid columns={columns} rows={rows} />
                </Box>
              )
            },
            {
              id: 2,
              label: 'Operators',
              amount: 1,
              element: (
                <Box p={'16px 24px'} overflow={'auto'}>
                  Operators
                </Box>
              )
            }
          ]}
        />
      </Box>
    </Box>
  );
};
