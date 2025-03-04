import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    headerName: 'Name',
    field: 'name',
    width: 200
  },
  {
    headerName: 'Good vs Exp',
    field: 'goodVsExp',
    width: 150
  },
  {
    headerName: 'Rejected',
    field: 'rejected',
    width: 150
  },
  {
    headerName: 'OEE %',
    field: 'oee',
    width: 150
  },
  {
    headerName: 'Utilization %',
    field: 'utilization',
    width: 150
  },
  {
    headerName: 'Setup performance',
    field: 'setupPerformance',
    width: 200
  },
  {
    headerName: 'Cycle time performance',
    field: 'cycleTimePerformance',
    width: 200
  },
  {
    headerName: 'Baseline cycle Tir',
    field: 'baselineCycleTir',
    width: 200
  }
];

export const rows = [
  {
    id: 1,
    name: '106190 OP2',
    goodVsExp: '2/0',
    rejected: '0',
    oee: 'N/A%',
    utilization: '17.1%',
    setupPerformance: '12h 34m / N/A',
    cycleTimePerformance: 'N/A / N/A (0s)',
    baselineCycleTir: 'N/A (0s)'
  },
  {
    id: 2,
    name: '106190 OP3',
    goodVsExp: '2/0',
    rejected: '0',
    oee: 'N/A%',
    utilization: '17.1%',
    setupPerformance: '12h 34m / N/A',
    cycleTimePerformance: 'N/A / N/A (0s)',
    baselineCycleTir: 'N/A (0s)'
  },
  {
    id: 3,
    name: '106190 OP4',
    goodVsExp: '2/0',
    rejected: '0',
    oee: 'N/A%',
    utilization: '17.1%',
    setupPerformance: '12h 34m / N/A',
    cycleTimePerformance: 'N/A / N/A (0s)',
    baselineCycleTir: 'N/A (0s)'
  }
];
