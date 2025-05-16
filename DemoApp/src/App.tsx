import React from "react";
import { LineChart, BarChart, GaugeChart } from "chart-components";
import type { ChartData } from "chart-components";
import { Box, Grid, Typography } from "@mui/material";

const App: React.FC = () => {
  const lineData: ChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [10, 20, 15, 25, 30, 20, 15, 25, 30, 20, 15, 25],
    title: "月度趨勢",
  };

  const barData: ChartData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    values: [150, 200, 180, 220],
    title: "季度銷售",
  };

  const gaugeData: ChartData = {
    values: [75],
    maxValue: 100,
    title: "進度",
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Demo App - ChartComponents
      </Typography>
      <Grid container spacing={4}>
        <Typography variant="h6" gutterBottom>
          折線圖
        </Typography>
        <LineChart data={lineData} />

        <Typography variant="h6" gutterBottom>
          柱狀圖
        </Typography>
        <BarChart data={barData} />

        <Typography variant="h6" gutterBottom>
          儀表圖
        </Typography>
        <GaugeChart data={gaugeData} />
      </Grid>
    </Box>
  );
};

export default App;
