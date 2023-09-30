#!/usr/bin/env python3
"""function"""


import asyncio
from 0-basic_async_syntax import wait_random
from typing import List


async def wait_n(n: int, max_delay: int) -> List[float]:
    """function that return list of float"""
    task = []
    for _ in range(n):
        task.append(wait_random(max_delay))
    delays = []
    for _ in range(n):
        make = await asyncio.as_completed(task)
        delays.append(make)
    return delays
