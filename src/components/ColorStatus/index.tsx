import { Box } from '@mui/material';
import * as React from 'react';
import { useMemo } from 'react';

export enum EColorStatus {
  SUCCESS = 1,
  WARNING = 2,
  ERROR = 3,
  INFO = 4
}

interface IColorStatusProps {
  code: EColorStatus;
  size?: number;
}

export const ColorStatus: React.FC<IColorStatusProps> = ({ code, size = 8 }) => {
  const statusColor = useMemo(() => {
    switch (code) {
      case EColorStatus.SUCCESS:
        return 'success.main';
      case EColorStatus.WARNING:
        return 'warning.main';
      case EColorStatus.ERROR:
        return 'error.main';
      case EColorStatus.INFO:
        return 'accents.blue';
      default:
        return 'error.main';
    }
  }, [code]);

  return (
    <Box
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: '50%',
        bgcolor: statusColor
      }}
    />
  );
};
