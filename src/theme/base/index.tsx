import { createTheme } from '@mui/material';

import { palette } from './palette';
import { typography } from './typography';
import shadows from '@mui/material/styles/shadows';

export const baseTheme = createTheme({
  palette,
  typography,
  shadows: {
    ...shadows,
    0: 'none',
    1: '0px 3px 6px rgba(0 0 0 / 16%)'
  },
  borders: {
    default: `1px solid ${palette.neutral[50]}`
  }
});
