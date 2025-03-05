import { Box, Button, Grid2, IconButton, inputBaseClasses, Stack, Typography } from '@mui/material';
import { DefaultSelect } from '@components/DefaultSelect';
import { Difference } from '@components/Difference';
import * as React from 'react';
import { Tabs } from '@components/Tabs';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './config/columns';
import { FormikProvider, useFormik } from 'formik';
import { SearchInput } from '@components/SearchInput';
import ArrowsIcon from '@assets/icons/arrows.svg';
import FilterIcon from '@assets/icons/filter.svg';
import AddIcon from '@assets/icons/add.svg';
import { DefaultInput } from '@components/DefaultInput';
import { useEffect } from 'react';

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

interface UserInfo {
  firstName: string;
  lastName: string;
  address: string;
  otherInfo: string;
  otherInfo2: string;
  otherInfo3: string;
}

const defaultUserValues: UserInfo = {
  firstName: '',
  lastName: '',
  address: '',
  otherInfo: '',
  otherInfo2: '',
  otherInfo3: ''
};

export const Users = () => {
  const formik = useFormik({
    initialValues: {
      days: 'Yesterday',
      ...defaultUserValues
    },
    onSubmit: () => {}
  });

  const [currentTab, setCurrentTab] = React.useState<IOverviewTab>(tabs[0]);
  const [selectedUser, setSelectedUser] = React.useState<UserInfo | null>(null);

  useEffect(() => {
    if (selectedUser) {
      formik.setValues({
        days: 'Yesterday',
        ...selectedUser
      });
    }
  }, [selectedUser]);

  return (
    <FormikProvider value={formik}>
      <Stack gap={'24px'}>
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
            </Stack>
          </Stack>
        </Box>

        <Stack
          sx={{
            [`.${inputBaseClasses.root}`]: { height: 36 }
          }}
          direction={'row'}
          gap={'8px'}
        >
          <Stack direction="row" gap="8px">
            <SearchInput
              sx={{
                minWidth: 200
              }}
              name="search"
            />
            <IconButton>
              <ArrowsIcon />
            </IconButton>
            <IconButton>
              <FilterIcon />
            </IconButton>
          </Stack>
          <DefaultSelect defaultValue="Last 7 days" name="days" />
          <DefaultSelect defaultValue="All Shifts" name="shifts" />
          <DefaultSelect defaultValue="All Operations" name="operations" />
          <DefaultSelect defaultValue="All Operators" name="operators" />
          <Button
            // @ts-expect-error error
            color={'text.primary'}
            sx={{
              color: 'text.primary',
              textTransform: 'capitalize',
              fontSize: '14px',
              px: '36px !important',
              py: '4px',
              flexShrink: 0
            }}
            startIcon={<AddIcon />}
            variant={'outlined'}
            onClick={() => setSelectedUser(defaultUserValues)}
          >
            Add user
          </Button>
        </Stack>

        {!!selectedUser && (
          <Stack gap={'12px'}>
            <Grid2 container spacing={'12px'}>
              <Grid2 size={3}>
                <DefaultInput name={'firstName'} placeholder={'First Name'} />
              </Grid2>
              <Grid2 size={3}>
                <DefaultInput name={'lastName'} placeholder={'Last Name'} />
              </Grid2>
              <Grid2 size={3}>
                <DefaultInput name={'address'} placeholder={'Address'} />
              </Grid2>
              <Grid2 size={3}>
                <DefaultInput name={'otherInfo'} placeholder={'Other Info'} />
              </Grid2>
              <Grid2 size={3}>
                <DefaultInput name={'otherInfo2'} placeholder={'Other Info 2'} />
              </Grid2>
              <Grid2 size={3}>
                <DefaultInput name={'otherInfo3'} placeholder={'Other Info 3'} />
              </Grid2>
            </Grid2>
            <Stack direction={'row'} justifyContent={'flex-end'} gap={'12px'}>
              <Button color={'error'} variant={'text'} size={'small'} onClick={() => setSelectedUser(null)}>
                Cancel
              </Button>
              <Button color={'success'} size={'medium'} onClick={() => setSelectedUser(null)}>
                Save
              </Button>
            </Stack>
          </Stack>
        )}

        <Box
          bgcolor={'common.white'}
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
                label: 'Users',
                amount: 3,
                element: (
                  <Box p={'16px 24px'}>
                    <DataGrid columns={columns} rows={rows} onRowClick={(row) => setSelectedUser(row.row)} />
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
      </Stack>
    </FormikProvider>
  );
};
