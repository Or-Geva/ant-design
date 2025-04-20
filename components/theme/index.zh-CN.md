---
category: Components
type: 其他
title: 主题
subtitle: Theme
cols: 1
---

Ant Design 的主题组件，提供暗黑模式支持。

## 何时使用

- 当你想为用户提供暗黑模式选项时
- 当你需要在应用中支持不同的颜色主题时

## API

### ThemeProvider

| 参数     | 说明     | 类型                  | 默认值    |
| -------- | -------- | --------------------- | --------- |
| theme    | 当前主题 | `'light'` \| `'dark'` | `'light'` |
| children | 子组件   | ReactNode             | -         |

### ThemeToggle

| 参数      | 说明          | 类型          | 默认值 |
| --------- | ------------- | ------------- | ------ |
| className | 额外的 CSS 类 | string        | -      |
| style     | 额外的样式    | CSSProperties | -      |

### useTheme

一个 React hook，提供对当前主题的访问和更改主题的函数。

```jsx
const { theme, setTheme } = useTheme();
```

## 设计考虑

暗黑主题的设计遵循以下原则：

1. **减少光线发射**：暗色背景减少低光环境下的眼睛疲劳
2. **足够的对比度**：保持可读性和 WCAG 合规性
3. **与品牌一致**：使用与亮色主题相同的主色调
4. **深度和层次**：使用暗色的细微变化来保持视觉层次
