#!/usr/bin/env python3
"""function async"""


import asyncio
from async_comprehension import async_comprehension
import time


async def measure_runtime() -> float:
    """return float"""
    start_time = time.time()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    end_time = time.time()
    return end_time - start_time
