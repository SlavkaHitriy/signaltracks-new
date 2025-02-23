import { Box, TextField, TextFieldProps } from '@mui/material';
import { memo } from 'react';
import { useField } from 'formik';
import * as React from 'react';

type DefaultInputProps = TextFieldProps & {};

export const DefaultInput: React.FC<DefaultInputProps> = memo(({ multiline, ...otherProps }) => {
  const [field, meta] = useField(otherProps.name);

  console.log('field error', meta.error);

  return (
    <Box position="relative" width="100%">
      <TextField
        slotProps={{
          inputLabel: {
            shrink: true
          }
        }}
        multiline={multiline}
        minRows={multiline ? 5 : undefined}
        {...otherProps}
        {...field}
      />
    </Box>
  );
});
