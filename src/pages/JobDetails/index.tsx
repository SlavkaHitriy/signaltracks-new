import { Box, Button, IconButton, Stack, tabsClasses, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { jobInfo1, jobInfo2, stringHealths } from './config/statistics';
import ArrowIcon from '@assets/icons/arrow.svg';
import CloseIcon from '@assets/icons/close.svg';
import { Tabs } from '@components/Tabs';
import { useNavigate } from 'react-router';
import { CircleProgress } from '@components/CircleProgress';
import { Details } from '@pages/JobDetails/components/Details';
import { Notes } from '@pages/JobDetails/components/Notes';
import { Attachments } from '@pages/JobDetails/components/Attachments';
import { Map } from '@pages/JobDetails/components/Map';

export const JobDetails = () => {
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
        <Stack gap={'16px'}>
          <Tabs
            sx={{
              [`.${tabsClasses.flexContainer}`]: {
                border: 0,
                pl: 0
              }
            }}
            slots={{
              right: (
                <Stack direction={'row'} gap={'16px'}>
                  <Button
                    // @ts-expect-error error
                    color={'text.primary'}
                    sx={{
                      color: 'text.primary',
                      textTransform: 'capitalize',
                      fontSize: '12px',
                      px: '24px !important',
                      height: 34,
                      lineHeight: '20px'
                    }}
                    variant={'outlined'}
                  >
                    Print PDF
                  </Button>
                  <IconButton
                    variant={'contained'}
                    sx={(theme) => ({
                      flexShrink: 0,
                      '&:hover': {
                        bgcolor: theme.palette.neutral['400']
                      },
                      bgcolor: 'neutral.500'
                    })}
                    onClick={() => navigate('/jobs')}
                  >
                    <CloseIcon />
                  </IconButton>
                </Stack>
              ),
              content: (
                <Stack
                  gap={'32px'}
                  justifyContent={'space-between'}
                  p={'24px'}
                  borderRadius={'8px'}
                  bgcolor={'common.white'}
                >
                  <Stack direction={'row'} gap={'32px'}>
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
                    <Stack gap={'16px'}>
                      <Typography variant={'h4'}>String Information</Typography>
                      <Stack gap={'48px'} justifyContent={'space-between'} direction={'row'}>
                        <CircleProgress
                          size={110}
                          value={100}
                          thickness={3}
                          description={'String Life'}
                          sx={(theme) => ({
                            color: theme.palette.success.main
                          })}
                        />
                        <CircleProgress
                          size={110}
                          value={100}
                          thickness={3}
                          description={'Total Joints'}
                          sx={(theme) => ({
                            color: theme.palette.success.main
                          })}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                  <Box
                    sx={(theme) => ({
                      borderTop: theme.borders.default
                    })}
                  />
                  <Stack direction={'row'} gap={'32px'}>
                    {jobInfo1.map((info, idx) => (
                      <Stack key={`info-${idx}`} gap={'12px'} flex={1}>
                        <Typography variant={'body1'}>{info.title}</Typography>
                        <Typography variant={'bodyMedium'}>{info.value}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Box
                    sx={(theme) => ({
                      borderTop: theme.borders.default
                    })}
                  />
                  <Stack direction={'row'} gap={'32px'}>
                    {jobInfo2.map((info, idx) => (
                      <Stack key={`info-${idx}`} gap={'12px'} flex={1} direction={'row'} alignItems={'center'}>
                        <Stack gap={'12px'}>
                          <Typography variant={'body1'}>{info.title}</Typography>
                          {typeof info.value === 'string' ? (
                            <Typography variant={'bodyMedium'}>{info.value}</Typography>
                          ) : (
                            info.value
                          )}
                        </Stack>
                        {info.pipeLink && (
                          <IconButton
                            variant={'contained'}
                            sx={{
                              transform: 'rotate(180deg)'
                            }}
                          >
                            <ArrowIcon />
                          </IconButton>
                        )}
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              )
            }}
            items={[
              {
                id: 1,
                label: 'Details',
                element: <Details />
              },
              {
                id: 2,
                label: 'Attachments',
                element: <Attachments />
              },
              {
                id: 3,
                label: 'Notes',
                element: <Notes />
              },
              {
                id: 4,
                label: 'Map',
                element: <Map />
              }
            ]}
          />
        </Stack>
      </Stack>
    </FormikProvider>
  );
};
