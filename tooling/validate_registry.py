#!/usr/bin/env python3
"""
BeaconGlyphs Registry Validator

Validates the glyph registry against the JSON schema and performs
additional semantic checks to ensure consistency and quality.

FEU CONTRACT: Fact/Estimate/Unknown enforced | Bound to Master Citation v15.2
DISCLAIMER: Research prototype - informational output only | See /LEGAL_NOTICE.md
"""

import json
import sys
from pathlib import Path
from typing import List, Dict, Any


class RegistryValidator:
    """Validates BeaconGlyphs registry against schema and best practices."""

    def __init__(self, registry_path: Path, schema_path: Path):
        self.registry_path = registry_path
        self.schema_path = schema_path
        self.errors = []
        self.warnings = []

        # Load files
        with open(registry_path, 'r') as f:
            self.registry = json.load(f)

        with open(schema_path, 'r') as f:
            self.schema = json.load(f)

    def validate(self) -> bool:
        """Run all validation checks."""
        print("=" * 70)
        print("BeaconGlyphs Registry Validator")
        print("=" * 70)
        print()

        print(f"Registry: {self.registry_path}")
        print(f"Schema: {self.schema_path}")
        print()

        # Run checks
        self._check_registry_structure()
        self._check_glyph_ids()
        self._check_required_fields()
        self._check_categories()
        self._check_representations()
        self._check_duplicates()
        self._check_related_glyphs()
        self._check_accessibility()

        # Report
        self._print_report()

        return len(self.errors) == 0

    def _check_registry_structure(self):
        """Check top-level registry structure."""
        required_fields = ['version', 'description', 'glyphs']

        for field in required_fields:
            if field not in self.registry:
                self.errors.append(f"Missing required field: {field}")

        if 'glyphs' in self.registry:
            if not isinstance(self.registry['glyphs'], list):
                self.errors.append("'glyphs' must be a list")
            elif len(self.registry['glyphs']) == 0:
                self.warnings.append("Registry contains no glyphs")

    def _check_glyph_ids(self):
        """Check glyph ID format and uniqueness."""
        seen_ids = set()

        for i, glyph in enumerate(self.registry.get('glyphs', [])):
            glyph_id = glyph.get('id')

            if not glyph_id:
                self.errors.append(f"Glyph at index {i} missing 'id' field")
                continue

            # Check format: category.name
            if '.' not in glyph_id:
                self.errors.append(
                    f"Glyph ID '{glyph_id}' must be in 'category.name' format"
                )

            # Check lowercase
            if glyph_id != glyph_id.lower():
                self.errors.append(
                    f"Glyph ID '{glyph_id}' must be lowercase"
                )

            # Check for duplicates
            if glyph_id in seen_ids:
                self.errors.append(f"Duplicate glyph ID: {glyph_id}")
            else:
                seen_ids.add(glyph_id)

    def _check_required_fields(self):
        """Check that all glyphs have required fields."""
        required = ['id', 'category', 'name', 'description', 'representations']

        for glyph in self.registry.get('glyphs', []):
            glyph_id = glyph.get('id', '<unknown>')

            for field in required:
                if field not in glyph:
                    self.errors.append(
                        f"Glyph '{glyph_id}' missing required field: {field}"
                    )

    def _check_categories(self):
        """Validate category values."""
        valid_categories = self.schema.get('properties', {}).get(
            'category', {}
        ).get('enum', [])

        if not valid_categories:
            self.warnings.append("No category enum found in schema")
            return

        for glyph in self.registry.get('glyphs', []):
            category = glyph.get('category')
            glyph_id = glyph.get('id', '<unknown>')

            if category and category not in valid_categories:
                self.errors.append(
                    f"Glyph '{glyph_id}' has invalid category: {category}. "
                    f"Must be one of: {', '.join(valid_categories)}"
                )

            # Check that category matches ID prefix
            if category and '.' in glyph_id:
                id_category = glyph_id.split('.')[0]
                if id_category != category:
                    self.errors.append(
                        f"Glyph '{glyph_id}' category mismatch: "
                        f"category='{category}' but ID starts with '{id_category}'"
                    )

    def _check_representations(self):
        """Check representation formats."""
        for glyph in self.registry.get('glyphs', []):
            glyph_id = glyph.get('id', '<unknown>')
            reps = glyph.get('representations', {})

            # Required representations
            if 'unicode' not in reps:
                self.errors.append(
                    f"Glyph '{glyph_id}' missing 'unicode' representation"
                )

            if 'text' not in reps:
                self.errors.append(
                    f"Glyph '{glyph_id}' missing 'text' representation"
                )

            # Check text format: [KEYWORD]
            text = reps.get('text', '')
            if text:
                if not text.startswith('[') or not text.endswith(']'):
                    self.warnings.append(
                        f"Glyph '{glyph_id}' text representation should be "
                        f"in [KEYWORD] format, got: {text}"
                    )
                if text.upper() != text:
                    self.warnings.append(
                        f"Glyph '{glyph_id}' text representation should be "
                        f"uppercase: {text}"
                    )

    def _check_duplicates(self):
        """Check for duplicate representations."""
        unicode_map = {}
        text_map = {}

        for glyph in self.registry.get('glyphs', []):
            glyph_id = glyph.get('id', '<unknown>')
            reps = glyph.get('representations', {})

            # Check unicode duplicates
            unicode = reps.get('unicode')
            if unicode:
                if unicode in unicode_map:
                    self.warnings.append(
                        f"Duplicate unicode representation '{unicode}': "
                        f"used by '{glyph_id}' and '{unicode_map[unicode]}'"
                    )
                else:
                    unicode_map[unicode] = glyph_id

            # Check text duplicates
            text = reps.get('text')
            if text:
                if text in text_map:
                    self.errors.append(
                        f"Duplicate text representation '{text}': "
                        f"used by '{glyph_id}' and '{text_map[text]}'"
                    )
                else:
                    text_map[text] = glyph_id

    def _check_related_glyphs(self):
        """Validate related glyph references."""
        all_ids = {g.get('id') for g in self.registry.get('glyphs', [])}

        for glyph in self.registry.get('glyphs', []):
            glyph_id = glyph.get('id', '<unknown>')
            related = glyph.get('metadata', {}).get('relatedGlyphs', [])

            for related_id in related:
                if related_id not in all_ids:
                    self.errors.append(
                        f"Glyph '{glyph_id}' references non-existent "
                        f"related glyph: {related_id}"
                    )

    def _check_accessibility(self):
        """Check accessibility descriptions."""
        for glyph in self.registry.get('glyphs', []):
            glyph_id = glyph.get('id', '<unknown>')
            accessibility = glyph.get('metadata', {}).get('accessibility')

            if not accessibility:
                self.warnings.append(
                    f"Glyph '{glyph_id}' missing accessibility description"
                )
            elif len(accessibility) < 10:
                self.warnings.append(
                    f"Glyph '{glyph_id}' accessibility description is too short"
                )

    def _print_report(self):
        """Print validation report."""
        print("=" * 70)
        print("VALIDATION REPORT")
        print("=" * 70)
        print()

        glyph_count = len(self.registry.get('glyphs', []))
        print(f"Total glyphs: {glyph_count}")
        print()

        if self.errors:
            print(f"ERRORS ({len(self.errors)}):")
            for error in self.errors:
                print(f"  ❌ {error}")
            print()

        if self.warnings:
            print(f"WARNINGS ({len(self.warnings)}):")
            for warning in self.warnings:
                print(f"  ⚠️  {warning}")
            print()

        if not self.errors and not self.warnings:
            print("✅ All checks passed! Registry is valid.")
            print()

        print("=" * 70)


def main():
    """Main entry point."""
    # Determine paths
    base_path = Path(__file__).parent.parent
    registry_path = base_path / "src" / "glyphs" / "registry.json"
    schema_path = base_path / "src" / "schema" / "glyph_schema.json"

    # Check files exist
    if not registry_path.exists():
        print(f"Error: Registry not found at {registry_path}")
        return 1

    if not schema_path.exists():
        print(f"Error: Schema not found at {schema_path}")
        return 1

    # Validate
    validator = RegistryValidator(registry_path, schema_path)
    is_valid = validator.validate()

    return 0 if is_valid else 1


if __name__ == "__main__":
    sys.exit(main())
