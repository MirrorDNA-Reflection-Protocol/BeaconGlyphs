/**
 * BeaconGlyph - React Component
 *
 * Renders BeaconGlyphs with configurable size, variant, and accessibility.
 *
 * @example
 * ```tsx
 * <BeaconGlyph name="mirrordna" size="lg" />
 * <BeaconGlyph name="continuity-chain" size={48} title="Custom title" />
 * ```
 */

import React from 'react';
import { getGlyph, GLYPHS } from './glyphs';

export type GlyphSize = 'sm' | 'md' | 'lg' | number;
export type GlyphVariant = 'filled' | 'outline';

export interface BeaconGlyphProps {
  /** Glyph name (e.g., 'mirrordna', 'continuity-chain') */
  name: string;

  /** Size variant or pixel value */
  size?: GlyphSize;

  /** Visual variant */
  variant?: GlyphVariant;

  /** Custom title for accessibility */
  title?: string;

  /** Additional CSS class */
  className?: string;

  /** Inline styles */
  style?: React.CSSProperties;

  /** Click handler */
  onClick?: () => void;
}

const SIZE_MAP: Record<string, number> = {
  sm: 24,
  md: 32,
  lg: 48
};

export const BeaconGlyph: React.FC<BeaconGlyphProps> = ({
  name,
  size = 'md',
  variant = 'filled',
  title,
  className = '',
  style = {},
  onClick
}) => {
  const glyph = getGlyph(name);

  // If glyph not found, render fallback or throw
  if (!glyph) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`BeaconGlyph: Unknown glyph name "${name}". Available: ${Object.keys(GLYPHS).join(', ')}`);
    }
    return (
      <span
        className={`beacon-glyph beacon-glyph-error ${className}`}
        title={`Unknown glyph: ${name}`}
        style={{ ...style, display: 'inline-block', width: '1em', height: '1em' }}
      >
        ?
      </span>
    );
  }

  const pixelSize = typeof size === 'number' ? size : SIZE_MAP[size];
  const accessibleTitle = title || glyph.description;

  return (
    <img
      src={glyph.svgPath}
      alt={glyph.displayName}
      title={accessibleTitle}
      className={`beacon-glyph beacon-glyph-${variant} ${className}`}
      style={{
        width: pixelSize,
        height: pixelSize,
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style
      }}
      onClick={onClick}
      role={onClick ? 'button' : 'img'}
      aria-label={accessibleTitle}
    />
  );
};

BeaconGlyph.displayName = 'BeaconGlyph';

export default BeaconGlyph;
