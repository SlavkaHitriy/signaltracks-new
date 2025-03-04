import { Box, Button, IconButton, inputBaseClasses, Stack, tabsClasses, Typography } from '@mui/material';
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
import { Utilization } from '@pages/JobDetails/components/Utilization';
import { useState } from 'react';
import { DefaultInput } from '@components/DefaultInput';
import { DefaultSelect } from '@components/DefaultSelect';
import { ColorStatus, EColorStatus } from '@components/ColorStatus';

export const JobDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: '',
      filter: 'All',
      jobNumber: '1000',
      customer: 'CONOCPHILLIPS',
      serviceTicket: 'None',
      contractor: 'Latshaw Drilling',
      date: '12-23-2024 01:02 am',
      location: 'Logistics',
      wellName: 'PAD-1102',
      rigName: 'Latshaw 44',
      county: 'Lea',
      status: 'In Progress',
      inspectionCategory: 'DS-1 CAT4',
      pipeProfile: 'CET 54 5 1/2: S-135 Drill Pipe'
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
                      <Stack key={`info-${idx}`} gap={'12px'} width={'100%'}>
                        <Typography variant={'body1'}>{info.title}</Typography>
                        <DefaultInput
                          fullWidth
                          name={info.fieldName}
                          slotProps={{
                            input: {
                              readOnly: !isEditing
                            }
                          }}
                        />
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
                        <Stack gap={'12px'} width={'100%'} height={'100%'}>
                          <Typography
                            sx={{
                              flex: 1
                            }}
                            variant={'body1'}
                          >
                            {info.title}
                          </Typography>
                          {info.isSelect ? (
                            isEditing ? (
                              <DefaultSelect
                                sx={{
                                  [`.${inputBaseClasses.root}`]: {
                                    height: 36
                                  }
                                }}
                                name={info.fieldName}
                              />
                            ) : (
                              <Stack height={36} direction={'row'} alignItems={'center'} gap={'8px'}>
                                <Typography variant={'bodyMedium'}>In Progress</Typography>
                                <ColorStatus code={EColorStatus.INFO} />
                              </Stack>
                            )
                          ) : (
                            <DefaultInput
                              fullWidth
                              name={info.fieldName}
                              slotProps={{
                                input: {
                                  readOnly: !isEditing
                                }
                              }}
                            />
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
                  {isEditing && (
                    <Stack direction={'row'} justifyContent={'flex-end'} gap={'12px'}>
                      <Button color={'error'} variant={'text'} size={'small'} onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button color={'success'} size={'medium'} onClick={() => setIsEditing(false)}>
                        Save
                      </Button>
                    </Stack>
                  )}
                </Stack>
              )
            }}
            items={[
              {
                id: 1,
                label: 'Details',
                element: <Details setIsEditing={setIsEditing} />
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
              },
              {
                id: 5,
                label: 'Utilization',
                element: <Utilization />,
                hideStaticContent: true
              }
            ]}
          />
        </Stack>
      </Stack>
    </FormikProvider>
  );
};
