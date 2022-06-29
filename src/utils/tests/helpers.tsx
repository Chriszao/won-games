import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

export function renderWithTheme(children: React.ReactElement): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
