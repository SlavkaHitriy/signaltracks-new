import { IconButton, Stack, SxProps, Theme } from '@mui/material';
import { DefaultInput } from '@components/DefaultInput';
import SearchIcon from '@assets/icons/search.svg';
import ArrowsIcon from '@assets/icons/arrows.svg';
import FilterIcon from '@assets/icons/filter.svg';
import * as React from 'react';

interface SearchInputProps {
  sx?: SxProps<Theme>;
  name: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ sx, name }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Stack direction="row" sx={sx} component="form" onSubmit={handleSubmit} gap={'8px'}>
      <DefaultInput
        sx={{
          svg: {
            color: 'neutral.100'
          }
        }}
        slotProps={{
          input: {
            startAdornment: <SearchIcon />
          }
        }}
        variant={'outlined'}
        placeholder="Search..."
        name={name}
      />
      <IconButton>
        <ArrowsIcon />
      </IconButton>
      <IconButton>
        <FilterIcon />
      </IconButton>
    </Stack>
  );
};
