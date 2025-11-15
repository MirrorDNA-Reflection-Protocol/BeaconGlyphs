/**
 * BeaconGlyphs - Glyph Registry
 * Maps glyph names to their SVG paths
 *
 * FEU CONTRACT: Fact/Estimate/Unknown enforced | Bound to Master Citation v15.2
 * DISCLAIMER: Research prototype - informational output only | See /LEGAL_NOTICE.md
 */

export interface GlyphDefinition {
  name: string;
  displayName: string;
  category: 'brand' | 'continuity' | 'identity' | 'state' | 'events' | 'reflection' | 'governance' | 'navigation' | 'data';
  svgPath: string;
  description: string;
}

export const BRAND_GLYPHS: Record<string, GlyphDefinition> = {
  mirrordna: {
    name: 'mirrordna',
    displayName: 'MirrorDNA',
    category: 'brand',
    svgPath: '../../assets/svg/mirrordna.svg',
    description: 'Identity and continuity protocol'
  },
  lingos: {
    name: 'lingos',
    displayName: 'LingOS',
    category: 'brand',
    svgPath: '../../assets/svg/lingos.svg',
    description: 'Language-native OS'
  },
  activemirroros: {
    name: 'activemirroros',
    displayName: 'Active MirrorOS',
    category: 'brand',
    svgPath: '../../assets/svg/activemirroros.svg',
    description: 'Intelligence that remembers'
  },
  trustbydesign: {
    name: 'trustbydesign',
    displayName: 'TrustByDesign',
    category: 'brand',
    svgPath: '../../assets/svg/trustbydesign.svg',
    description: 'Safety and governance framework'
  },
  agentdna: {
    name: 'agentdna',
    displayName: 'AgentDNA',
    category: 'brand',
    svgPath: '../../assets/svg/agentdna.svg',
    description: 'Agent personality schemas'
  },
  glyphtrail: {
    name: 'glyphtrail',
    displayName: 'Glyphtrail',
    category: 'brand',
    svgPath: '../../assets/svg/glyphtrail.svg',
    description: 'Interaction lineage logs'
  },
  generic_beacon: {
    name: 'generic_beacon',
    displayName: 'Generic Beacon',
    category: 'brand',
    svgPath: '../../assets/svg/generic_beacon.svg',
    description: 'Universal beacon marker'
  }
};

export const SYMBOLIC_GLYPHS: Record<string, GlyphDefinition> = {
  'continuity-chain': {
    name: 'continuity-chain',
    displayName: 'Continuity Chain',
    category: 'continuity',
    svgPath: '../../assets/svg/continuity-chain.svg',
    description: 'Unbroken session continuity'
  },
  'continuity-link': {
    name: 'continuity-link',
    displayName: 'Single Link',
    category: 'continuity',
    svgPath: '../../assets/svg/continuity-link.svg',
    description: 'Individual connection point'
  },
  'continuity-infinity': {
    name: 'continuity-infinity',
    displayName: 'Infinite Continuity',
    category: 'continuity',
    svgPath: '../../assets/svg/continuity-infinity.svg',
    description: 'Eternal persistence'
  },
  'continuity-broken': {
    name: 'continuity-broken',
    displayName: 'Broken Chain',
    category: 'continuity',
    svgPath: '../../assets/svg/continuity-broken.svg',
    description: 'Break in continuity'
  },
  'identity-dna': {
    name: 'identity-dna',
    displayName: 'DNA Helix',
    category: 'identity',
    svgPath: '../../assets/svg/identity-dna.svg',
    description: 'Agent identity marker'
  },
  'identity-mask': {
    name: 'identity-mask',
    displayName: 'Persona Mask',
    category: 'identity',
    svgPath: '../../assets/svg/identity-mask.svg',
    description: 'Agent personality'
  },
  'identity-diamond': {
    name: 'identity-diamond',
    displayName: 'Identity Diamond',
    category: 'identity',
    svgPath: '../../assets/svg/identity-diamond.svg',
    description: 'Unique identity marker'
  },
  'state-verified': {
    name: 'state-verified',
    displayName: 'Verified',
    category: 'state',
    svgPath: '../../assets/svg/state-verified.svg',
    description: 'Verified state'
  },
  'state-active': {
    name: 'state-active',
    displayName: 'Active State',
    category: 'state',
    svgPath: '../../assets/svg/state-active.svg',
    description: 'System actively running'
  },
  'state-protected': {
    name: 'state-protected',
    displayName: 'Protected',
    category: 'state',
    svgPath: '../../assets/svg/state-protected.svg',
    description: 'Trust boundary'
  },
  'state-locked': {
    name: 'state-locked',
    displayName: 'Locked',
    category: 'state',
    svgPath: '../../assets/svg/state-locked.svg',
    description: 'Secured state'
  },
  'events-flag': {
    name: 'events-flag',
    displayName: 'Event Flag',
    category: 'events',
    svgPath: '../../assets/svg/events-flag.svg',
    description: 'Event milestone'
  },
  'events-cycle': {
    name: 'events-cycle',
    displayName: 'Cycle Event',
    category: 'events',
    svgPath: '../../assets/svg/events-cycle.svg',
    description: 'Recurring event'
  },
  'events-warning': {
    name: 'events-warning',
    displayName: 'Warning Event',
    category: 'events',
    svgPath: '../../assets/svg/events-warning.svg',
    description: 'Caution required'
  },
  'events-start': {
    name: 'events-start',
    displayName: 'Start Event',
    category: 'events',
    svgPath: '../../assets/svg/events-start.svg',
    description: 'Beginning of session'
  },
  'events-stop': {
    name: 'events-stop',
    displayName: 'Stop Event',
    category: 'events',
    svgPath: '../../assets/svg/events-stop.svg',
    description: 'End of session'
  },
  'reflection-mirror': {
    name: 'reflection-mirror',
    displayName: 'Mirror',
    category: 'reflection',
    svgPath: '../../assets/svg/reflection-mirror.svg',
    description: 'Self-reflection'
  },
  'reflection-bidirectional': {
    name: 'reflection-bidirectional',
    displayName: 'Bidirectional',
    category: 'reflection',
    svgPath: '../../assets/svg/reflection-bidirectional.svg',
    description: 'Two-way reflection'
  },
  'reflection-recursive': {
    name: 'reflection-recursive',
    displayName: 'Recursive',
    category: 'reflection',
    svgPath: '../../assets/svg/reflection-recursive.svg',
    description: 'Self-referential'
  },
  'governance-balance': {
    name: 'governance-balance',
    displayName: 'Balance',
    category: 'governance',
    svgPath: '../../assets/svg/governance-balance.svg',
    description: 'Governance balance'
  },
  'governance-certified': {
    name: 'governance-certified',
    displayName: 'Certified',
    category: 'governance',
    svgPath: '../../assets/svg/governance-certified.svg',
    description: 'Compliance certification'
  },
  'navigation-home': {
    name: 'navigation-home',
    displayName: 'Home',
    category: 'navigation',
    svgPath: '../../assets/svg/navigation-home.svg',
    description: 'Return to origin'
  },
  'navigation-forward': {
    name: 'navigation-forward',
    displayName: 'Forward',
    category: 'navigation',
    svgPath: '../../assets/svg/navigation-forward.svg',
    description: 'Move forward'
  },
  'data-memory': {
    name: 'data-memory',
    displayName: 'Memory',
    category: 'data',
    svgPath: '../../assets/svg/data-memory.svg',
    description: 'Stored memory'
  },
  'data-stream': {
    name: 'data-stream',
    displayName: 'Data Stream',
    category: 'data',
    svgPath: '../../assets/svg/data-stream.svg',
    description: 'Flowing data'
  }
};

// Combined registry
export const GLYPHS: Record<string, GlyphDefinition> = {
  ...BRAND_GLYPHS,
  ...SYMBOLIC_GLYPHS
};

// Helper to get glyph by name
export function getGlyph(name: string): GlyphDefinition | undefined {
  return GLYPHS[name];
}

// Get all glyphs in a category
export function getGlyphsByCategory(category: GlyphDefinition['category']): GlyphDefinition[] {
  return Object.values(GLYPHS).filter(g => g.category === category);
}
