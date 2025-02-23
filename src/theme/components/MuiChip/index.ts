import type { Components, Theme } from '@mui/material';

import { baseTheme } from '../../base';

export const MuiChip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: {
      backgroundColor: baseTheme.palette.background.default,
      borderRadius: '16px',
      border: baseTheme.borders.default,
      padding: '6px 8px',
      height: 'auto'
    },
    label: {
      color: baseTheme.palette.neutral[400],
      fontSize: 10,
      lineHeight: '12px',
      padding: 0
    }
  }
};
