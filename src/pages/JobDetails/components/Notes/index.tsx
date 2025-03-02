import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './config/notes';

export const Notes = () => {
  return (
    <Box pt={'24px'}>
      <DataGrid columns={columns} rows={rows} />
    </Box>
  );
};
