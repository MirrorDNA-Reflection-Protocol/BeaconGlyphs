# Contributing to BeaconGlyphs

Thank you for your interest in contributing to BeaconGlyphs. This document provides guidelines for proposing new glyphs, improving existing ones, and enhancing the codebase.

---

## Table of Contents

1. [Before You Contribute](#before-you-contribute)
2. [Proposing a New Glyph](#proposing-a-new-glyph)
3. [Modifying Existing Glyphs](#modifying-existing-glyphs)
4. [Improving Documentation](#improving-documentation)
5. [Code Contributions](#code-contributions)
6. [Submitting Pull Requests](#submitting-pull-requests)
7. [Code of Conduct](#code-of-conduct)

---

## Before You Contribute

BeaconGlyphs is the **symbolic layer** of the MirrorDNA Constellation. Every glyph must have clear semantic meaning and repeated use across the ecosystem.

**Key Principles:**
1. **Glyphs are not clip art** - Each must represent a specific, recurring concept
2. **Clarity over cleverness** - Symbols should be immediately recognizable
3. **Ecosystem coherence** - Glyphs must fit the existing visual language
4. **Accessibility first** - All glyphs must meet WCAG 2.1 Level AA standards

---

## Proposing a New Glyph

### Step 1: Ask Yourself These Questions

Before proposing a new glyph, consider:

1. **Is this concept used repeatedly across the ecosystem?**
   - Glyphs are for recurring patterns, not one-off situations
   - Must appear in at least 2-3 different MirrorDNA products

2. **Does a similar glyph already exist?**
   - Check [docs/glyph_catalog.md](docs/glyph_catalog.md) thoroughly
   - Consider reusing or combining existing glyphs

3. **Can this be clearly represented visually?**
   - The glyph should work at 16px and 64px sizes
   - Must be recognizable in monochrome
   - Should not rely on text or complex details

4. **Does it fit the existing visual language?**
   - Review [docs/usage_guidelines.md](docs/usage_guidelines.md)
   - Match the stroke width (2px standard) and style

### Step 2: Create the Glyph Definition

Add your glyph to `registry/glyphs/registry.json`:

```json
{
  "id": "category.name",
  "category": "category",
  "name": "Human Readable Name",
  "description": "Clear description of what this glyph represents and when to use it",
  "representations": {
    "unicode": "🔮",
    "text": "[KEYWORD]",
    "emoji": "🔮"
  },
  "metadata": {
    "tags": ["tag1", "tag2", "tag3"],
    "useCases": ["glyphtrail", "lingos", "activemirroros"],
    "accessibility": "Screen reader description",
    "relatedGlyphs": ["category.other"]
  }
}
```

**Field Guidelines:**
- `id`: Use `category.name` format (lowercase, no spaces)
- `category`: One of: continuity, identity, state, events, reflection, governance, navigation, data, brand
- `name`: Title case, clear and concise
- `description`: 1-2 sentences explaining meaning and usage
- `representations.unicode`: Closest Unicode symbol
- `representations.text`: Uppercase keyword in brackets
- `representations.emoji`: Closest emoji equivalent
- `metadata.useCases`: Where in the ecosystem this will be used
- `metadata.accessibility`: Screen reader description (clear and descriptive)

### Step 3: Create the SVG File

Create your SVG in `assets/svg/[category-name].svg`:

**Required SVG attributes:**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <title>Glyph Name</title>
  <desc>Detailed description for accessibility</desc>
  <!-- Your artwork here -->
</svg>
```

**SVG Best Practices:**
- Use `viewBox="0 0 48 48"` (48×48px artboard)
- Use `currentColor` for all strokes/fills (enables CSS color control)
- Standard stroke width: `2px`
- Optimize with SVGO (remove unnecessary attributes)
- File size: <5KB
- Test at multiple sizes (16px, 24px, 32px, 48px, 64px)

**Example:**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <title>Continuity Chain</title>
  <desc>Unbroken chain representing continuous session memory</desc>
  <path d="M12 18 L20 18 A6 6 0 0 1 20 30 L12 30"
        stroke="currentColor"
        fill="none"
        stroke-width="2"/>
</svg>
```

### Step 4: Validate Your Work

Run the validation script:

```bash
python scripts/validate_registry.py
```

This checks:
- JSON syntax in registry
- Required fields present
- SVG file exists
- Naming conventions followed

### Step 5: Update Documentation

Add your glyph to `docs/glyph_catalog.md`:

```markdown
#### category-name

**Category:** Category Name
**File:** `category-name.svg`
**Use cases:** When to use this glyph

Description of the glyph's meaning and appropriate contexts.

**Related:** category-other, another-category
```

### Step 6: Submit Pull Request

Create a PR with:

**Title:** `Add [category-name] glyph for [use case]`

**Description:**
```markdown
## Summary
Brief description of the glyph and its purpose.

## Motivation
Why this glyph is needed across the MirrorDNA ecosystem.

## Use Cases
- **Glyphtrail:** How it will be used
- **LingOS:** How it will be used
- **Other products:** How it will be used

## Checklist
- [ ] SVG file created in `assets/svg/`
- [ ] Registry entry added to `registry/glyphs/registry.json`
- [ ] Documentation updated in `docs/glyph_catalog.md`
- [ ] Validation script passes
- [ ] Tested at multiple sizes (16px-64px)
- [ ] Accessibility attributes included
- [ ] Related glyphs reviewed for overlap
```

---

## Modifying Existing Glyphs

### Minor Changes (Typos, Documentation)

For small fixes:
1. Make the change
2. Run validation: `python scripts/validate_registry.py`
3. Submit PR with clear description
4. Increment patch version if needed (1.0.0 → 1.0.1)

### Major Changes (Visual or Semantic)

For changes that affect appearance or meaning:
1. **Open a discussion issue first** - Explain why the change is needed
2. Get maintainer approval
3. Make the change
4. Update all documentation references
5. Increment major version (1.0.0 → 2.0.0)
6. Consider deprecation path instead of breaking change

**Note:** Changing existing glyphs can break downstream usage. Always discuss first.

---

## Improving Documentation

Documentation improvements are always welcome:

**What to improve:**
- Fix typos or unclear explanations
- Add usage examples
- Improve accessibility descriptions
- Create integration guides for new frameworks
- Add troubleshooting sections

**How to contribute:**
1. Identify the issue
2. Make the improvement
3. Submit PR with clear description

**No approval needed for:**
- Typo fixes
- Broken link fixes
- Formatting improvements

---

## Code Contributions

### React Components

**Location:** `packages/react/src/`

**Guidelines:**
- Use TypeScript with strict mode
- Follow existing component patterns
- Include prop types and JSDoc comments
- Add tests in `tests/react/`
- Update type definitions

**Example:**
```tsx
/**
 * BeaconGlyph component for rendering MirrorDNA glyphs
 * @param name - Glyph identifier (e.g., "mirrordna", "state-verified")
 * @param size - Size variant or custom number
 */
export interface BeaconGlyphProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  onClick?: () => void;
}
```

### CSS Utilities

**Location:** `packages/css/`

**Guidelines:**
- Use CSS custom properties (variables)
- Follow BEM naming: `.beacon-glyph--modifier`
- Support dark mode via `prefers-color-scheme`
- Keep utilities atomic and composable
- Test across browsers

### Tooling Scripts

**Location:** `tooling/`

**Guidelines:**
- Use Python 3.8+ or Node.js 18+
- Include clear error messages
- Add help text and documentation
- Follow existing patterns

---

## Submitting Pull Requests

### PR Checklist

Before submitting:

- [ ] Code follows existing style
- [ ] All tests pass
- [ ] Validation script passes
- [ ] Documentation updated
- [ ] CHANGELOG.md updated (if applicable)
- [ ] No breaking changes (or clearly documented)
- [ ] Commit messages are clear

### PR Format

**Title:** `[Type] Brief description`

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Formatting, missing semicolons, etc.
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance tasks

**Example:**
```
feat: Add navigation-back glyph for return actions

- Created navigation-back.svg
- Added registry entry
- Updated catalog documentation
- Tested at all size variants
```

### Review Process

1. **Automated checks** - Validation, tests, linting
2. **Semantic review** - Glyph fits visual language
3. **Ecosystem review** - Appropriate for MirrorDNA products
4. **Maintainer approval** - Final review
5. **Merge** - Squash and merge

**Response time:** Usually 2-3 business days

---

## Code of Conduct

### Our Standards

- Be respectful and constructive
- Focus on what's best for the ecosystem
- Provide clear rationale for changes
- Accept feedback gracefully
- Help newcomers get started

### Not Acceptable

- Harassment or discriminatory language
- Trolling or inflammatory comments
- Scope creep (propose glyphs for specific use cases only)
- Demanding immediate responses

### Enforcement

Violations may result in:
1. Warning
2. Temporary ban from contributions
3. Permanent ban for severe or repeated violations

---

## Questions?

- **General questions:** Open an issue with the `question` label
- **Glyph proposals:** Open an issue with the `glyph-proposal` label
- **Bug reports:** Open an issue with the `bug` label
- **Feature requests:** Open an issue with the `enhancement` label

**Remember:** BeaconGlyphs is a visual language, not a clip art library. Every glyph must earn its place through meaningful, repeated use across the MirrorDNA ecosystem.

---

**Maintained by:** MirrorDNA-Reflection-Protocol
**Last Updated:** 2025-11-14
