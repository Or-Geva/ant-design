import * as React from 'react';

export type ThemeType = 'light' | 'dark';

export interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'light',
});

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: ThemeType;
  prefixCls?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const { children, theme: customTheme } = props;
  const [theme, setTheme] = React.useState<ThemeType>(customTheme || 'light');

  React.useEffect(() => {
    if (customTheme) {
      setTheme(customTheme);
    }
  }, [customTheme]);

  React.useEffect(() => {
    // Apply theme to document body
    document.body.setAttribute('data-theme', theme);

    // Store theme preference in localStorage
    localStorage.setItem('antd-theme', theme);
  }, [theme]);

  // On initial mount, check for stored theme preference
  React.useEffect(() => {
    const storedTheme = localStorage.getItem('antd-theme') as ThemeType;
    if (storedTheme && !customTheme) {
      setTheme(storedTheme);
    }
  }, [customTheme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

// Custom hook for using theme
export const useTheme = (): ThemeContextProps => React.useContext(ThemeContext);
