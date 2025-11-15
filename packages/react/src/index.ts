/**
 * BeaconGlyphs React Package
 *
 * Export all components and utilities
 *
 * FEU CONTRACT: Fact/Estimate/Unknown enforced | Bound to Master Citation v15.2
 * DISCLAIMER: Research prototype - informational output only | See /LEGAL_NOTICE.md
 */

export { BeaconGlyph } from './BeaconGlyph';
export type { BeaconGlyphProps, GlyphSize, GlyphVariant } from './BeaconGlyph';

export { GLYPHS, BRAND_GLYPHS, SYMBOLIC_GLYPHS, getGlyph, getGlyphsByCategory } from './glyphs';
export type { GlyphDefinition } from './glyphs';

// Default export
import { BeaconGlyph } from './BeaconGlyph';
export default BeaconGlyph;
