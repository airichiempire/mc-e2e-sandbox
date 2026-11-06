"""String reversal utility."""


def reverse_string(s):
    """Reverse a string.

    Args:
        s: The string to reverse.

    Returns:
        The reversed string.

    Raises:
        TypeError: If `s` is not a string.
    """
    if not isinstance(s, str):
        raise TypeError(f"reverse_string expects a string, got {type(s).__name__}")
    # Python 3 strings are sequences of code points, so slicing keeps
    # non-BMP characters (e.g. emoji) intact.
    return s[::-1]
