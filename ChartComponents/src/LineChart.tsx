import React from "react";
import { LineChart as MUILineChart } from "@mui/x-charts/LineChart";
import { Alert, Box } from "@mui/material";
import { ChartData } from "./types";

interface LineChartProps {
  data: ChartData;
}

export const LineChart: React.FC<LineChartProps> = ({ data }) => {
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

  // 確保所有值都是有效的數字
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
      <MUILineChart
        xAxis={[
          {
            data: data.labels || data.values.map((_, i) => i + 1),
            label: "X 軸",
            scaleType: "point",
          },
        ]}
        series={[
          {
            data: data.values,
            label: data.title || "數據",
            curve: "linear",
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
};
