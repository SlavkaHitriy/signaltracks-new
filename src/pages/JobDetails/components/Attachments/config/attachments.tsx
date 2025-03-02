import { GridColDef } from '@mui/x-data-grid';
import { IconButton, Stack } from '@mui/material';
import CloseIcon from '@assets/icons/close.svg';

export const columns: GridColDef[] = [
  {
    headerName: 'File Name',
    field: 'fileName',
    width: 200,
    flex: 1
  },
  {
    headerName: 'Uploaded By',
    field: 'uploadedBy',
    width: 150,
    flex: 1
  },
  {
    headerName: 'Last Updated',
    field: 'lastUpdated',
    width: 150,
    flex: 1
  },
  {
    headerName: '',
    field: 'actions',
    width: 120,
    renderCell: () => {
      return (
        <Stack direction={'row'} gap={'8px'} height={'100%'} alignItems={'center'} justifyContent={'flex-end'}>
          <IconButton
            variant={'contained'}
            sx={(theme) => ({
              flexShrink: 0,
              '&:hover': {
                bgcolor: theme.palette.neutral['400']
              },
              bgcolor: 'neutral.500'
            })}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      );
    }
  }
];

export const rows = [
  {
    id: 1,
    fileName: 'PS-PTECH39-4_875-x-2_687-4_000-0_33--S-RG2-Rev05.pdf',
    uploadedBy: 'Daniel Pacheco',
    lastUpdated: '03-12-2024 9:45 AM'
  },
  {
    id: 2,
    fileName: 'Generic Inspection Report.pdf',
    uploadedBy: 'Daniel Pacheco',
    lastUpdated: '03-12-2024 9:45 AM'
  }
];
