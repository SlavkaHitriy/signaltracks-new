import { Stack, Typography } from '@mui/material';
import { ColorStatus, EColorStatus } from '@components/ColorStatus';

export const jobInfo1 = [
  {
    title: 'Job No.',
    value: '1000'
  },
  {
    title: 'Customer',
    value: 'CONOCPHILLIPS'
  },
  {
    title: 'Service Ticket',
    value: 'None'
  },
  {
    title: 'Contractor',
    value: 'Latshaw Drilling'
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

export const jobInfo2 = [
  {
    title: 'Well Name',
    value: 'PAD-1102'
  },
  {
    title: 'Rig',
    value: 'Latshaw 44'
  },
  {
    title: 'County',
    value: 'Lea'
  },
  {
    title: 'Status',
    value: (
      <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
        <Typography variant={'bodyMedium'}>In Progress</Typography>
        <ColorStatus code={EColorStatus.INFO} />
      </Stack>
    )
  },
  {
    title: 'Inspection Category',
    value: 'DS-1 CAT4'
  },
  {
    title: 'Pipe Profile',
    value: 'CET 54 5 1/2: S-135 Drill Pipe',
    pipeLink: 'tempLink'
  }
];

export const stringHealths = [
  {
    name: 'AAA',
    value: '74',
    description: 'Over 100%',
    color: 'success.main'
  },
  {
    name: 'AA',
    value: '23',
    description: '99.9% - 95%',
    color: 'accents.blue'
  },
  {
    name: 'AA',
    value: '3',
    description: '94.9% - 90%',
    color: 'accents.lightGreen'
  },
  {
    name: 'EOL',
    value: '0',
    description: '89.9% - 80%',
    color: 'accents.orange'
  },
  {
    name: 'DBR/Downgrade',
    value: '0',
    description: 'DBR - 79.99% - Lower',
    color: 'error.main'
  }
];
