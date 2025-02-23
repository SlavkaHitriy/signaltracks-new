import type { Components, Theme } from '@mui/material';
import { baseTheme } from '@/theme/base';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    variant: 'outlined',
    size: 'small'
  },
  variants: [
    {
      props: { variant: 'outlined' },
      style: {
        border: baseTheme.borders.default,
        color: baseTheme.palette.neutral[400],
        borderRadius: '4px'
      }
    },
    {
      props: { variant: 'contained' },
      style: {
        color: baseTheme.palette.neutral[400]
      }
    }
  ],
  styleOverrides: {
    root: {
      flexShrink: 0
    },
    sizeLarge: {
      svg: {
        width: '24px',
        height: '24px'
      }
    }
  }
};
