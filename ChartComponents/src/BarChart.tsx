import React from "react";
import { BarChart as MUIBarChart } from "@mui/x-charts/BarChart";
import { Alert, Box } from "@mui/material";
import { ChartData } from "./types";

interface BarChartProps {
  data: ChartData;
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  if (!data.values || !Array.isArray(data.values) || data.values.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">無效的數據格式：請提供數值數組</Alert>
      </Box>
    );
  }

  if (data.labels && data.labels.length !== data.values.length) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">標籤數量與數據數量不匹配</Alert>
      </Box>
    );
  }

  const validValues = data.values.every(
    (val) => typeof val === "number" && !isNaN(val) && isFinite(val)
  );

  if (!validValues) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">數據包含無效的數值</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", height: 400, p: 2 }}>
      <MUIBarChart
        xAxis={[
          {
            data: data.labels || data.values.map((_, i) => i + 1),
            label: "X 軸",
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: data.values,
            label: data.title || "數據",
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
};
