/**
 * GlyphGroup - React Component
 *
 * Group multiple glyphs together horizontally or vertically.
 *
 * @example
 * ```tsx
 * import { GlyphGroup, BeaconGlyph } from 'beaconglyphs/react';
 *
 * <GlyphGroup>
 *   <BeaconGlyph id="identity.dna" />
 *   <BeaconGlyph id="state.active" />
 *   <BeaconGlyph id="state.protected" />
 * </GlyphGroup>
 * ```
 */

import React from 'react';

export interface GlyphGroupProps {
  /** Glyphs to display */
  children: React.ReactNode;
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
  /** Gap between glyphs */
  gap?: 'sm' | 'md' | 'lg';
  /** Custom className */
  className?: string;
}

export const GlyphGroup: React.FC<GlyphGroupProps> = ({
  children,
  direction = 'horizontal',
  gap = 'md',
  className = '',
}) => {
  const baseClass = direction === 'horizontal' ? 'bg-glyph-group' : 'bg-glyph-stack';
  const gapStyle = gap === 'sm' ? '0.25rem' : gap === 'lg' ? '0.75rem' : '0.5rem';

  return (
    <div className={`${baseClass} ${className}`} style={{ gap: gapStyle }}>
      {children}
    </div>
  );
};

GlyphGroup.displayName = 'GlyphGroup';

export default GlyphGroup;
