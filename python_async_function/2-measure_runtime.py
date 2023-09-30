#!/usr/bin/env python3
"""function that sum all the time"""


import time
from concurrent_coroutines import wait_n


def measure_time(n: int, max_delay: int) -> float:
    """return total of time """
    start_time = time.time()
    await wait_n(n, max_delay)
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
