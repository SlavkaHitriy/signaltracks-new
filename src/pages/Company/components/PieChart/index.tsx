import React, { useMemo } from 'react';
import { PieChart as MuiPieChart } from '@mui/x-charts';
import { Box, Typography } from '@mui/material';

export interface PieChartItem {
  id: number;
  value: number;
  color: string;
  label: string;
  featured?: boolean;
}

interface PieChartProps {
  data: PieChartItem[];
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const featuredValuePercent = useMemo(() => {
    const featuredValue = data.find((item) => item.featured)?.value;
    const total = data.reduce((acc, item) => acc + item.value, 0);
    return featuredValue ? ((featuredValue / total) * 100).toFixed() : '';
  }, [data]);

  return (
    <Box position={'relative'}>
      {featuredValuePercent && (
        <Typography
          variant={'h4'}
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {featuredValuePercent}%
        </Typography>
      )}
      <MuiPieChart
        width={150}
        height={150}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        slotProps={{
          legend: {
            hidden: true
          }
        }}
        series={[
          {
            data,
            innerRadius: 50,
            outerRadius: 70,
            paddingAngle: 5,
            cornerRadius: 5
          }
        ]}
      />
    </Box>
  );
};
