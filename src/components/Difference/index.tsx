import { Stack, SxProps, Theme, Typography } from '@mui/material';
import MiniArrowIcon from '@assets/icons/mini-arrow.svg';
import * as React from 'react';

interface IDifferenceProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  isDown?: boolean;
}

export const Difference: React.FC<IDifferenceProps> = ({ children, sx, isDown }) => {
  return (
    <Stack
      sx={{
        svg: {
          color: isDown ? 'error.main' : 'success.main',
          width: 8,
          height: 10,
          ...(isDown && {
            transform: 'rotate(180deg)'
          })
        },
        ...sx
      }}
      direction="row"
      alignItems="center"
      gap={0.5}
    >
      <MiniArrowIcon />
      <Typography color={isDown ? 'error.main' : 'success.main'} variant="footnoteMedium">
        {children}
      </Typography>
    </Stack>
  );
};
