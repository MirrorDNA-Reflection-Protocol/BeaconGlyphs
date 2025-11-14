/**
 * BeaconGlyph - React Component
 *
 * Main component for rendering BeaconGlyphs in React applications.
 * Supports all 25 glyphs with size, color, and animation variants.
 *
 * @example
 * ```tsx
 * import { BeaconGlyph } from 'beaconglyphs/react';
 *
 * <BeaconGlyph id="continuity.chain" />
 * <BeaconGlyph id="identity.dna" size="lg" color="primary" />
 * <BeaconGlyph id="state.active" animate="pulse" />
 * ```
 */

import React from 'react';

export type GlyphId =
  | 'continuity.chain'
  | 'continuity.link'
  | 'continuity.infinity'
  | 'continuity.broken'
  | 'identity.dna'
  | 'identity.mask'
  | 'identity.diamond'
  | 'state.verified'
  | 'state.active'
  | 'state.protected'
  | 'state.locked'
  | 'events.flag'
  | 'events.cycle'
  | 'events.warning'
  | 'events.start'
  | 'events.stop'
  | 'reflection.mirror'
  | 'reflection.bidirectional'
  | 'reflection.recursive'
  | 'governance.balance'
  | 'governance.certified'
  | 'navigation.home'
  | 'navigation.forward'
  | 'data.memory'
  | 'data.stream';

export type GlyphSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type GlyphColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'muted';
export type GlyphAnimation = 'pulse' | 'spin' | 'bounce';

export interface BeaconGlyphProps {
  /** Glyph identifier (e.g., 'continuity.chain') */
  id: GlyphId;
  /** Size variant */
  size?: GlyphSize;
  /** Color theme */
  color?: GlyphColor;
  /** Animation type */
  animate?: GlyphAnimation;
  /** Make glyph interactive */
  interactive?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Accessibility label */
  'aria-label'?: string;
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Custom inline styles */
  style?: React.CSSProperties;
}

const glyphMetadata: Record<GlyphId, { name: string; description: string }> = {
  'continuity.chain': { name: 'Continuity Chain', description: 'Unbroken session continuity' },
  'continuity.link': { name: 'Single Link', description: 'Individual connection point' },
  'continuity.infinity': { name: 'Infinite Continuity', description: 'Eternal persistence' },
  'continuity.broken': { name: 'Broken Chain', description: 'Break in continuity' },
  'identity.dna': { name: 'DNA Helix', description: 'Agent identity marker' },
  'identity.mask': { name: 'Persona Mask', description: 'Agent personality' },
  'identity.diamond': { name: 'Identity Diamond', description: 'Unique identity marker' },
  'state.verified': { name: 'Verified', description: 'Verified state' },
  'state.active': { name: 'Active State', description: 'System actively running' },
  'state.protected': { name: 'Protected', description: 'Trust boundary' },
  'state.locked': { name: 'Locked', description: 'Secured state' },
  'events.flag': { name: 'Event Flag', description: 'Event milestone' },
  'events.cycle': { name: 'Cycle Event', description: 'Recurring event' },
  'events.warning': { name: 'Warning Event', description: 'Caution required' },
  'events.start': { name: 'Start Event', description: 'Beginning of session' },
  'events.stop': { name: 'Stop Event', description: 'End of session' },
  'reflection.mirror': { name: 'Mirror', description: 'Self-reflection' },
  'reflection.bidirectional': { name: 'Bidirectional', description: 'Two-way reflection' },
  'reflection.recursive': { name: 'Recursive', description: 'Self-referential' },
  'governance.balance': { name: 'Balance', description: 'Governance balance' },
  'governance.certified': { name: 'Certified', description: 'Compliance certification' },
  'navigation.home': { name: 'Home', description: 'Return to origin' },
  'navigation.forward': { name: 'Forward', description: 'Move forward' },
  'data.memory': { name: 'Memory', description: 'Stored memory' },
  'data.stream': { name: 'Data Stream', description: 'Flowing data' },
};

export const BeaconGlyph: React.FC<BeaconGlyphProps> = ({
  id,
  size = 'md',
  color,
  animate,
  interactive = false,
  disabled = false,
  'aria-label': ariaLabel,
  className = '',
  onClick,
  style,
}) => {
  const glyphClass = id.replace('.', '-');
  const metadata = glyphMetadata[id];

  const classes = [
    'bg-glyph',
    `bg-${glyphClass}`,
    size && `bg-size-${size}`,
    color && `bg-color-${color}`,
    animate && `bg-animate-${animate}`,
    interactive && 'bg-interactive',
    disabled && 'bg-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const accessibilityLabel = ariaLabel || metadata.description;

  return (
    <span
      className={classes}
      role={onClick ? 'button' : 'img'}
      aria-label={accessibilityLabel}
      onClick={!disabled && onClick ? onClick : undefined}
      style={style}
      tabIndex={interactive && !disabled ? 0 : undefined}
    />
  );
};

BeaconGlyph.displayName = 'BeaconGlyph';

export default BeaconGlyph;
