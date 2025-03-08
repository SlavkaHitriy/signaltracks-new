import { Box, Chip, Grid2, LinearProgress, linearProgressClasses, Stack, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { DefaultSelect } from '@components/DefaultSelect';
import AlertIcon from '@assets/icons/alert.svg';
import { CircleProgress } from '@components/CircleProgress';
import { utilizationProgresses } from '@pages/Dashboard/config/utilization-progresses';
import { Difference } from '@components/Difference';
import { UtilizationChart } from '@pages/Dashboard/components/UtilizationChart';
import { utilizationCharts } from '@pages/Dashboard/config/utilization-charts';
import { cycleTimes } from '@pages/Dashboard/config/cycle-times';
import { pieCharts } from '@pages/Dashboard/config/pie-chart-items';
import { PieChart } from '@pages/Dashboard/components/PieChart';

export const Dashboard = () => {
  const formik = useFormik({
    initialValues: {
      days: 'Yesterday'
    },
    onSubmit: () => {}
  });

  return (
    <FormikProvider value={formik}>
      <Box flex={1} overflow={'hidden auto'}>
        <Stack
          p={'20px 24px'}
          gap={'24px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
          sx={(theme) => ({
            borderBottom: theme.borders.default
          })}
        >
          <Typography variant={'h2'}>Company Dashboard</Typography>
          <Box width={200}>
            <DefaultSelect defaultValue="Yesterday" name="days" />
          </Box>
        </Stack>
        <Stack p={'20px 24px'} direction="row" gap={'24px'}>
          <Grid2 container spacing={'20px'} width={'100%'}>
            <Grid2 borderRadius={'4px'} sx={(theme) => ({ border: theme.borders.default })} size={12}>
              <Stack
                sx={(theme) => ({ borderBottom: theme.borders.default })}
                direction={'row'}
                gap={'8px'}
                alignItems={'center'}
                p={'16px'}
              >
                <Typography variant={'bodyMedium'}>Utilization: Lower than expected</Typography>
                <Stack color={'neutral.100'}>
                  <AlertIcon />
                </Stack>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  bgcolor={'neutral.50'}
                  width={18}
                  height={18}
                  borderRadius={'50%'}
                >
                  <Typography variant={'caption'}>6</Typography>
                </Box>
              </Stack>
              <Stack direction={'row'} p={'16px 24px'} gap={'12px'} justifyContent={'space-between'}>
                {utilizationProgresses.map((item, index) => (
                  <Stack alignItems={'center'} gap={'8px'} key={`utilization-progress-${item.id}-${index}`}>
                    <CircleProgress size={100} thickness={6} value={item.value} />
                    <Typography variant={'bodyMedium'}>Brother</Typography>
                    <Difference isDown={item.isDown}>{item.difference}</Difference>
                  </Stack>
                ))}
              </Stack>
            </Grid2>
            {utilizationCharts.map((item, index) => (
              <Grid2
                key={`utilization-chart-${item.id}-${index}`}
                borderRadius={'4px'}
                p={'16px'}
                sx={(theme) => ({ border: theme.borders.default })}
                size={6}
              >
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
            <Grid2 size={12}>
              <Stack direction={'row'} justifyContent={'flex-end'}>
                <Typography variant={'footnoteMedium'}>May 29, 2024 - May 30, 2024</Typography>
              </Stack>
            </Grid2>

            <Grid2 borderRadius={'4px'} sx={(theme) => ({ border: theme.borders.default })} size={12}>
              <Stack
                sx={(theme) => ({ borderBottom: theme.borders.default })}
                direction={'row'}
                gap={'8px'}
                alignItems={'center'}
                p={'16px'}
              >
                <Typography variant={'bodyMedium'}>Cycle Times: Slower than expected</Typography>
                <Stack color={'neutral.100'}>
                  <AlertIcon />
                </Stack>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  bgcolor={'neutral.50'}
                  width={18}
                  height={18}
                  borderRadius={'50%'}
                >
                  <Typography variant={'caption'}>7</Typography>
                </Box>
              </Stack>
              <Stack direction={'row'} p={'16px 24px'} gap={'12px'} justifyContent={'space-between'}>
                {cycleTimes.map((item, index) => (
                  <Stack gap={'8px'} key={`cycle-time-${item.id}-${index}`} flex={1}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant={'bodyMedium'}>{item.value}</Typography>
                      <Difference isDown={item.isDown}>{item.difference}</Difference>
                    </Stack>
                    <Box position={'relative'}>
                      <Typography
                        sx={{
                          position: 'absolute',
                          left: 4,
                          top: 4,
                          zIndex: 1,
                          color: 'common.white'
                        }}
                        variant={'caption'}
                      >
                        {item.value2}
                      </Typography>
                      <LinearProgress
                        sx={(theme) => ({
                          minWidth: 100,
                          height: 20,
                          [`.${linearProgressClasses.bar}`]: {
                            backgroundColor: theme.palette.accents.yellow
                          }
                        })}
                        variant={'determinate'}
                        value={100}
                      />
                    </Box>
                    <Box position={'relative'} mt={'-4px'}>
                      <Typography
                        sx={{
                          position: 'absolute',
                          left: 4,
                          top: 4,
                          zIndex: 1
                        }}
                        variant={'caption'}
                      >
                        {item.value3}
                      </Typography>
                      <LinearProgress
                        sx={(theme) => ({
                          minWidth: 100,
                          height: 20,
                          bgcolor: 'transparent',
                          [`.${linearProgressClasses.bar}`]: {
                            backgroundColor: theme.palette.neutral[50]
                          }
                        })}
                        variant={'determinate'}
                        value={80}
                      />
                    </Box>
                    <Typography variant={'footnoteMedium'}>{item.value4}</Typography>
                    <Box
                      sx={{
                        height: '1px',
                        bgcolor: 'neutral.50'
                      }}
                    />
                    <Typography variant={'footnote'}>{item.value5}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid2>
          </Grid2>
          <Stack gap={'16px'} width={360} flexShrink={0}>
            {pieCharts.map((item, index) => (
              <Stack
                key={`pie-item-${item.id}-${index}`}
                p={'16px'}
                borderRadius={'4px'}
                sx={(theme) => ({ border: theme.borders.default })}
                gap={'12px'}
              >
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                  <Typography variant={'bodyMedium'}>{item.title}</Typography>
                  {item.isLive && <Chip label={'LIVE'} />}
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={'16px'}>
                  <Typography variant={'h2'}>{item.value}</Typography>
                  {item.difference && <Difference isDown={item.isDown}>{item.difference}</Difference>}
                </Stack>
                <Stack direction={'row'} gap={'16px'} alignItems={'flex-start'}>
                  <PieChart data={item.chartInfo} />
                  <Stack gap={'12px'} flex={1}>
                    {item.chartInfo.map((chartItem, index) => (
                      <Stack
                        key={`chart-item-${chartItem.id}-${index}`}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        direction={'row'}
                        gap={'16px'}
                      >
                        <Typography variant={'footnoteMedium'}>{chartItem.label}</Typography>
                        <Chip
                          sx={{
                            backgroundColor: chartItem.color,
                            border: 0,
                            '.MuiChip-label': {
                              color: 'common.white',
                              px: '8px'
                            }
                          }}
                          label={chartItem.value}
                        />
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            ))}
            <Stack p={'16px'} borderRadius={'4px'} sx={(theme) => ({ border: theme.borders.default })} gap={'12px'}>
              <Typography variant={'bodyMedium'}>Downtime</Typography>
              <Stack direction={'row'} gap={'16px'} alignItems={'center'}>
                <Typography variant={'h2'}>214h 3m</Typography>
                <Difference isDown>26h 17m</Difference>
              </Stack>
              <Stack gap={'4px'}>
                <Stack gap={'12px'} direction={'row'} justifyContent={'space-between'}>
                  <Stack direction={'row'} gap={'12px'}>
                    <Typography variant={'footnoteMedium'}>Operator</Typography>
                    <Box width={'1px'} flexShrink={0} bgcolor={'neutral.400'} />
                    <Typography variant={'footnoteMedium'}>Manual Machining</Typography>
                  </Stack>
                  <Typography variant={'footnoteMedium'}>7h 31m</Typography>
                </Stack>
                <LinearProgress variant={'determinate'} value={100} />
              </Stack>
              <Box height={'1px'} flexShrink={0} bgcolor={'neutral.50'} />
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant={'footnoteMedium'}>Uncategorized</Typography>
                <Typography variant={'footnoteMedium'}>206h 31m</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </FormikProvider>
  );
};
