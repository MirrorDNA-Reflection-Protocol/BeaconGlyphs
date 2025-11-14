/**
 * BeaconGlyph Component Tests
 *
 * Requirements to run:
 * - Jest
 * - @testing-library/react
 * - @testing-library/jest-dom
 *
 * Install: npm install --save-dev jest @testing-library/react @testing-library/jest-dom
 * Run: npm test
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BeaconGlyph } from '../../packages/react/src/BeaconGlyph';
import { GLYPHS } from '../../packages/react/src/glyphs';

describe('BeaconGlyph Component', () => {
  // Test 1: Component renders without crashing
  test('renders without crashing', () => {
    render(<BeaconGlyph name="mirrordna" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  // Test 2: Renders correct SVG path
  test('renders correct SVG path for given name', () => {
    render(<BeaconGlyph name="mirrordna" />);
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain('mirrordna.svg');
  });

  // Test 3: Applies size prop correctly
  test('applies size prop correctly', () => {
    const { rerender } = render(<BeaconGlyph name="mirrordna" size="sm" />);
    let img = screen.getByRole('img');
    expect(img).toHaveStyle({ width: '24px', height: '24px' });

    rerender(<BeaconGlyph name="mirrordna" size="lg" />);
    img = screen.getByRole('img');
    expect(img).toHaveStyle({ width: '48px', height: '48px' });
  });

  // Test 4: Applies custom pixel size
  test('applies custom pixel size', () => {
    render(<BeaconGlyph name="mirrordna" size={64} />);
    const img = screen.getByRole('img');
    expect(img).toHaveStyle({ width: '64px', height: '64px' });
  });

  // Test 5: Applies custom title for accessibility
  test('applies custom title for accessibility', () => {
    render(<BeaconGlyph name="mirrordna" title="Custom title" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('title', 'Custom title');
    expect(img).toHaveAttribute('aria-label', 'Custom title');
  });

  // Test 6: Uses default description when no title provided
  test('uses default description when no title provided', () => {
    render(<BeaconGlyph name="mirrordna" />);
    const img = screen.getByRole('img');
    const glyph = GLYPHS['mirrordna'];
    expect(img).toHaveAttribute('title', glyph.description);
    expect(img).toHaveAttribute('aria-label', glyph.description);
  });

  // Test 7: Applies className prop
  test('applies className prop', () => {
    render(<BeaconGlyph name="mirrordna" className="custom-class" />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('custom-class');
    expect(img).toHaveClass('beacon-glyph');
  });

  // Test 8: Applies inline styles
  test('applies inline styles', () => {
    render(<BeaconGlyph name="mirrordna" style={{ opacity: 0.5 }} />);
    const img = screen.getByRole('img');
    expect(img).toHaveStyle({ opacity: '0.5' });
  });

  // Test 9: Handles onClick events
  test('handles onClick events', () => {
    const handleClick = jest.fn();
    render(<BeaconGlyph name="mirrordna" onClick={handleClick} />);
    const img = screen.getByRole('button'); // Changes to button role when onClick present
    fireEvent.click(img);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 10: Unknown glyph name renders fallback
  test('unknown glyph name renders fallback', () => {
    // Suppress console.warn for this test
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<BeaconGlyph name="unknown-glyph-123" />);
    const fallback = screen.getByText('?');
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveClass('beacon-glyph-error');
    expect(fallback).toHaveAttribute('title', 'Unknown glyph: unknown-glyph-123');

    consoleWarnSpy.mockRestore();
  });

  // Test 11: Unknown glyph logs warning in development
  test('unknown glyph logs warning in development', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<BeaconGlyph name="unknown-glyph-123" />);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Unknown glyph name "unknown-glyph-123"')
    );

    consoleWarnSpy.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });

  // Test 12: Renders all brand glyphs
  test('renders all brand glyphs', () => {
    const brandGlyphs = ['mirrordna', 'lingos', 'activemirroros', 'trustbydesign', 'agentdna', 'glyphtrail', 'generic_beacon'];

    brandGlyphs.forEach(name => {
      const { unmount } = render(<BeaconGlyph name={name} />);
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
      expect(img.getAttribute('src')).toContain(`${name}.svg`);
      unmount();
    });
  });

  // Test 13: Renders symbolic glyphs
  test('renders symbolic glyphs', () => {
    const symbolicGlyphs = ['continuity-chain', 'identity-dna', 'state-verified', 'events-start', 'reflection-mirror'];

    symbolicGlyphs.forEach(name => {
      const { unmount } = render(<BeaconGlyph name={name} />);
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
      expect(img.getAttribute('src')).toContain(`${name}.svg`);
      unmount();
    });
  });

  // Test 14: Default size is 'md'
  test('default size is md (32px)', () => {
    render(<BeaconGlyph name="mirrordna" />);
    const img = screen.getByRole('img');
    expect(img).toHaveStyle({ width: '32px', height: '32px' });
  });

  // Test 15: Variant prop applies correct class
  test('variant prop applies correct class', () => {
    render(<BeaconGlyph name="mirrordna" variant="outline" />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('beacon-glyph-outline');
  });
});

/**
 * Integration Tests
 */
describe('BeaconGlyph Integration', () => {
  test('multiple glyphs render independently', () => {
    const { container } = render(
      <div>
        <BeaconGlyph name="mirrordna" size="sm" />
        <BeaconGlyph name="lingos" size="md" />
        <BeaconGlyph name="activemirroros" size="lg" />
      </div>
    );

    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveStyle({ width: '24px' });
    expect(images[1]).toHaveStyle({ width: '32px' });
    expect(images[2]).toHaveStyle({ width: '48px' });
  });

  test('glyph in button remains accessible', () => {
    const handleClick = jest.fn();
    render(
      <button onClick={handleClick}>
        <BeaconGlyph name="navigation-home" />
        <span>Home</span>
      </button>
    );

    const button = screen.getByRole('button', { name: /home/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});

/**
 * Accessibility Tests
 */
describe('BeaconGlyph Accessibility', () => {
  test('has alt text', () => {
    render(<BeaconGlyph name="mirrordna" />);
    const img = screen.getByAltText('MirrorDNA');
    expect(img).toBeInTheDocument();
  });

  test('has aria-label', () => {
    render(<BeaconGlyph name="state-verified" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('aria-label');
  });

  test('interactive glyph has button role', () => {
    render(<BeaconGlyph name="navigation-home" onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('non-interactive glyph has img role', () => {
    render(<BeaconGlyph name="mirrordna" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
