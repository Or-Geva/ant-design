---
category: Components
type: Other
title: Theme
cols: 1
---

Theme components for Ant Design that provide dark mode support.

## When To Use

- When you want to provide users with a dark mode option
- When you need to support different color themes in your application

## API

### ThemeProvider

| Property | Description       | Type                  | Default   |
| -------- | ----------------- | --------------------- | --------- |
| theme    | The current theme | `'light'` \| `'dark'` | `'light'` |
| children | Child components  | ReactNode             | -         |

### ThemeToggle

| Property  | Description          | Type          | Default |
| --------- | -------------------- | ------------- | ------- |
| className | Additional CSS class | string        | -       |
| style     | Additional style     | CSSProperties | -       |

### useTheme

A React hook that provides access to the current theme and a function to change it.

```jsx
const { theme, setTheme } = useTheme();
```

## Design Considerations

The dark theme is designed with the following principles:

1. **Reduced light emission**: Dark backgrounds to reduce eye strain in low-light environments
2. **Sufficient contrast**: Maintaining readability and WCAG compliance
3. **Consistent with brand**: Using the same primary colors as the light theme
4. **Depth and hierarchy**: Using subtle variations in dark colors to maintain visual hierarchy
