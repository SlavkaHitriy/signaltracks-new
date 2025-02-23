import * as React from 'react';
import { Chip, Stack, Typography } from '@mui/material';
import { ColorStatus } from '@components/ColorStatus';
import { Difference } from '@components/Difference';
import { IMachinesItem } from '@pages/Machines/config/items';

interface IMachinesItemProps {
  currentItem: IMachinesItem;
  itemInfo: IMachinesItem;
  setCurrentItem: React.Dispatch<React.SetStateAction<IMachinesItem>>;
}

export const MachinesItem: React.FC<IMachinesItemProps> = ({ currentItem, itemInfo, setCurrentItem }) => {
  return (
    <Stack
      sx={(theme) => ({
        cursor: 'pointer',
        borderBottom: theme.borders.default,
        ...(currentItem.id === itemInfo.id && {
          borderRight: `2px solid ${theme.palette.main}`
        })
      })}
      p="16px 12px 16px 24px"
      gap="16px"
      alignItems="flex-start"
      onClick={() => setCurrentItem(itemInfo)}
    >
      <Typography variant="h3">{itemInfo.title}</Typography>
      <Stack direction="row" alignItems="center" gap={1}>
        <ColorStatus size={8} code={itemInfo.status} />
        <Typography variant="footnote">First active: {itemInfo.firstActive}</Typography>
      </Stack>
      <Chip label={itemInfo.tag} />
      <Stack gap={1}>
        <Typography variant="footnote">Utilization Rate</Typography>
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant="h3">{itemInfo.utilizationRate}%</Typography>
          <Difference isDown={itemInfo.utilizationDifference < 0}>
            {itemInfo.utilizationDifference}pp from yesterday
          </Difference>
        </Stack>
      </Stack>
    </Stack>
  );
};
