import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { SearchInput } from '@components/SearchInput';
import { DefaultSelect } from '@components/DefaultSelect';
import EditIcon from '@assets/icons/edit.svg';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import { columns, rows } from './config/joints';
import { useState } from 'react';
import {
  pipeInfo1,
  pipeInfo2,
  pipeInfo3,
  pipeInfo4,
  pipeInfo5
} from '@pages/JobDetails/components/Details/config/pipeInfo';
import CloseIcon from '@assets/icons/close.svg';

export const Details = () => {
  const [selectedPipe, setSelectedPipe] = useState<GridRowParams | null>(null);

  return (
    <Stack gap={'38px'} pt={'24px'}>
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
          startIcon={<EditIcon />}
          variant={'outlined'}
        >
          Edit Inspection Job
        </Button>
      </Stack>

      {selectedPipe && (
        <Stack gap={'24px'} justifyContent={'space-between'} p={'24px'} borderRadius={'8px'} bgcolor={'common.white'}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant={'h3'}>Pipe Detail</Typography>
            <IconButton
              variant={'contained'}
              sx={(theme) => ({
                flexShrink: 0,
                '&:hover': {
                  bgcolor: theme.palette.neutral['400']
                },
                bgcolor: 'neutral.500'
              })}
              onClick={() => setSelectedPipe(null)}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack gap={'16px'}>
            <Typography variant={'h4'}>Joint Details</Typography>
            <Stack direction={'row'} gap={'32px'}>
              {pipeInfo1.map((info, idx) => (
                <Stack key={`info-${idx}`} gap={'12px'} flex={1} direction={'row'} alignItems={'center'}>
                  <Stack gap={'12px'}>
                    <Typography variant={'body1'}>{info.title}</Typography>
                    {typeof info.value === 'string' ? (
                      <Typography variant={'bodyMedium'}>{info.value}</Typography>
                    ) : (
                      info.value
                    )}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Box
            sx={(theme) => ({
              borderTop: theme.borders.default
            })}
          />
          <Stack gap={'16px'}>
            <Typography variant={'h4'}>Tube Condition</Typography>
            <Stack direction={'row'} gap={'32px'}>
              {pipeInfo2.map((info, idx) => (
                <Stack key={`info-${idx}`} gap={'12px'} flex={1} direction={'row'} alignItems={'center'}>
                  <Stack gap={'12px'}>
                    <Typography variant={'body1'}>{info.title}</Typography>
                    {typeof info.value === 'string' ? (
                      <Typography variant={'bodyMedium'}>{info.value}</Typography>
                    ) : (
                      info.value
                    )}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Box
            sx={(theme) => ({
              borderTop: theme.borders.default
            })}
          />
          <Stack gap={'16px'}>
            <Typography variant={'h4'}>Pin & Box Connection</Typography>
            <Stack direction={'row'} gap={'32px'}>
              {pipeInfo3.map((info, idx) => (
                <Stack key={`info-${idx}`} gap={'12px'} flex={1} direction={'row'} alignItems={'center'}>
                  <Stack gap={'12px'}>
                    <Typography variant={'body1'}>{info.title}</Typography>
                    {typeof info.value === 'string' ? (
                      <Typography variant={'bodyMedium'}>{info.value}</Typography>
                    ) : (
                      info.value
                    )}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Box
            sx={(theme) => ({
              borderTop: theme.borders.default
            })}
          />
          <Stack gap={'16px'}>
            <Stack direction={'row'} gap={'32px'}>
              {pipeInfo4.map((info, idx) => (
                <Stack key={`info-${idx}`} gap={'12px'} flex={1} direction={'row'} alignItems={'center'}>
                  <Stack gap={'12px'}>
                    <Typography variant={'body1'}>{info.title}</Typography>
                    {typeof info.value === 'string' ? (
                      <Typography variant={'bodyMedium'}>{info.value}</Typography>
                    ) : (
                      info.value
                    )}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Box
            sx={(theme) => ({
              borderTop: theme.borders.default
            })}
          />
          <Stack gap={'16px'}>
            <Stack direction={'row'} gap={'32px'}>
              {pipeInfo5.map((info, idx) => (
                <Stack key={`info-${idx}`} gap={'12px'} flex={1} direction={'row'} alignItems={'center'}>
                  <Stack gap={'12px'}>
                    <Typography variant={'body1'}>{info.title}</Typography>
                    {typeof info.value === 'string' ? (
                      <Typography variant={'bodyMedium'}>{info.value}</Typography>
                    ) : (
                      info.value
                    )}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      )}
      {!selectedPipe && <DataGrid columns={columns} rows={rows} onRowClick={setSelectedPipe} />}
    </Stack>
  );
};
