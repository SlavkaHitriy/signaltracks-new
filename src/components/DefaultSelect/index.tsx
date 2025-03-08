import { Box, FormControl, MenuItem, Typography } from '@mui/material';
import type { SelectProps } from '@mui/material';
import { memo, useEffect } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { useField } from 'formik';
import * as React from 'react';
import { DefaultInput } from '@components/DefaultInput';

type DefaultSelectProps = SelectProps & {
  amount?: number;
  defaultValue?: string;
  values?: string[];
};

export const DefaultSelect: React.FC<DefaultSelectProps> = memo(({ sx, label, defaultValue, name, amount, values }) => {
  const [field, _, { setValue }] = useField(name);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const menuItems = values || [defaultValue, `${defaultValue} 1`, `${defaultValue} 2`];

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
        <DefaultInput
          sx={{
            bgcolor: 'common.white',
            borderRadius: '4px'
          }}
          label={label}
          slotProps={{
            select: {
              IconComponent: ExpandMore
            }
          }}
          defaultValue={defaultValue}
          select
          {...field}
        >
          {menuItems.map((item, idx) => (
            <MenuItem key={`select-${idx}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </DefaultInput>
      </>
    </FormControl>
  );
});
