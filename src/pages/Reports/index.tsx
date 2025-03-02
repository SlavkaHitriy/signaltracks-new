import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import ArrowIcon from '@assets/icons/chevron.svg';
import MoreIcon from '@assets/icons/more.svg';
import { SearchInput } from '@components/SearchInput';
import { DefaultSelect } from '@components/DefaultSelect';
import { DateTimeRange } from '@components/DateTimeRange';
import { alarms } from '@pages/Reports/config/alarms';
import { ColorStatus } from '@components/ColorStatus';

export const Reports = () => {
  const formik = useFormik({
    initialValues: {
      search: '',
      datetimeType: 'Custom',
      sortDirection: 'desc',
      sortField: 'timestamp',
      status: 'all'
    },
    onSubmit: () => {}
  });

  return (
    <FormikProvider value={formik}>
      <Box flex={1} overflow={'hidden auto'} pb={'24px'}>
        <Stack p={'20px 24px'} gap={'16px'} alignItems={'center'} direction={'row'}>
          <Button
            sx={(theme) => ({
              color: theme.palette.neutral[400],
              textTransform: 'capitalize',
              height: '36px',
              border: theme.borders.default
            })}
            startIcon={<ArrowIcon />}
            variant={'outlined'}
          >
            Reports
          </Button>
          <Typography variant={'h2'}>Alarms</Typography>
        </Stack>
        <Stack p={'16px 24px'} direction="row" gap={'8px'}>
          <SearchInput
            sx={{
              minWidth: 220
            }}
            name={'search'}
            placeholder={'Native Code / Message'}
          />
          <Stack direction={'row'} gap={'8px'}>
            <DefaultSelect name={'datetimeType'} defaultValue={'Custom'} />
            <DateTimeRange />
          </Stack>
          <Stack direction={'row'} gap={'8px'} ml={'auto'}>
            <DefaultSelect
              sx={{
                minWidth: 120
              }}
              name={'sortDirection'}
              defaultValue={'Descending'}
            />
            <DefaultSelect
              sx={{
                minWidth: 120
              }}
              name={'sortField'}
              defaultValue={'Count'}
            />
            <DefaultSelect
              sx={{
                minWidth: 120
              }}
              name={'status'}
              defaultValue={'Fault'}
            />
          </Stack>
        </Stack>
        <Box p={'0 24px'}>
          <Stack
            sx={(theme) => ({
              border: theme.borders.default,
              borderRadius: '4px'
            })}
          >
            {alarms.map((alarm, index) => (
              <Stack
                key={index}
                direction={'row'}
                gap={'32px'}
                justifyContent={'space-between'}
                p={'16px 24px'}
                sx={(theme) => ({
                  ...(index !== alarms.length - 1 && { borderBottom: theme.borders.default })
                })}
              >
                <Stack gap={'8px'}>
                  <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                    <ColorStatus code={alarm.status} />
                    <Typography variant={'bodyMedium'}>{alarm.name}</Typography>
                  </Stack>
                  <Typography variant={'body1'}>{alarm.description}</Typography>
                </Stack>
                <Stack direction={'row'} gap={'64px'} alignItems={'center'} ml={'auto'}>
                  <Stack gap={'4px'} alignItems={'center'}>
                    <Typography variant={'bodyMedium'}>{alarm.eventsCount}</Typography>
                    <Typography variant={'body1'}>EVENTS</Typography>
                  </Stack>
                  <Stack gap={'4px'} alignItems={'center'}>
                    <Typography variant={'bodyMedium'}>{alarm.machinesCount}</Typography>
                    <Typography variant={'body1'}>MACHINES</Typography>
                  </Stack>
                  <Stack gap={'4px'} alignItems={'center'}>
                    <Typography variant={'bodyMedium'}>{alarm.duration}</Typography>
                    <Typography variant={'body1'}>DURATION</Typography>
                  </Stack>
                  <IconButton variant={'contained'}>
                    <MoreIcon />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </FormikProvider>
  );
};
