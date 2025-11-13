# Contributing to BeaconGlyphs

Thank you for your interest in contributing to BeaconGlyphs! This document provides guidelines for proposing new glyphs and improving the registry.

## How to Contribute

### Proposing a New Glyph

Before proposing a new glyph, ask yourself:

1. **Is this concept used repeatedly across the ecosystem?**
   - Glyphs are for recurring patterns, not one-off situations

2. **Does a similar glyph already exist?**
   - Check `docs/catalog.md` for existing glyphs
   - Consider combining existing glyphs instead

3. **Can this be clearly represented visually?**
   - The glyph should be immediately recognizable
   - Must have Unicode and text fallback options

4. **Does it fit the existing visual language?**
   - Review `docs/overview.md` for design principles

### Steps to Add a New Glyph

1. **Check the Schema**
   - Read `src/schema/glyph_schema.json` to understand the required fields

2. **Create Your Glyph Definition**
   ```json
   {
     "id": "category.name",
     "category": "category",
     "name": "Human Readable Name",
     "description": "Clear description of what this glyph represents",
     "representations": {
       "unicode": "🔮",
       "text": "[KEYWORD]",
       "emoji": "🔮"
     },
     "metadata": {
       "tags": ["tag1", "tag2"],
       "useCases": ["ui", "logs"],
       "accessibility": "Screen reader description"
     }
   }
   ```

3. **Add to Registry**
   - Edit `src/glyphs/registry.json`
   - Insert your glyph in the appropriate category section
   - Maintain alphabetical order within the category

4. **Validate**
   ```bash
   python tooling/validate_registry.py
   ```

5. **Update Documentation**
   - Add your glyph to `docs/catalog.md`
   - If creating a new category, update `docs/architecture.md`

6. **Test**
   - Run tests: `pytest tests/`
   - Verify examples still work: `python examples/render_glyphs.py`

7. **Submit Pull Request**
   - Clear title: "Add [category.name] glyph for [use case]"
   - Description explaining:
     - What the glyph represents
     - Why it's needed
     - Where it will be used in the ecosystem

### Modifying Existing Glyphs

To modify an existing glyph:

1. **For minor changes** (typos, description improvements):
   - Update the registry
   - Increment patch version (1.0.0 → 1.0.1)

2. **For breaking changes** (changing ID or meaning):
   - Create a discussion issue first
   - Breaking changes require major version bump (1.0.0 → 2.0.0)
   - Consider deprecation path instead

### Improving Documentation

Documentation improvements are always welcome:

- Fix typos or unclear explanations
- Add usage examples
- Improve accessibility descriptions
- Create integration guides for new platforms

## Code of Conduct

- Be respectful and constructive
- Focus on what's best for the ecosystem
- Provide clear rationale for proposed changes
- Accept feedback gracefully

## Review Process

1. **Automated checks** run on all PRs (validation, tests)
2. **Semantic review** ensures the glyph fits the visual language
3. **Ecosystem review** verifies integration with MirrorDNA components
4. **Approval and merge** by maintainers

## Questions?

Open an issue with the `question` label or reach out to the MirrorDNA-Reflection-Protocol team.

---

**Remember:** BeaconGlyphs is a visual language, not a clip art library. Every glyph must earn its place through meaningful, repeated use across the ecosystem.
