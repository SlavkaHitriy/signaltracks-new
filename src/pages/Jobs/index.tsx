import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { stringHealths, strings } from '@pages/Jobs/config/statistics';
import { SearchInput } from '@components/SearchInput';
import { DefaultSelect } from '@components/DefaultSelect';
import AddIcon from '@assets/icons/add.svg';
import { columns, rows } from './config/jobs';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import { utilizationCharts } from '@pages/Company/config/utilization-charts';
import { Difference } from '@components/Difference';
import { UtilizationChart } from '@pages/Company/components/UtilizationChart';

export const Jobs = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: '',
      filter: 'All'
    },
    onSubmit: () => {}
  });

  return (
    <FormikProvider value={formik}>
      <Stack gap={'38px'} flex={1} overflow={'hidden auto'} p={'24px'} bgcolor={'background.secondary'}>
        <Stack gap={'38px'} p={'24px'} borderRadius={'8px'} bgcolor={'common.white'}>
          <Stack direction={'row'} gap={'32px'} justifyContent={'space-between'}>
            <Stack gap={'16px'}>
              <Typography variant={'h4'}>Strings</Typography>
              <Stack gap={'48px'} justifyContent={'space-between'} direction={'row'}>
                {strings.map((str, idx) => (
                  <Stack key={`string-${idx}`} gap={'24px'}>
                    <Stack gap={'8px'}>
                      <Typography variant={'bodyMedium'}>{str.name}</Typography>
                      <Typography variant={'body1'}>{str.description}</Typography>
                    </Stack>
                    <Stack gap={'8px'}>
                      <Typography
                        variant={'h3'}
                        sx={{
                          ...(str.highlighted && {
                            color: 'error.main'
                          })
                        }}
                      >
                        {str.value}
                      </Typography>
                      {str.color && <Box width={'100%'} height={'4px'} bgcolor={str.color} />}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Stack gap={'16px'}>
              <Typography variant={'h4'}>String Health</Typography>
              <Stack gap={'48px'} justifyContent={'space-between'} direction={'row'}>
                {stringHealths.map((str, idx) => (
                  <Stack key={`string-${idx}`} gap={'24px'}>
                    <Stack gap={'8px'}>
                      <Typography variant={'bodyMedium'}>{str.name}</Typography>
                      <Typography variant={'body1'}>{str.description}</Typography>
                    </Stack>
                    <Stack gap={'8px'}>
                      <Typography variant={'h3'}>{str.value}</Typography>
                      {str.color && <Box width={'100%'} height={'4px'} bgcolor={str.color} />}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Grid2 container>
            {utilizationCharts.slice(0, 2).map((item, index) => (
              <Grid2 key={`utilization-chart-${item.id}-${index}`} borderRadius={'4px'} p={'16px'} size={6}>
                <Stack direction={'row'} gap={'24px'}>
                  <Stack gap={'12px'}>
                    <Typography variant={'bodyMedium'}>{item.title}</Typography>
                    <Typography variant={'h2'}>{item.value}</Typography>
                    <Difference isDown={item.isDown}>{item.difference}</Difference>
                  </Stack>
                  <Box flex={1}>
                    <UtilizationChart />
                  </Box>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Stack>

        <Stack
          sx={{
            '.MuiInputBase-root': {
              height: 44
            }
          }}
          direction={'row'}
          gap={'12px'}
        >
          <SearchInput
            sx={{
              flex: 1,
              bgcolor: 'common.white',
              borderRadius: '4px'
            }}
            name={'search'}
          />
          <DefaultSelect
            sx={{
              maxWidth: '300px'
            }}
            name={'filter'}
            defaultValue={'All'}
          />
          <Button
            // @ts-expect-error error
            color={'text.primary'}
            sx={{
              color: 'text.primary',
              textTransform: 'capitalize',
              fontSize: '14px',
              px: '36px !important'
            }}
            startIcon={<AddIcon />}
            variant={'outlined'}
          >
            Add Inspection Job
          </Button>
        </Stack>

        <DataGrid
          sx={{
            [`.${gridClasses.row}`]: {
              cursor: 'pointer'
            }
          }}
          columns={columns}
          rows={rows}
          onRowClick={(row) => navigate(`/jobs/${row.id}`)}
        />
      </Stack>
    </FormikProvider>
  );
};
