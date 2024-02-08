import { render, screen } from '@testing-library/react';
import App from '../App';

// 这测试用例的目的是确保在渲染 App 组件时，页面中包含具有 "learn react" 文本的链接元素
test('renders learn react link', () => {
  render(<App />);
  // 使用 screen 对象的 getByText 函数，通过正则表达式匹配来获取包含 "learn react" 文本的 DOM 元素。找到的元素将被赋值给 linkElement 变量。
  const linkElement = screen.getByText(/learn react/i);
  // 使用 Jest 断言库的 expect 函数，检查 linkElement 是否在文档中。如果找到了匹配的元素，测试将通过；否则，测试将失败。
  expect(linkElement).toBeInTheDocument();
});
