# React 圖表展示專案

這是一個包含可重用圖表組件庫及其展示應用的完整專案，由 `ChartComponents`（圖表組件庫）和 `DemoApp`（展示應用）組成。

## 專案結構

```bash
├── ChartComponents/    # 圖表組件庫
└── DemoApp/           # 展示應用
```

## 快速開始

### 1. 安裝並建置 ChartComponents

```bash
# 進入 ChartComponents 目錄
cd ChartComponents

# 安裝依賴
npm install

# 建置組件庫
npm run build

# 建立本地連結
npm link
```

### 2. 安裝並運行 DemoApp

```bash
# 進入 DemoApp 目錄
cd DemoApp

# 安裝依賴
npm install

# 連結 chart-components
npm link chart-components

# 啟動開發伺服器
npm run dev
```
