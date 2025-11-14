/**
 * GlyphBadge - React Component
 *
 * Badge component combining glyph with text label.
 *
 * @example
 * ```tsx
 * import { GlyphBadge } from 'beaconglyphs/react';
 *
 * <GlyphBadge glyphId="state.verified" label="Verified" variant="success" />
 * <GlyphBadge glyphId="continuity.chain" label="Continuous" />
 * ```
 */

import React from 'react';
import { BeaconGlyph, GlyphId } from './BeaconGlyph';

export interface GlyphBadgeProps {
  /** Glyph identifier */
  glyphId: GlyphId;
  /** Badge label text */
  label: string;
  /** Badge variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const GlyphBadge: React.FC<GlyphBadgeProps> = ({
  glyphId,
  label,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const badgeClass = variant !== 'default' ? `bg-badge-${variant}` : '';
  const classes = ['bg-badge', badgeClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes} onClick={onClick}>
      <BeaconGlyph id={glyphId} size="sm" />
      <span>{label}</span>
    </span>
  );
};

GlyphBadge.displayName = 'GlyphBadge';

export default GlyphBadge;
