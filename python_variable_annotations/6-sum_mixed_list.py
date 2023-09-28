#!/usr/bin/env python3
"""function with parameter of List with integer and float"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """return sum of the list integer and floar"""
    return float(sum(mxd_lst))
