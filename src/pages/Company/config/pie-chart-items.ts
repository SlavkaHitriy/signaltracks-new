import { PieChartItem } from '@pages/Company/components/PieChart';
import { baseTheme } from '@/theme/base';

interface PieCharts {
  id: number;
  title: string;
  value: string;
  isLive?: boolean;
  difference?: string;
  isDown?: boolean;
  chartInfo: PieChartItem[];
}

export const pieCharts: PieCharts[] = [
  {
    id: 1,
    title: 'Production Volume',
    value: '6,699',
    difference: '250 parts',
    isDown: true,
    chartInfo: [
      {
        id: 1,
        value: 6699,
        color: baseTheme.palette.success.main,
        label: 'Good',
        featured: true
      },
      {
        id: 2,
        value: 331,
        color: baseTheme.palette.error.main,
        label: 'Bad'
      }
    ]
  },
  {
    id: 2,
    title: 'Machines Active',
    value: '14 / 23',
    isLive: true,
    chartInfo: [
      {
        id: 1,
        value: 14,
        color: baseTheme.palette.success.main,
        label: 'Active',
        featured: true
      },
      {
        id: 2,
        value: 6,
        color: baseTheme.palette.neutral[50],
        label: 'Idle'
      },
      {
        id: 3,
        value: 2,
        color: baseTheme.palette.error.main,
        label: 'In Fault'
      },
      {
        id: 4,
        value: 0,
        color: baseTheme.palette.main,
        label: 'Other'
      }
    ]
  },
  {
    id: 3,
    title: 'Machines in Production ',
    value: '15 / 23',
    isLive: true,
    chartInfo: [
      {
        id: 1,
        value: 15,
        color: baseTheme.palette.success.main,
        label: 'Production',
        featured: true
      },
      {
        id: 2,
        value: 4,
        color: baseTheme.palette.accents.yellow,
        label: 'In Setup'
      },
      {
        id: 3,
        value: 4,
        color: baseTheme.palette.neutral[50],
        label: 'No Activity'
      }
    ]
  }
];
