import * as React from 'react';
import classNames from 'classnames';
import { useTheme } from './context';
import Icon from '../icon';

export interface ThemeToggleProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ThemeToggle: React.FC<ThemeToggleProps> = props => {
  const { prefixCls = 'ant-theme-toggle', className, style } = props;
  const { theme, setTheme } = useTheme();

  const handleClick = React.useCallback(() => {
    if (setTheme) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  }, [theme, setTheme]);

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-dark`]: theme === 'dark',
  });

  return (
    <button
      type="button"
      className={cls}
      style={style}
      onClick={handleClick}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <Icon type="bulb" /> : <Icon type="bulb" />}
    </button>
  );
};

export default ThemeToggle;
