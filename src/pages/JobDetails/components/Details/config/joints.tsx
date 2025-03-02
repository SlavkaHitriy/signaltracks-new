import { GridColDef } from '@mui/x-data-grid';
import { IconButton, LinearProgress, Stack, Typography } from '@mui/material';
import { ColorStatus, EColorStatus } from '@components/ColorStatus';
import ArrowIcon from '@assets/icons/arrow.svg';

export const columns: GridColDef[] = [
  {
    headerName: 'Joint',
    field: 'joint',
    width: 100
  },
  {
    headerName: 'Serial ID',
    field: 'serialId',
    width: 150
  },
  {
    headerName: 'Type',
    field: 'type',
    width: 100
  },
  {
    headerName: 'Life %',
    field: 'life',
    width: 200,
    renderCell: ({ value }) => {
      return (
        <Stack direction={'row'} alignItems={'center'} gap={'8px'} height={'100%'}>
          <Typography variant={'body1'}>{value}</Typography>
          <LinearProgress
            sx={{
              flex: 1,
              borderRadius: '4px'
            }}
            color={'success'}
            value={70}
            variant={'determinate'}
          />
        </Stack>
      );
    }
  },
  {
    headerName: 'Nom. Wall',
    field: 'nomWall',
    width: 150
  },
  {
    headerName: 'Min. Wall',
    field: 'minWall',
    width: 150
  },
  {
    headerName: '% Remaining',
    field: 'remaining',
    width: 130,
    renderCell: ({ value }) => {
      return (
        <Stack direction={'row'} alignItems={'center'} gap={'8px'} height={'100%'}>
          <Typography variant={'body1'}>{value.value}</Typography>
          <ColorStatus code={value.code} />
        </Stack>
      );
    }
  },
  {
    headerName: 'Box O.D.',
    field: 'boxOd',
    width: 100
  },
  {
    headerName: 'Box Tong Space',
    field: 'boxTongSpace',
    width: 150,
    renderCell: ({ value }) => {
      return (
        <Stack direction={'row'} alignItems={'center'} gap={'8px'} height={'100%'}>
          <Typography variant={'body1'}>{value.value}</Typography>
          <ColorStatus code={value.code} />
        </Stack>
      );
    }
  },
  {
    headerName: 'Pin I.D.',
    field: 'pinId',
    width: 150
  },
  {
    headerName: 'Pin Tong Space',
    field: 'pinTongSpace',
    width: 150,
    renderCell: ({ value }) => {
      return (
        <Stack direction={'row'} alignItems={'center'} gap={'8px'} height={'100%'}>
          <Typography variant={'body1'}>{value.value}</Typography>
          <ColorStatus code={value.code} />
        </Stack>
      );
    }
  },
  {
    headerName: 'Details',
    field: 'details',
    width: 100,
    renderCell: () => {
      return (
        <IconButton
          variant={'contained'}
          sx={{
            transform: 'rotate(180deg)'
          }}
        >
          <ArrowIcon />
        </IconButton>
      );
    }
  }
];

export const rows = [
  {
    id: 1,
    joint: '1',
    serialId: 'E32445',
    type: 'Rig',
    life: '103.3%',
    nomWall: '.361',
    minWall: '.373',
    remaining: {
      value: '103.3%',
      code: EColorStatus.SUCCESS
    },
    boxOd: '6 19/32”',
    boxTongSpace: {
      value: '7 7/8” 20%',
      code: EColorStatus.ERROR
    },
    pinId: '4.0”',
    pinTongSpace: {
      value: '10 1/4” 70%',
      code: EColorStatus.WARNING
    }
  },
  {
    id: 2,
    joint: '2',
    serialId: 'E32445',
    type: 'Rig',
    life: '103.3%',
    nomWall: '.361',
    minWall: '.373',
    remaining: {
      value: '103.3%',
      code: EColorStatus.SUCCESS
    },
    boxOd: '6 19/32”',
    boxTongSpace: {
      value: '7 7/8” 20%',
      code: EColorStatus.ERROR
    },
    pinId: '4.0”',
    pinTongSpace: {
      value: '10 1/4” 70%',
      code: EColorStatus.WARNING
    }
  },
  {
    id: 3,
    joint: '3',
    serialId: 'E32445',
    type: 'Rig',
    life: '103.3%',
    nomWall: '.361',
    minWall: '.373',
    remaining: {
      value: '103.3%',
      code: EColorStatus.SUCCESS
    },
    boxOd: '6 19/32”',
    boxTongSpace: {
      value: '7 7/8” 20%',
      code: EColorStatus.ERROR
    },
    pinId: '4.0”',
    pinTongSpace: {
      value: '10 1/4” 70%',
      code: EColorStatus.WARNING
    }
  },
  {
    id: 4,
    joint: '4',
    serialId: 'E32445',
    type: 'Rig',
    life: '103.3%',
    nomWall: '.361',
    minWall: '.373',
    remaining: {
      value: '103.3%',
      code: EColorStatus.SUCCESS
    },
    boxOd: '6 19/32”',
    boxTongSpace: {
      value: '7 7/8” 20%',
      code: EColorStatus.ERROR
    },
    pinId: '4.0”',
    pinTongSpace: {
      value: '10 1/4” 70%',
      code: EColorStatus.WARNING
    }
  },
  {
    id: 5,
    joint: '5',
    serialId: 'E32445',
    type: 'Rig',
    life: '103.3%',
    nomWall: '.361',
    minWall: '.373',
    remaining: {
      value: '103.3%',
      code: EColorStatus.SUCCESS
    },
    boxOd: '6 19/32”',
    boxTongSpace: {
      value: '7 7/8” 20%',
      code: EColorStatus.ERROR
    },
    pinId: '4.0”',
    pinTongSpace: {
      value: '10 1/4” 70%',
      code: EColorStatus.WARNING
    }
  },
  {
    id: 6,
    joint: '6',
    serialId: 'E32445',
    type: 'Rig',
    life: '103.3%',
    nomWall: '.361',
    minWall: '.373',
    remaining: {
      value: '103.3%',
      code: EColorStatus.SUCCESS
    },
    boxOd: '6 19/32”',
    boxTongSpace: {
      value: '7 7/8” 20%',
      code: EColorStatus.ERROR
    },
    pinId: '4.0”',
    pinTongSpace: {
      value: '10 1/4” 70%',
      code: EColorStatus.WARNING
    }
  },
  {
    id: 7,
    joint: '7',
    serialId: 'E32445',
    type: 'Rig',
    life: '103.3%',
    nomWall: '.361',
    minWall: '.373',
    remaining: {
      value: '103.3%',
      code: EColorStatus.SUCCESS
    },
    boxOd: '6 19/32”',
    boxTongSpace: {
      value: '7 7/8” 20%',
      code: EColorStatus.ERROR
    },
    pinId: '4.0”',
    pinTongSpace: {
      value: '10 1/4” 70%',
      code: EColorStatus.WARNING
    }
  }
];
