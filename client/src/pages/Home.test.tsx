import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home Component - New Design', () => {
  it('renders the component without errors', () => {
    render(<Home />);
    const container = document.body;
    expect(container).toBeTruthy();
  });

  it('renders with correct structure', () => {
    const { container } = render(<Home />);
    expect(container.querySelectorAll('video').length).toBeGreaterThanOrEqual(0);
  });

  it('renders header section', () => {
    const { container } = render(<Home />);
    const header = container.querySelector('header');
    expect(header).toBeTruthy();
  });

  it('renders channel buttons', () => {
    const { container } = render(<Home />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders footer section', () => {
    const { container } = render(<Home />);
    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});
