#!/usr/bin/env python3
"""function return tuple of string and float"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """return tuple strin k and int/float 2"""
    return k, float(v**2)
