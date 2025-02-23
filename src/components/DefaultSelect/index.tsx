import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import type { SelectProps } from '@mui/material';
import { memo, useEffect } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { useField } from 'formik';
import * as React from 'react';

type DefaultSelectProps = SelectProps & {
  amount?: number;
  defaultValue?: string;
};

export const DefaultSelect: React.FC<DefaultSelectProps> = memo(
  ({ sx, label, defaultValue = 'Active', name, amount }) => {
    const [field, _, { setValue }] = useField(name);

    useEffect(() => {
      if (defaultValue) {
        setValue(defaultValue);
      }
    }, [defaultValue]);

    return (
      <FormControl variant="standard" sx={{ width: '100%', alignItems: 'center', ...sx }}>
        <>
          {amount && (
            <Box
              sx={{
                position: 'absolute',
                right: 36,
                top: 10,
                zIndex: 1,
                p: '2px 6px',
                borderRadius: '8px',
                bgcolor: 'neutral.50',
                display: 'flex',
                pointerEvents: 'none'
              }}
            >
              <Typography variant="caption">{amount}</Typography>
            </Box>
          )}
          <Select
            label={label}
            IconComponent={ExpandMore}
            sx={{
              width: '100%',
              border: '1px solid #000',
              borderColor: 'neutral.50',
              borderRadius: '4px',
              height: 36,
              overflow: 'hidden',
              bgcolor: 'common.white',
              '&::before': {
                border: 'none'
              },
              '.MuiSelect-select': {
                py: '6px',
                fontSize: 14,
                pl: 1
              },
              '& .MuiSelect-icon': {
                right: '8px',
                zIndex: 1,
                color: 'neutral.400'
              },
              '.MuiInput-input': {
                paddingRight: `${amount ? 60 : 36}px !important`
              }
            }}
            defaultValue={defaultValue}
            {...field}
          >
            <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
            <MenuItem value={`${defaultValue} 1`}>{defaultValue} 1</MenuItem>
            <MenuItem value={`${defaultValue} 2`}>{defaultValue} 2</MenuItem>
          </Select>
        </>
      </FormControl>
    );
  }
);
