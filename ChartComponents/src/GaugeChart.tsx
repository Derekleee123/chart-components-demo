import React from "react";
import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { ChartData } from "./types";

interface GaugeChartProps {
  data: ChartData;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({ data }) => {
  if (!data.values || !Array.isArray(data.values) || data.values.length !== 1) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">無效的數據格式：請提供單一數值</Alert>
      </Box>
    );
  }

  const value = data.values[0];
  if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">數據包含無效的數值</Alert>
      </Box>
    );
  }

  if (
    !data.maxValue ||
    typeof data.maxValue !== "number" ||
    data.maxValue <= 0
  ) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">請提供有效的 maxValue（大於 0）</Alert>
      </Box>
    );
  }

  if (value < 0 || value > data.maxValue) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">數值必須在 0 和 maxValue 之間</Alert>
      </Box>
    );
  }

  const percentage = (value / data.maxValue) * 100;

  return (
    <Box sx={{ width: "100%", height: 400, p: 2, textAlign: "center" }}>
      <Typography variant="h6">{data.title || "儀表圖"}</Typography>
      <Box sx={{ position: "relative", display: "inline-flex", mt: 2 }}>
        <CircularProgress
          variant="determinate"
          value={percentage}
          size={200}
          thickness={5}
          sx={{
            color:
              percentage > 75 ? "red" : percentage > 50 ? "orange" : "green",
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" component="div" color="text.secondary">
            {`${Math.round(percentage)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
