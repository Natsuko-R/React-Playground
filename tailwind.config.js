/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Just-in-Time 模式。只编译项目中实际用到的样式，而不是整个框架
  content: ["./src/**/**/*.{js,jsx,ts,tsx}", "./src/**/**/**/*.{js,jsx,ts,tsx}"], // 指定了 Tailwind CSS 在 JIT 模式下需要扫描的文件路径。在这里，它包括了以.js、.jsx、.ts、.tsx结尾的文件，用于查找项目中用到的样式。
  // 项目的自定义样式
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF", // 可在项目中使用 text-primary 或 bg-primary 类来应用这个颜色
      },
      // 定义了一些自定义的间距值，比如 '128'、'144'、'160' 等。这些可以在项目中用作边距、内边距
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '220': '55rem',
        '260': '65rem',
        '352': '88rem',
      }
    },
  },
  plugins: [],
};
