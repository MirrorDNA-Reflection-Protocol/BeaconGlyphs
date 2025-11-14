// BeaconGlyphs Web Demo JavaScript

// Brand / Product Glyphs
const brandGlyphs = [
    {
        name: 'mirrordna',
        displayName: 'MirrorDNA',
        description: 'Identity and continuity protocol layer',
        file: 'mirrordna.svg'
    },
    {
        name: 'lingos',
        displayName: 'LingOS',
        description: 'Language-native OS for reflective dialogue',
        file: 'lingos.svg'
    },
    {
        name: 'activemirroros',
        displayName: 'Active MirrorOS',
        description: 'Intelligence that remembers - product layer',
        file: 'activemirroros.svg'
    },
    {
        name: 'trustbydesign',
        displayName: 'TrustByDesign',
        description: 'Safety and governance framework',
        file: 'trustbydesign.svg'
    },
    {
        name: 'agentdna',
        displayName: 'AgentDNA',
        description: 'Agent personality and persistence schemas',
        file: 'agentdna.svg'
    },
    {
        name: 'glyphtrail',
        displayName: 'Glyphtrail',
        description: 'Interaction lineage and continuity logs',
        file: 'glyphtrail.svg'
    },
    {
        name: 'generic_beacon',
        displayName: 'Generic Beacon',
        description: 'Universal beacon marker for events',
        file: 'generic_beacon.svg'
    }
];

// Symbolic Glyphs organized by category
const symbolicGlyphs = {
    continuity: [
        { name: 'continuity-chain', displayName: 'Continuity Chain', description: 'Unbroken session continuity' },
        { name: 'continuity-link', displayName: 'Single Link', description: 'Individual connection point' },
        { name: 'continuity-infinity', displayName: 'Infinite Continuity', description: 'Eternal persistence' },
        { name: 'continuity-broken', displayName: 'Broken Chain', description: 'Break in continuity' }
    ],
    identity: [
        { name: 'identity-dna', displayName: 'DNA Helix', description: 'Agent identity marker' },
        { name: 'identity-mask', displayName: 'Persona Mask', description: 'Agent personality' },
        { name: 'identity-diamond', displayName: 'Identity Diamond', description: 'Unique identity marker' }
    ],
    state: [
        { name: 'state-verified', displayName: 'Verified', description: 'Verified state' },
        { name: 'state-active', displayName: 'Active State', description: 'System actively running' },
        { name: 'state-protected', displayName: 'Protected', description: 'Trust boundary' },
        { name: 'state-locked', displayName: 'Locked', description: 'Secured state' }
    ],
    events: [
        { name: 'events-flag', displayName: 'Event Flag', description: 'Event milestone' },
        { name: 'events-cycle', displayName: 'Cycle Event', description: 'Recurring event' },
        { name: 'events-warning', displayName: 'Warning Event', description: 'Caution required' },
        { name: 'events-start', displayName: 'Start Event', description: 'Beginning of session' },
        { name: 'events-stop', displayName: 'Stop Event', description: 'End of session' }
    ],
    reflection: [
        { name: 'reflection-mirror', displayName: 'Mirror', description: 'Self-reflection' },
        { name: 'reflection-bidirectional', displayName: 'Bidirectional', description: 'Two-way reflection' },
        { name: 'reflection-recursive', displayName: 'Recursive', description: 'Self-referential' }
    ],
    governance: [
        { name: 'governance-balance', displayName: 'Balance', description: 'Governance balance' },
        { name: 'governance-certified', displayName: 'Certified', description: 'Compliance certification' }
    ],
    navigation: [
        { name: 'navigation-home', displayName: 'Home', description: 'Return to origin' },
        { name: 'navigation-forward', displayName: 'Forward', description: 'Move forward' }
    ],
    data: [
        { name: 'data-memory', displayName: 'Memory', description: 'Stored memory' },
        { name: 'data-stream', displayName: 'Data Stream', description: 'Flowing data' }
    ]
};

// Create glyph card HTML
function createGlyphCard(glyph, isBrand = false) {
    const card = document.createElement('div');
    card.className = 'glyph-card';

    const svgPath = isBrand
        ? `../assets/svg/${glyph.file}`
        : `../assets/svg/${glyph.name}.svg`;

    const code = isBrand
        ? `<BeaconGlyph name="${glyph.name}" />`
        : `<BeaconGlyph name="${glyph.name}" />`;

    card.innerHTML = `
        <div class="glyph-display">
            <img src="${svgPath}" alt="${glyph.displayName}" />
        </div>
        <div class="glyph-name">${glyph.displayName}</div>
        <div class="glyph-desc">${glyph.description}</div>
        <div class="glyph-code">${code}</div>
    `;

    // Click to copy code
    card.addEventListener('click', () => {
        navigator.clipboard.writeText(code).then(() => {
            const originalBg = card.style.background;
            card.style.background = '#d1fae5';
            setTimeout(() => {
                card.style.background = originalBg;
            }, 300);
        });
    });

    return card;
}

// Render brand glyphs
function renderBrandGlyphs() {
    const container = document.getElementById('brand-glyphs-grid');
    brandGlyphs.forEach(glyph => {
        container.appendChild(createGlyphCard(glyph, true));
    });
}

// Render symbolic glyphs by category
function renderSymbolicGlyphs() {
    Object.keys(symbolicGlyphs).forEach(category => {
        const container = document.getElementById(`${category}-glyphs`);
        symbolicGlyphs[category].forEach(glyph => {
            container.appendChild(createGlyphCard(glyph, false));
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderBrandGlyphs();
    renderSymbolicGlyphs();
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
