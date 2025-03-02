import { Stack, Typography } from '@mui/material';
import { ColorStatus, EColorStatus } from '@components/ColorStatus';

export const pipeInfo1 = [
  {
    title: 'Joint',
    value: '1'
  },
  {
    title: 'Length',
    value: '-'
  },
  {
    title: 'Serial',
    value: 'E21445'
  },
  {
    title: 'Type',
    value: 'Rig'
  },
  {
    title: 'Date',
    value: '12-23-2024 01:02 am'
  },
  {
    title: 'Location',
    value: 'Logistics'
  }
];

export const pipeInfo2 = [
  {
    title: 'Life %',
    value: '103.3%'
  },
  {
    title: 'Nominal Wall',
    value: '.361'
  },
  {
    title: 'Min. Wall',
    value: '.373'
  },
  {
    title: '% Remaining',
    value: '103.3%'
  },
  {
    title: 'Class',
    value: 'P'
  },
  {
    title: 'Pipe Profile',
    value: 'CET 54 5 1/2: S-135 Drill Pipe'
  }
];

export const pipeInfo3 = [
  {
    title: 'Box O.D.',
    value: '6 19/32”'
  },
  {
    title: 'Pin I.D.',
    value: 'La4.0.”'
  },
  {
    title: 'Box Bevel Diam',
    value: 'OK'
  },
  {
    title: 'Pin Bevel Diam',
    value: (
      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Typography variant={'bodyMedium'}>OK</Typography>
        <ColorStatus code={EColorStatus.INFO} />
      </Stack>
    )
  },
  {
    title: 'C’Bore Depth',
    value: 'OK'
  },
  {
    title: 'C’Bore Dia.',
    value: 'OK'
  }
];

export const pipeInfo4 = [
  {
    title: 'Box Tong Space',
    value: '7 7/8”'
  },
  {
    title: 'Life',
    value: (
      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Typography variant={'bodyMedium'}>20%</Typography>
        <ColorStatus code={EColorStatus.ERROR} />
      </Stack>
    )
  },
  {
    title: 'Pin Tong Space',
    value: '10 1/4”'
  },
  {
    title: 'Life',
    value: (
      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Typography variant={'bodyMedium'}>70%</Typography>
        <ColorStatus code={EColorStatus.WARNING} />
      </Stack>
    )
  },
  {
    title: 'Box Depth',
    value: 'OK'
  },
  {
    title: 'Pin Depth',
    value: 'OK'
  }
];

export const pipeInfo5 = [
  {
    title: 'Pin Neck Length',
    value: 'OK'
  }
];
