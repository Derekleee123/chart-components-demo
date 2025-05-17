# ChartComponents

可重用的 React 圖表組件庫，支援折線圖 (LineChart)、柱狀圖 (BarChart) 和儀表圖 (GaugeChart)，適用於數據可視化場景。

# 功能特點

- **模組化設計**：提供三個獨立組件
  - LineChart：折線圖，適用於展示趨勢變化
  - BarChart：柱狀圖，適用於數據比較
  - GaugeChart：儀表圖，適用於展示進度或達成率
- **錯誤處理**：內建數據驗證，顯示友好的錯誤提示
- **響應式設計**：使用 MUI 佈局，完美適配各種螢幕尺寸
- **TypeScript 支援**：包含完整的類型定義

## 安裝

```bash
npm install chart-components
```

## 使用範例

```tsx
import { LineChart } from "chart-components";

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      data: [10, 20, 30],
      label: "銷售額",
    },
  ],
};

function App() {
  return <LineChart data={data} />;
}
```
