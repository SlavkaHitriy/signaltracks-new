import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { buttonBaseClasses, inputBaseClasses, Stack } from '@mui/material';

export const DateTimeRange = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row" gap={'8px'}>
        <DateTimePicker
          slotProps={{
            textField: {
              placeholder: 'Start Date'
            }
          }}
          sx={{
            [`.${inputBaseClasses.root}`]: {
              pr: 0,
              minWidth: 220
            },
            [`.${buttonBaseClasses.root}`]: {
              m: 0
            }
          }}
        />
        <DateTimePicker
          slotProps={{
            textField: {
              placeholder: 'Finish Date'
            }
          }}
          sx={{
            [`.${inputBaseClasses.root}`]: {
              pr: 0,
              minWidth: 220
            },
            [`.${buttonBaseClasses.root}`]: {
              m: 0
            }
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
};
