#!/usr/bin/env python3
"""
BeaconGlyphs - Python Usage Example

Demonstrates how to load and use the glyph registry in a Python application.
"""

import json
import os
from pathlib import Path


class BeaconGlyphs:
    """Simple glyph registry wrapper for Python applications."""

    def __init__(self, registry_path=None):
        if registry_path is None:
            # Default to the registry in this repo
            base_path = Path(__file__).parent.parent
            registry_path = base_path / "src" / "glyphs" / "registry.json"

        with open(registry_path, 'r') as f:
            self.registry = json.load(f)

        # Build an index for fast lookup
        self._index = {
            glyph['id']: glyph
            for glyph in self.registry['glyphs']
        }

    def get(self, glyph_id, format='unicode'):
        """
        Get a glyph by ID in the specified format.

        Args:
            glyph_id: Glyph identifier (e.g., 'continuity.chain')
            format: Representation format ('unicode', 'text', 'emoji', 'svg')

        Returns:
            String representation of the glyph, or None if not found
        """
        glyph = self._index.get(glyph_id)
        if not glyph:
            return None

        return glyph['representations'].get(format)

    def get_glyph(self, glyph_id):
        """Get the full glyph object."""
        return self._index.get(glyph_id)

    def search_by_tag(self, tag):
        """Find glyphs that have a specific tag."""
        results = []
        for glyph in self.registry['glyphs']:
            tags = glyph.get('metadata', {}).get('tags', [])
            if tag in tags:
                results.append(glyph)
        return results

    def get_category(self, category_name):
        """Get all glyphs in a specific category."""
        return [
            glyph for glyph in self.registry['glyphs']
            if glyph['category'] == category_name
        ]

    def all_categories(self):
        """Get a list of all unique categories."""
        return sorted(set(
            glyph['category']
            for glyph in self.registry['glyphs']
        ))


def demo_basic_usage():
    """Demonstrate basic glyph access."""
    print("=" * 60)
    print("BeaconGlyphs - Basic Usage Demo")
    print("=" * 60)
    print()

    glyphs = BeaconGlyphs()

    # Get individual glyphs
    print("1. Individual Glyphs:")
    print(f"   Continuity Chain: {glyphs.get('continuity.chain')}")
    print(f"   DNA Identity: {glyphs.get('identity.dna')}")
    print(f"   Verified State: {glyphs.get('state.verified')}")
    print()

    # Get different representations
    print("2. Multiple Representations:")
    chain = glyphs.get_glyph('continuity.chain')
    print(f"   ID: {chain['id']}")
    print(f"   Name: {chain['name']}")
    print(f"   Unicode: {glyphs.get('continuity.chain', 'unicode')}")
    print(f"   Text: {glyphs.get('continuity.chain', 'text')}")
    print(f"   Description: {chain['description']}")
    print()


def demo_category_display():
    """Display all glyphs by category."""
    print("=" * 60)
    print("BeaconGlyphs - Category Display")
    print("=" * 60)
    print()

    glyphs = BeaconGlyphs()

    for category in glyphs.all_categories():
        print(f"{category.upper()}")
        print("-" * 40)

        category_glyphs = glyphs.get_category(category)
        for glyph in category_glyphs:
            unicode_repr = glyph['representations']['unicode']
            name = glyph['name']
            print(f"  {unicode_repr}  {name}")

        print()


def demo_status_indicator():
    """Simulate a system status indicator."""
    print("=" * 60)
    print("BeaconGlyphs - Status Indicator Demo")
    print("=" * 60)
    print()

    glyphs = BeaconGlyphs()

    # Simulate different service states
    services = [
        {"name": "MirrorDNA Core", "active": True, "verified": True, "protected": True},
        {"name": "Glyphtrail Logger", "active": True, "verified": True, "protected": False},
        {"name": "LingOS Reflector", "active": False, "verified": True, "protected": True},
        {"name": "Agent DNA Store", "active": True, "verified": False, "protected": True},
    ]

    print("Service Status:")
    print()

    for service in services:
        status_glyphs = []

        if service['active']:
            status_glyphs.append(glyphs.get('state.active'))
        if service['verified']:
            status_glyphs.append(glyphs.get('state.verified'))
        if service['protected']:
            status_glyphs.append(glyphs.get('state.protected'))

        status_str = ' '.join(status_glyphs) if status_glyphs else '—'
        print(f"  [{status_str}] {service['name']}")

    print()


def demo_continuity_chain():
    """Visualize a continuity chain."""
    print("=" * 60)
    print("BeaconGlyphs - Continuity Chain Demo")
    print("=" * 60)
    print()

    glyphs = BeaconGlyphs()

    # Simulate session continuity
    sessions = [
        {"id": 1, "continuous": True},
        {"id": 2, "continuous": True},
        {"id": 3, "continuous": True},
        {"id": 4, "continuous": False},  # Break!
        {"id": 5, "continuous": True},
        {"id": 6, "continuous": True},
    ]

    print("Session Continuity Timeline:")
    print()

    chain = []
    for session in sessions:
        if session['continuous']:
            chain.append(glyphs.get('continuity.link'))
        else:
            chain.append(glyphs.get('continuity.broken'))

    print("  " + ' '.join(chain))
    print()

    # Label
    labels = [f"S{s['id']}" for s in sessions]
    print("  " + '  '.join(labels))
    print()


def demo_event_log():
    """Simulate an event log with glyphs."""
    print("=" * 60)
    print("BeaconGlyphs - Event Log Demo")
    print("=" * 60)
    print()

    glyphs = BeaconGlyphs()

    events = [
        ("events.start", "Session initiated"),
        ("identity.dna", "Agent DNA loaded"),
        ("state.verified", "Identity verified"),
        ("continuity.chain", "Continuity established"),
        ("reflection.mirror", "Reflection checkpoint"),
        ("events.warning", "Memory threshold warning"),
        ("state.active", "System stabilized"),
        ("events.stop", "Session ended"),
    ]

    print("System Event Log:")
    print()

    for i, (glyph_id, message) in enumerate(events, 1):
        glyph = glyphs.get(glyph_id)
        timestamp = f"2025-11-13 10:{i:02d}"
        print(f"  {timestamp} {glyph} {message}")

    print()


def demo_search():
    """Demonstrate search capabilities."""
    print("=" * 60)
    print("BeaconGlyphs - Search Demo")
    print("=" * 60)
    print()

    glyphs = BeaconGlyphs()

    # Search by tag
    print("Glyphs tagged with 'continuity':")
    continuity_glyphs = glyphs.search_by_tag('continuity')
    for glyph in continuity_glyphs:
        print(f"  {glyph['representations']['unicode']} {glyph['name']}")
    print()

    print("Glyphs tagged with 'identity':")
    identity_glyphs = glyphs.search_by_tag('identity')
    for glyph in identity_glyphs:
        print(f"  {glyph['representations']['unicode']} {glyph['name']}")
    print()


def main():
    """Run all demos."""
    demo_basic_usage()
    demo_category_display()
    demo_status_indicator()
    demo_continuity_chain()
    demo_event_log()
    demo_search()

    print("=" * 60)
    print("Demo complete! Check the registry at src/glyphs/registry.json")
    print("=" * 60)


if __name__ == "__main__":
    main()
