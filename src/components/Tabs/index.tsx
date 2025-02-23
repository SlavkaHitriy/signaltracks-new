import { Tabs as MuiTabs, Tab, SxProps, Theme, Box, Typography } from '@mui/material';
import { memo, SyntheticEvent, useCallback, useState } from 'react';

import { CustomTab } from './components/CustomTab';
import * as React from 'react';

export interface ITabItem {
  id: number;
  label: string;
  amount?: number;
  element: React.ReactNode;
}

interface ITabsProps {
  items: ITabItem[];
  sx?: SxProps<Theme>;
}

export const Tabs: React.FC<ITabsProps> = memo(({ items, sx }) => {
  const [selectedTab, setSelectedTab] = useState(items[0].id);

  const handleTabChange = useCallback((_: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  }, []);

  return (
    <>
      <MuiTabs value={selectedTab} onChange={handleTabChange} sx={sx}>
        {items.map((item) => (
          <Tab
            {...(item.amount && {
              icon: (
                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    bgcolor: theme.palette.neutral[50]
                  })}
                >
                  <Typography variant={'caption'}>{item.amount}</Typography>
                </Box>
              ),
              iconPosition: 'end'
            })}
            label={item.label}
            id={`tab-${item.id}`}
            aria-controls={`tabpanel-${item.id}`}
            key={`tablist-item-${item.id}`}
            value={item.id}
          />
        ))}
      </MuiTabs>
      {items.map((item) => (
        <CustomTab value={selectedTab} id={item.id} key={`tab-content-${item.id}`}>
          {item.element}
        </CustomTab>
      ))}
    </>
  );
});
