import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './config/attachments';

export const Attachments = () => {
  return (
    <Box pt={'24px'}>
      <DataGrid columns={columns} rows={rows} />
    </Box>
  );
};
