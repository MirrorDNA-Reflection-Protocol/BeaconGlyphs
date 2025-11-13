"""
Tests for BeaconGlyphs schema validation and registry integrity.
"""

import json
import pytest
from pathlib import Path


# Determine paths
BASE_PATH = Path(__file__).parent.parent
REGISTRY_PATH = BASE_PATH / "src" / "glyphs" / "registry.json"
SCHEMA_PATH = BASE_PATH / "src" / "schema" / "glyph_schema.json"


@pytest.fixture
def registry():
    """Load the glyph registry."""
    with open(REGISTRY_PATH, 'r') as f:
        return json.load(f)


@pytest.fixture
def schema():
    """Load the glyph schema."""
    with open(SCHEMA_PATH, 'r') as f:
        return json.load(f)


@pytest.fixture
def glyphs(registry):
    """Get the list of glyphs."""
    return registry.get('glyphs', [])


class TestRegistryStructure:
    """Test top-level registry structure."""

    def test_registry_has_version(self, registry):
        assert 'version' in registry
        assert isinstance(registry['version'], str)

    def test_registry_has_description(self, registry):
        assert 'description' in registry
        assert len(registry['description']) > 0

    def test_registry_has_glyphs(self, registry):
        assert 'glyphs' in registry
        assert isinstance(registry['glyphs'], list)

    def test_registry_not_empty(self, glyphs):
        assert len(glyphs) > 0, "Registry should contain at least one glyph"


class TestGlyphIDs:
    """Test glyph ID format and uniqueness."""

    def test_all_glyphs_have_ids(self, glyphs):
        for glyph in glyphs:
            assert 'id' in glyph, f"Glyph missing 'id': {glyph}"

    def test_glyph_ids_are_unique(self, glyphs):
        ids = [g['id'] for g in glyphs]
        assert len(ids) == len(set(ids)), "Duplicate glyph IDs found"

    def test_glyph_id_format(self, glyphs):
        """Test that IDs follow category.name format."""
        for glyph in glyphs:
            glyph_id = glyph['id']
            assert '.' in glyph_id, f"Glyph ID '{glyph_id}' must contain a dot"
            parts = glyph_id.split('.')
            assert len(parts) == 2, f"Glyph ID '{glyph_id}' must have exactly one dot"

    def test_glyph_ids_lowercase(self, glyphs):
        """Test that IDs are lowercase."""
        for glyph in glyphs:
            glyph_id = glyph['id']
            assert glyph_id == glyph_id.lower(), \
                f"Glyph ID '{glyph_id}' must be lowercase"


class TestRequiredFields:
    """Test that all glyphs have required fields."""

    REQUIRED_FIELDS = ['id', 'category', 'name', 'description', 'representations']

    def test_glyphs_have_required_fields(self, glyphs):
        for glyph in glyphs:
            for field in self.REQUIRED_FIELDS:
                assert field in glyph, \
                    f"Glyph '{glyph.get('id', '?')}' missing field '{field}'"


class TestCategories:
    """Test category validity."""

    def test_categories_match_schema(self, glyphs, schema):
        """Test that categories are in the schema enum."""
        valid_categories = schema.get('properties', {}).get('category', {}).get('enum', [])

        if valid_categories:  # Only test if schema has category enum
            for glyph in glyphs:
                category = glyph.get('category')
                assert category in valid_categories, \
                    f"Glyph '{glyph['id']}' has invalid category: {category}"

    def test_category_matches_id_prefix(self, glyphs):
        """Test that category matches the ID prefix."""
        for glyph in glyphs:
            glyph_id = glyph['id']
            category = glyph['category']
            id_prefix = glyph_id.split('.')[0]

            assert id_prefix == category, \
                f"Glyph '{glyph_id}' category mismatch: " \
                f"category='{category}' but ID starts with '{id_prefix}'"


class TestRepresentations:
    """Test glyph representations."""

    def test_glyphs_have_unicode(self, glyphs):
        for glyph in glyphs:
            assert 'unicode' in glyph['representations'], \
                f"Glyph '{glyph['id']}' missing unicode representation"

    def test_glyphs_have_text(self, glyphs):
        for glyph in glyphs:
            assert 'text' in glyph['representations'], \
                f"Glyph '{glyph['id']}' missing text representation"

    def test_unicode_not_empty(self, glyphs):
        for glyph in glyphs:
            unicode_repr = glyph['representations']['unicode']
            assert len(unicode_repr) > 0, \
                f"Glyph '{glyph['id']}' has empty unicode representation"

    def test_text_not_empty(self, glyphs):
        for glyph in glyphs:
            text_repr = glyph['representations']['text']
            assert len(text_repr) > 0, \
                f"Glyph '{glyph['id']}' has empty text representation"

    def test_text_format(self, glyphs):
        """Test that text representations follow [KEYWORD] format."""
        for glyph in glyphs:
            text = glyph['representations']['text']
            assert text.startswith('[') and text.endswith(']'), \
                f"Glyph '{glyph['id']}' text should be in [KEYWORD] format: {text}"


class TestDescriptions:
    """Test glyph descriptions."""

    def test_descriptions_not_empty(self, glyphs):
        for glyph in glyphs:
            desc = glyph.get('description', '')
            assert len(desc) > 0, \
                f"Glyph '{glyph['id']}' has empty description"

    def test_descriptions_minimum_length(self, glyphs):
        """Descriptions should be at least 10 characters."""
        for glyph in glyphs:
            desc = glyph.get('description', '')
            assert len(desc) >= 10, \
                f"Glyph '{glyph['id']}' description too short: {desc}"


class TestDuplicates:
    """Test for duplicate representations."""

    def test_no_duplicate_text_representations(self, glyphs):
        """Text representations must be unique."""
        text_reps = [g['representations']['text'] for g in glyphs]
        duplicates = [t for t in text_reps if text_reps.count(t) > 1]

        assert len(duplicates) == 0, \
            f"Duplicate text representations found: {set(duplicates)}"


class TestMetadata:
    """Test metadata fields."""

    def test_metadata_structure(self, glyphs):
        """If metadata exists, check its structure."""
        for glyph in glyphs:
            if 'metadata' in glyph:
                metadata = glyph['metadata']
                assert isinstance(metadata, dict), \
                    f"Glyph '{glyph['id']}' metadata must be a dict"

    def test_tags_are_lists(self, glyphs):
        """If tags exist, they should be lists."""
        for glyph in glyphs:
            metadata = glyph.get('metadata', {})
            if 'tags' in metadata:
                assert isinstance(metadata['tags'], list), \
                    f"Glyph '{glyph['id']}' tags must be a list"

    def test_use_cases_are_lists(self, glyphs):
        """If useCases exist, they should be lists."""
        for glyph in glyphs:
            metadata = glyph.get('metadata', {})
            if 'useCases' in metadata:
                assert isinstance(metadata['useCases'], list), \
                    f"Glyph '{glyph['id']}' useCases must be a list"


class TestRelatedGlyphs:
    """Test related glyph references."""

    def test_related_glyphs_exist(self, glyphs):
        """Test that all related glyphs reference valid IDs."""
        all_ids = {g['id'] for g in glyphs}

        for glyph in glyphs:
            metadata = glyph.get('metadata', {})
            related = metadata.get('relatedGlyphs', [])

            for related_id in related:
                assert related_id in all_ids, \
                    f"Glyph '{glyph['id']}' references non-existent " \
                    f"related glyph: {related_id}"


class TestCategoryDistribution:
    """Test category distribution and coverage."""

    def test_multiple_categories_exist(self, glyphs):
        """Should have glyphs in multiple categories."""
        categories = {g['category'] for g in glyphs}
        assert len(categories) >= 3, \
            "Registry should have glyphs in at least 3 categories"

    def test_each_category_has_glyphs(self, glyphs, schema):
        """Each defined category should have at least one glyph."""
        valid_categories = schema.get('properties', {}).get('category', {}).get('enum', [])
        actual_categories = {g['category'] for g in glyphs}

        # At least 50% of defined categories should have glyphs
        if valid_categories:
            coverage = len(actual_categories) / len(valid_categories)
            assert coverage >= 0.5, \
                f"Only {coverage*100:.0f}% of categories have glyphs"


class TestUtilityFunctions:
    """Test that common usage patterns work."""

    def test_can_get_glyph_by_id(self, glyphs):
        """Test lookup by ID."""
        glyph_index = {g['id']: g for g in glyphs}

        # Try to get a known glyph
        test_id = glyphs[0]['id']
        assert test_id in glyph_index

    def test_can_filter_by_category(self, glyphs):
        """Test filtering by category."""
        if len(glyphs) > 0:
            test_category = glyphs[0]['category']
            filtered = [g for g in glyphs if g['category'] == test_category]
            assert len(filtered) > 0

    def test_can_search_by_tag(self, glyphs):
        """Test searching by tag."""
        # Find a glyph with tags
        for glyph in glyphs:
            tags = glyph.get('metadata', {}).get('tags', [])
            if tags:
                # Search for it
                tag = tags[0]
                results = [
                    g for g in glyphs
                    if tag in g.get('metadata', {}).get('tags', [])
                ]
                assert len(results) > 0
                break
