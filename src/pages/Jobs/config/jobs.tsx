import { GridColDef } from '@mui/x-data-grid';
import { Stack, Typography } from '@mui/material';
import { ColorStatus, EColorStatus } from '@components/ColorStatus';

export const columns: GridColDef[] = [
  {
    headerName: 'Job No.',
    field: 'jobNumber',
    width: 160
  },
  {
    headerName: 'Customer',
    field: 'customer',
    width: 150
  },
  {
    headerName: 'Date',
    field: 'date',
    width: 150
  },
  {
    headerName: 'Status',
    field: 'status',
    width: 150,
    renderCell: ({ value }) => {
      return (
        <Stack direction={'row'} alignItems={'center'} gap={'8px'} height={'100%'}>
          <Typography variant={'body1'}>{value.name}</Typography>
          <ColorStatus code={value.code} />
        </Stack>
      );
    }
  },
  {
    headerName: 'Location',
    field: 'location',
    width: 150
  },
  {
    headerName: 'Well Name',
    field: 'wellName',
    width: 200
  },
  {
    headerName: 'Joint QTY',
    field: 'jointQty',
    width: 200
  },
  {
    headerName: 'Footage',
    field: 'footage',
    width: 200
  }
];

export const rows = [
  {
    id: 1,
    jobNumber: '1000',
    customer: 'CONOCPHILLIPS',
    date: '12-23-2024',
    status: { name: 'In progress', code: EColorStatus.INFO },
    location: 'Logistics',
    wellName: 'PAD-1102',
    jointQty: 100,
    footage: 0
  },
  {
    id: 2,
    jobNumber: '1000',
    customer: 'CONOCPHILLIPS',
    date: '12-23-2024',
    status: { name: 'Delivered', code: EColorStatus.SUCCESS },
    location: 'Logistics',
    wellName: 'PAD-1102',
    jointQty: 100,
    footage: 0
  }
];
