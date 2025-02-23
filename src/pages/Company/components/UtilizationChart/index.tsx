import { Box, useTheme } from '@mui/material';
import { LineChart, markElementClasses } from '@mui/x-charts';
import { useMemo } from 'react';

export const UtilizationChart = () => {
  const theme = useTheme();

  const startDate = new Date('2024-03-10');
  const endDate = new Date('2024-03-11');

  const xAxisDates = useMemo(
    () =>
      Array.from(
        { length: ((endDate as unknown as number) - (startDate as unknown as number)) / (1000 * 60 * 60 * 24) + 5 },
        (_, i) => new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000)
      ),
    []
  );

  const seriesData = useMemo(() => xAxisDates.map(() => Math.random() * 100), [xAxisDates]);
  const seriesData2 = useMemo(() => xAxisDates.map(() => Math.random() * 100), [xAxisDates]);

  return (
    <Box>
      <LineChart
        sx={{
          '.MuiLineElement-series-uvId': {
            strokeDasharray: '5 5'
          },
          [`.${markElementClasses.root}`]: {
            display: 'none'
          },
          '.MuiChartsAxis-directionX .MuiChartsAxis-tickContainer': {
            '&:first-of-type, &:last-of-type': {
              display: 'none'
            }
          }
        }}
        xAxis={[
          {
            scaleType: 'utc',
            data: [...xAxisDates],
            disableTicks: true,
            disableLine: true
          }
        ]}
        yAxis={[
          {
            disableTicks: true,
            disableLine: true,
            min: 0,
            max: 100,
            valueFormatter: (value) => `${value}%`
          }
        ]}
        series={[
          {
            data: seriesData,
            color: theme.palette.accents.blue
          },
          {
            data: seriesData2,
            id: 'uvId',
            color: theme.palette.accents.blue
          }
        ]}
        height={200}
        margin={{ top: 5, bottom: 20, right: 0 }}
        skipAnimation
        grid={{
          vertical: false,
          horizontal: true
        }}
      />
    </Box>
  );
};
