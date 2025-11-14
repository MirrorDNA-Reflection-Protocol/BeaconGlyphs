/**
 * GlyphStatus - React Component
 *
 * Status indicator with glyph and optional status dot.
 *
 * @example
 * ```tsx
 * import { GlyphStatus } from 'beaconglyphs/react';
 *
 * <GlyphStatus
 *   glyphId="state.active"
 *   label="System Active"
 *   status="success"
 * />
 * ```
 */

import React from 'react';
import { BeaconGlyph, GlyphId } from './BeaconGlyph';

export interface GlyphStatusProps {
  /** Glyph identifier */
  glyphId: GlyphId;
  /** Status label */
  label: string;
  /** Status indicator */
  status?: 'success' | 'warning' | 'error' | 'info';
  /** Show status dot */
  showDot?: boolean;
  /** Custom className */
  className?: string;
}

export const GlyphStatus: React.FC<GlyphStatusProps> = ({
  glyphId,
  label,
  status,
  showDot = true,
  className = '',
}) => {
  const statusDotClass = status ? `bg-status-dot-${status}` : '';

  return (
    <div className={`bg-status ${className}`}>
      <BeaconGlyph id={glyphId} size="md" />
      <span>{label}</span>
      {showDot && status && (
        <span className={`bg-status-dot ${statusDotClass}`} aria-label={`Status: ${status}`} />
      )}
    </div>
  );
};

GlyphStatus.displayName = 'GlyphStatus';

export default GlyphStatus;
