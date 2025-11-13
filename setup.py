"""
BeaconGlyphs - Visual and symbolic language for the MirrorDNA ecosystem
"""

from setuptools import setup, find_packages
from pathlib import Path

# Read README for long description
readme_path = Path(__file__).parent / "README.md"
long_description = readme_path.read_text(encoding="utf-8") if readme_path.exists() else ""

setup(
    name="beaconglyphs",
    version="1.0.0",
    description="Visual and symbolic language system for the MirrorDNA ecosystem",
    long_description=long_description,
    long_description_content_type="text/markdown",
    author="MirrorDNA-Reflection-Protocol",
    url="https://github.com/MirrorDNA-Reflection-Protocol/BeaconGlyphs",
    license="MIT",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    include_package_data=True,
    package_data={
        "": ["*.json", "glyphs/*.json", "schema/*.json"],
    },
    python_requires=">=3.7",
    install_requires=[
        # No runtime dependencies - just data files
    ],
    extras_require={
        "dev": [
            "pytest>=7.0.0",
            "pytest-cov>=4.0.0",
            "jsonschema>=4.0.0",
        ],
    },
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Topic :: Software Development :: Libraries",
        "Topic :: Multimedia :: Graphics",
    ],
    keywords="glyphs symbols iconography mirrordna continuity identity",
)
