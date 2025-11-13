# Glyphtrail Integration Example

This example demonstrates how **Glyphtrail** (the interaction lineage and continuity logging system) uses **BeaconGlyphs** to render session events with consistent visual symbols.

## What This Shows

- Loading and using the BeaconGlyphs registry
- Mapping session event types to appropriate glyphs
- Rendering full interaction lineages
- Creating compact visual timelines
- Summarizing continuity health

## Running the Example

```bash
python examples/glyphtrail_integration/session_renderer.py
```

## Sample Output

```
▶  [10:00:01] Session initiated
🧬 [10:00:02] Agent DNA loaded from vault (agent_id=alice-001)
✓  [10:00:03] Identity verified against protocol
🔗 [10:00:04] Linked to previous session (prev_session=session-2025-11-12-043)
⛓️  [10:00:05] Continuity chain established
⚡ [10:00:06] System active and responsive
🛡️ [10:00:07] Trust boundary established
🪞 [10:00:08] Reflection checkpoint #1 (depth=shallow)
...
```

## Key Concepts

### Event-to-Glyph Mapping

The `GlyphtrailSession` class maintains a mapping of event types to glyph IDs:

```python
EVENT_GLYPH_MAP = {
    'session.start': 'events.start',
    'identity.loaded': 'identity.dna',
    'continuity.established': 'continuity.chain',
    'reflection.checkpoint': 'reflection.mirror',
    # etc.
}
```

### Visual Timeline

Events can be rendered as a compact timeline:
```
▶ 🧬 ✓ 🔗 ⛓️ ⚡ 🛡️ 🪞 💾 ⚑ 🪞 ⚖️ ■
```

This makes it easy to see the flow of a session at a glance.

### Continuity Health

The system can analyze continuity events to report health:
```
⛓️ Continuity: Healthy (4 links, 0 breaks)
⛓️ Continuity: Degraded (2 links, 1 breaks)
```

## Integration Pattern

This is the recommended pattern for any system that wants to use BeaconGlyphs:

1. **Load the registry once** at initialization
2. **Create a mapping** from your event types to glyph IDs
3. **Access glyphs** via helper methods
4. **Render** in the format appropriate for your output (unicode, text, svg)

## Extending

To add more event types:

1. Add the event type to `EVENT_GLYPH_MAP`
2. Map it to an appropriate glyph ID
3. If no suitable glyph exists, propose a new one to BeaconGlyphs

---

**This example is a reference implementation.** Real Glyphtrail may have additional features, but the core pattern of using BeaconGlyphs remains the same.
