"""Tests for reverse_string."""

import pytest

from reverse import reverse_string


def test_reverse_string():
    assert reverse_string("hello") == "olleh"
    assert reverse_string("") == ""
    assert reverse_string("a") == "a"
    assert reverse_string("🎉🎊") == "🎊🎉"


def test_reverse_string_type_error():
    with pytest.raises(TypeError):
        reverse_string(123)
