import { Chip, IconButton, Stack, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { DefaultSelect } from '@components/DefaultSelect';
import { SearchInput } from '@components/SearchInput';
import { IMachinesItem, items } from '@pages/Machines/config/items';
import * as React from 'react';
import { MachinesItem } from '@pages/Machines/components/MachinesItem';
import { MachinesView } from '@pages/Machines/components/MachinesView';
import ArrowsIcon from '@assets/icons/arrows.svg';
import FilterIcon from '@assets/icons/filter.svg';

export const Machines = () => {
  const [currentItem, setCurrentItem] = React.useState<IMachinesItem>(items[0]);

  const formik = useFormik({
    initialValues: {
      machines: 'All Machines',
      search: ''
    },
    onSubmit: () => {}
  });

  return (
    <FormikProvider value={formik}>
      <Stack width="100%" direction="row">
        <Stack borderRight="1px solid" borderColor="neutral.50" width={300} flexShrink={0}>
          <Stack p="20px 12px 20px 24px" borderBottom="1px solid" borderColor="neutral.50" direction="row" gap="8px">
            <DefaultSelect defaultValue="All Machines" name="machines" amount={23} />
          </Stack>
          <Stack p="20px 12px 20px 24px" borderBottom="1px solid" borderColor="neutral.50" direction="row" gap="8px">
            <SearchInput name="search" />
            <IconButton>
              <ArrowsIcon />
            </IconButton>
            <IconButton>
              <FilterIcon />
            </IconButton>
          </Stack>
          <Stack
            p="12px 12px 12px 24px"
            borderBottom="1px solid"
            borderColor="neutral.50"
            direction="row"
            gap="12px"
            alignItems="center"
          >
            <Chip label="LIVE" sx={{ px: '16px' }} />
            <Typography variant="footnoteMedium">Compared to: Yesterday</Typography>
          </Stack>
          <Stack flex={1} overflow="auto">
            {items.map((item, idx) => (
              <MachinesItem
                key={`machine-item-${item.id}-${idx}`}
                itemInfo={item}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
              />
            ))}
          </Stack>
        </Stack>
        <MachinesView currentMachine={currentItem} />
      </Stack>
    </FormikProvider>
  );
};
