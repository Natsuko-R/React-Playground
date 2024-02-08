const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // 累计布局偏移 (Cumulative Layout Shift)
      getFID(onPerfEntry); // 首次输入延迟 (First Input Delay)
      getFCP(onPerfEntry); // 首次内容绘制 (First Contentful Paint)
      getLCP(onPerfEntry); // 最大内容绘制 (Largest Contentful Paint)
      getTTFB(onPerfEntry); // 首字节时间 (Time to First Byte)
    });
  }
};

export default reportWebVitals;

// 使用 Web Vitals 库来测量关键的网页性能指标，并通过传入的回调函数 onPerfEntry 进行报告。这通常用于监测和优化 React 应用程序的性能。
