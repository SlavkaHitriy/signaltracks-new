import { CircularProgress, CircularProgressProps, Stack, Typography } from '@mui/material';
import * as React from 'react';

export const CircleProgress: React.FC<CircularProgressProps> = ({ size, value, thickness, ...props }) => {
  return (
    <Stack position={'relative'} alignItems={'center'} justifyContent={'center'} width={size} height={size}>
      <CircularProgress
        sx={(theme) => ({
          color: theme.palette.accents.blue
        })}
        size={size}
        value={value}
        thickness={thickness}
        {...props}
        variant="determinate"
      />
      <CircularProgress
        size={size}
        thickness={thickness}
        sx={(theme) => ({
          position: 'absolute',
          color: theme.palette.grey[200],
          zIndex: -1
        })}
        value={100}
        variant="determinate"
      />
      <Typography
        sx={{
          position: 'absolute'
        }}
        variant={'h4'}
      >
        {value}%
      </Typography>
    </Stack>
  );
};
