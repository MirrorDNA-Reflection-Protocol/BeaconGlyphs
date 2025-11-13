#!/usr/bin/env python3
"""
BeaconGlyphs + Glyphtrail Integration Example

Demonstrates how Glyphtrail would use BeaconGlyphs to render
interaction lineages with consistent visual symbols.
"""

import json
from datetime import datetime
from pathlib import Path


class BeaconGlyphsLoader:
    """Load and access BeaconGlyphs registry."""

    def __init__(self):
        # Load from the registry
        base_path = Path(__file__).parent.parent.parent
        registry_path = base_path / "src" / "glyphs" / "registry.json"

        with open(registry_path, 'r') as f:
            self.registry = json.load(f)

        self._index = {g['id']: g for g in self.registry['glyphs']}

    def get(self, glyph_id, format='unicode'):
        glyph = self._index.get(glyph_id)
        return glyph['representations'].get(format) if glyph else '?'


class GlyphtrailEvent:
    """Represents a single event in an interaction lineage."""

    def __init__(self, event_type, message, timestamp=None, metadata=None):
        self.event_type = event_type
        self.message = message
        self.timestamp = timestamp or datetime.now()
        self.metadata = metadata or {}


class GlyphtrailSession:
    """A complete session with interaction lineage."""

    # Map event types to glyph IDs
    EVENT_GLYPH_MAP = {
        'session.start': 'events.start',
        'session.stop': 'events.stop',
        'identity.loaded': 'identity.dna',
        'identity.verified': 'state.verified',
        'continuity.established': 'continuity.chain',
        'continuity.linked': 'continuity.link',
        'continuity.broken': 'continuity.broken',
        'continuity.infinite': 'continuity.infinity',
        'reflection.checkpoint': 'reflection.mirror',
        'reflection.recursive': 'reflection.recursive',
        'state.active': 'state.active',
        'state.protected': 'state.protected',
        'event.milestone': 'events.flag',
        'event.warning': 'events.warning',
        'event.cycle': 'events.cycle',
        'data.saved': 'data.memory',
        'governance.check': 'governance.balance',
    }

    def __init__(self, session_id, agent_name=None):
        self.session_id = session_id
        self.agent_name = agent_name or f"Agent-{session_id}"
        self.events = []
        self.glyphs = BeaconGlyphsLoader()

    def add_event(self, event_type, message, metadata=None):
        """Add an event to the session."""
        event = GlyphtrailEvent(event_type, message, metadata=metadata)
        self.events.append(event)

    def render_lineage(self, format='unicode'):
        """Render the complete interaction lineage."""
        output = []

        # Header
        output.append("=" * 70)
        output.append(f"GLYPHTRAIL SESSION LINEAGE")
        output.append(f"Session: {self.session_id}")
        output.append(f"Agent: {self.agent_name}")
        output.append("=" * 70)
        output.append("")

        # Events
        for i, event in enumerate(self.events, 1):
            glyph_id = self.EVENT_GLYPH_MAP.get(event.event_type, 'events.flag')
            glyph = self.glyphs.get(glyph_id, format)

            timestamp = event.timestamp.strftime('%H:%M:%S')

            line = f"  {glyph}  [{timestamp}] {event.message}"

            if event.metadata:
                meta_str = ', '.join(f"{k}={v}" for k, v in event.metadata.items())
                line += f" ({meta_str})"

            output.append(line)

        output.append("")
        output.append("=" * 70)
        output.append(f"Total events: {len(self.events)}")
        output.append("=" * 70)

        return '\n'.join(output)

    def render_timeline(self, format='unicode'):
        """Render a compact visual timeline."""
        timeline_glyphs = []

        for event in self.events:
            glyph_id = self.EVENT_GLYPH_MAP.get(event.event_type, 'events.flag')
            glyph = self.glyphs.get(glyph_id, format)
            timeline_glyphs.append(glyph)

        return ' '.join(timeline_glyphs)

    def render_continuity_summary(self):
        """Render a continuity health summary."""
        continuity_events = [
            e for e in self.events
            if e.event_type.startswith('continuity.')
        ]

        if not continuity_events:
            return "No continuity events recorded"

        breaks = sum(1 for e in continuity_events if 'broken' in e.event_type)
        links = sum(1 for e in continuity_events if 'linked' in e.event_type or 'established' in e.event_type)

        chain_glyph = self.glyphs.get('continuity.chain')
        broken_glyph = self.glyphs.get('continuity.broken')

        health = "Healthy" if breaks == 0 else "Degraded"

        return f"{chain_glyph} Continuity: {health} ({links} links, {breaks} breaks)"


def demo_typical_session():
    """Demonstrate a typical MirrorDNA session."""
    print("\n" + "=" * 70)
    print("DEMO: Typical MirrorDNA Session")
    print("=" * 70 + "\n")

    session = GlyphtrailSession("session-2025-11-13-001", "Alice")

    # Build up a realistic session
    session.add_event('session.start', 'Session initiated')
    session.add_event('identity.loaded', 'Agent DNA loaded from vault', {'agent_id': 'alice-001'})
    session.add_event('identity.verified', 'Identity verified against protocol')
    session.add_event('continuity.linked', 'Linked to previous session', {'prev_session': 'session-2025-11-12-043'})
    session.add_event('continuity.established', 'Continuity chain established')
    session.add_event('state.active', 'System active and responsive')
    session.add_event('state.protected', 'Trust boundary established')
    session.add_event('reflection.checkpoint', 'Reflection checkpoint #1', {'depth': 'shallow'})
    session.add_event('data.saved', 'Memory persisted to vault')
    session.add_event('event.milestone', 'User request completed')
    session.add_event('reflection.checkpoint', 'Reflection checkpoint #2', {'depth': 'deep'})
    session.add_event('governance.check', 'Compliance verification passed')
    session.add_event('session.stop', 'Session ended gracefully')

    # Render full lineage
    print(session.render_lineage())
    print("\n")

    # Render compact timeline
    print("Compact Timeline:")
    print(session.render_timeline())
    print("\n")

    # Continuity summary
    print(session.render_continuity_summary())
    print("\n")


def demo_broken_continuity():
    """Demonstrate a session with continuity issues."""
    print("\n" + "=" * 70)
    print("DEMO: Session with Broken Continuity")
    print("=" * 70 + "\n")

    session = GlyphtrailSession("session-2025-11-13-002", "Bob")

    session.add_event('session.start', 'Session initiated')
    session.add_event('identity.loaded', 'Agent DNA loaded')
    session.add_event('event.warning', 'Previous session not found')
    session.add_event('continuity.broken', 'Cannot establish continuity chain')
    session.add_event('state.active', 'System running in degraded mode')
    session.add_event('reflection.checkpoint', 'Limited reflection (no history)')
    session.add_event('data.saved', 'New memory chain started')
    session.add_event('session.stop', 'Session ended')

    print(session.render_lineage())
    print("\n")

    print(session.render_continuity_summary())
    print("\n")


def demo_recursive_reflection():
    """Demonstrate recursive reflection patterns."""
    print("\n" + "=" * 70)
    print("DEMO: Recursive Reflection Session")
    print("=" * 70 + "\n")

    session = GlyphtrailSession("session-2025-11-13-003", "Reflective Agent")

    session.add_event('session.start', 'Reflection session initiated')
    session.add_event('identity.loaded', 'Agent DNA loaded')
    session.add_event('continuity.infinite', 'Accessing long-term memory archive')
    session.add_event('reflection.mirror', 'Initial reflection on current state')
    session.add_event('reflection.recursive', 'Reflecting on reflection patterns')
    session.add_event('reflection.recursive', 'Meta-analysis of reflection depth')
    session.add_event('reflection.mirror', 'Synthesis of insights')
    session.add_event('governance.check', 'Self-governance verification')
    session.add_event('data.saved', 'Reflection insights persisted')
    session.add_event('session.stop', 'Reflection session complete')

    print(session.render_lineage())
    print("\n")


def main():
    """Run all demos."""
    demo_typical_session()
    demo_broken_continuity()
    demo_recursive_reflection()

    print("=" * 70)
    print("Integration demos complete!")
    print("=" * 70)
    print()
    print("This demonstrates how Glyphtrail uses BeaconGlyphs to:")
    print("  - Render consistent visual symbols for events")
    print("  - Create readable interaction lineages")
    print("  - Visualize continuity health")
    print("  - Make abstract protocol events concrete and visible")
    print()


if __name__ == "__main__":
    main()
