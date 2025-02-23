import { EColorStatus } from '@components/ColorStatus';

export interface IMachinesItem {
  id: string;
  title: string;
  firstActive: string;
  tag: string;
  utilizationRate: number;
  utilizationDifference: number;
  status: EColorStatus;
}

export const items: IMachinesItem[] = [
  {
    id: '1',
    title: 'Brother',
    firstActive: '6:00 AM',
    tag: '106338 OP2',
    utilizationRate: 81.7,
    utilizationDifference: 81.7,
    status: EColorStatus.SUCCESS
  },
  {
    id: '2',
    title: 'Mazak',
    firstActive: '6:23 AM',
    tag: 'No Operation',
    utilizationRate: 84.5,
    utilizationDifference: 69.2,
    status: EColorStatus.SUCCESS
  },
  {
    id: '3',
    title: 'Turning Center',
    firstActive: '6:10 AM',
    tag: '10313858',
    utilizationRate: 72.9,
    utilizationDifference: -5.2,
    status: EColorStatus.WARNING
  },
  {
    id: '4',
    title: 'Brother',
    firstActive: '6:00 AM',
    tag: '106338 OP2',
    utilizationRate: 81.7,
    utilizationDifference: 81.7,
    status: EColorStatus.ERROR
  },
  {
    id: '5',
    title: 'Vertical Mill, Palletized',
    firstActive: '6:10 AM',
    tag: '10313858',
    utilizationRate: 72.9,
    utilizationDifference: -5.2,
    status: EColorStatus.SUCCESS
  }
];
