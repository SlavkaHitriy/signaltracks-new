import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    headerName: 'First Name',
    field: 'firstName',
    width: 200,
    flex: 1
  },
  {
    headerName: 'Last Name',
    field: 'lastName',
    width: 150,
    flex: 1
  },
  {
    headerName: 'Address',
    field: 'address',
    width: 150,
    flex: 1
  },
  {
    headerName: 'Other Info',
    field: 'otherInfo',
    width: 150,
    flex: 1
  }
];

export const rows = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    address: '1234 Main St',
    otherInfo: 'Some other info'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    address: '1234 Main St',
    otherInfo: 'Some other info'
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Smith',
    address: '1234 Main St',
    otherInfo: 'Some other info'
  }
];
