import { Box, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router';
import { IMenuItem } from '@components/Sidebar/data/menu';

export const SidebarItem = ({ data, isOpened }: { data: IMenuItem; isOpened: boolean }) => {
  return (
    <NavLink to={data.link}>
      {({ isActive }) => (
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          position="relative"
          px={1.5}
          py={1}
          mx={isOpened ? 2 : 1.5}
          sx={{
            pointerEvents: isActive ? 'none' : 'auto',
            transition: 'all 0.3s ease',
            bgcolor: isActive ? 'background.default' : 'transparent',
            borderRadius: '2px',
            ...(!isOpened && {
              justifyContent: 'center'
            }),
            '&:hover': {
              color: 'common.white'
            }
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              color: isActive ? 'neutral.500' : 'common.white',
              svg: {
                width: 24,
                height: 24
              }
            }}
          >
            {data.icon}
          </Stack>
          <Box
            sx={{
              transition: 'all 0.15s ease',
              transitionDelay: isOpened ? '1s' : '0s',
              display: isOpened ? 'block' : 'none',
              height: isOpened ? '20px' : 0
            }}
          >
            <Typography
              sx={{
                transition: 'all 0.15s ease',
                color: isActive ? '#051219' : 'common.white'
              }}
              fontWeight={500}
              fontSize={14}
              whiteSpace="nowrap"
            >
              {data.title}
            </Typography>
          </Box>
        </Stack>
      )}
    </NavLink>
  );
};
