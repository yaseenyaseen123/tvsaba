import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('Home Component', () => {
  it('renders the header with logo and title', () => {
    render(<Home />);
    
    const title = screen.getByText('sabaTV');
    expect(title).toBeTruthy();
    
    const subtitle = screen.getByText('قناة البث المباشر الفلسطينية');
    expect(subtitle).toBeTruthy();
  });

  it('renders both channel cards', () => {
    render(<Home />);
    
    const channel1 = screen.getByText('sabaTV 1');
    const channel2 = screen.getByText('sabaTV 2');
    
    expect(channel1).toBeTruthy();
    expect(channel2).toBeTruthy();
  });

  it('renders input fields for stream URLs', () => {
    render(<Home />);
    
    const inputs = screen.getAllByPlaceholderText('أدخل رابط البث (M3U8 أو HLS)');
    expect(inputs.length).toBe(2);
  });

  it('disables channel buttons when no URL is provided', () => {
    render(<Home />);
    
    const buttons = screen.getAllByText('اختر هذه القناة');
    buttons.forEach(button => {
      expect((button as HTMLButtonElement).disabled).toBe(true);
    });
  });

  it('enables channel button when URL is provided', async () => {
    const user = userEvent.setup();
    render(<Home />);
    
    const inputs = screen.getAllByPlaceholderText('أدخل رابط البث (M3U8 أو HLS)');
    const firstInput = inputs[0] as HTMLInputElement;
    
    await user.type(firstInput, 'https://example.com/stream.m3u8');
    
    const buttons = screen.getAllByText('اختر هذه القناة');
    expect((buttons[0] as HTMLButtonElement).disabled).toBe(false);
  });

  it('allows switching between channels', async () => {
    const user = userEvent.setup();
    render(<Home />);
    
    const inputs = screen.getAllByPlaceholderText('أدخل رابط البث (M3U8 أو HLS)');
    
    // Add URL to first channel
    await user.type(inputs[0] as HTMLInputElement, 'https://example.com/stream1.m3u8');
    
    // Add URL to second channel
    await user.type(inputs[1] as HTMLInputElement, 'https://example.com/stream2.m3u8');
    
    const buttons = screen.getAllByText('اختر هذه القناة');
    
    // Click first channel
    await user.click(buttons[0]);
    const channel1Text = screen.getByText('تشغيل: sabaTV 1');
    expect(channel1Text).toBeTruthy();
    
    // Click second channel
    await user.click(buttons[1]);
    const channel2Text = screen.getByText('تشغيل: sabaTV 2');
    expect(channel2Text).toBeTruthy();
  });

  it('displays empty state when no stream URL is selected', () => {
    render(<Home />);
    
    const emptyState = screen.getByText('أضف رابط بث لأحد القناتين لبدء المشاهدة');
    expect(emptyState).toBeTruthy();
  });

  it('renders content sections', () => {
    render(<Home />);
    
    expect(screen.getByText('المباريات الرياضية')).toBeTruthy();
    expect(screen.getByText('المسلسلات')).toBeTruthy();
    expect(screen.getByText('الأفلام')).toBeTruthy();
  });

  it('renders about section with correct information', () => {
    render(<Home />);
    
    expect(screen.getByText('من نحن')).toBeTruthy();
    expect(screen.getByText('رؤيتنا المستقبلية')).toBeTruthy();
  });

  it('renders footer with copyright information', () => {
    render(<Home />);
    
    const footerText = screen.getByText(/© 2025 sabaTV/);
    expect(footerText).toBeTruthy();
  });

  it('renders navigation links', () => {
    render(<Home />);
    
    const navLinks = screen.getAllByRole('link');
    const linkTexts = navLinks.map(link => link.textContent);
    
    expect(linkTexts.some(text => text?.includes('القنوات'))).toBe(true);
    expect(linkTexts.some(text => text?.includes('المحتوى'))).toBe(true);
    expect(linkTexts.some(text => text?.includes('عننا'))).toBe(true);
  });
});
