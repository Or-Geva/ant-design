import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider, ThemeToggle, useTheme } from '..';

describe('Theme', () => {
  const originalSetAttribute = document.body.setAttribute;
  let mockSetAttribute;
  let mockLocalStorage;

  beforeEach(() => {
    // Mock localStorage
    mockLocalStorage = {
      getItem: jest.fn(() => null),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
    });

    // Mock document.body.setAttribute
    mockSetAttribute = jest.fn();
    document.body.setAttribute = mockSetAttribute;
  });

  afterEach(() => {
    // Restore original setAttribute
    document.body.setAttribute = originalSetAttribute;
  });

  it('ThemeProvider should work', () => {
    const wrapper = mount(
      <ThemeProvider theme="dark">
        <div>Test</div>
      </ThemeProvider>,
    );

    expect(wrapper.find('div').text()).toBe('Test');
    expect(mockSetAttribute).toHaveBeenCalledWith('data-theme', 'dark');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('antd-theme', 'dark');
  });

  it('ThemeToggle should work', () => {
    // Create a test component that uses the theme context
    const TestComponent = () => {
      const { theme } = useTheme();
      return (
        <div>
          <span className="theme-value">{theme}</span>
          <ThemeToggle />
        </div>
      );
    };

    const wrapper = mount(
      <ThemeProvider theme="light">
        <TestComponent />
      </ThemeProvider>,
    );

    // Initial theme should be light
    expect(wrapper.find('.theme-value').text()).toBe('light');

    // Click the toggle button
    wrapper.find('button').simulate('click');

    // Theme should be changed to dark
    expect(mockSetAttribute).toHaveBeenCalledWith('data-theme', 'dark');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('antd-theme', 'dark');
  });

  it('should load theme from localStorage', () => {
    // Mock localStorage to return a stored theme
    mockLocalStorage.getItem.mockImplementation(() => 'dark');

    mount(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>,
    );

    expect(mockLocalStorage.getItem).toHaveBeenCalledWith('antd-theme');
    expect(mockSetAttribute).toHaveBeenCalledWith('data-theme', 'dark');
  });
});
