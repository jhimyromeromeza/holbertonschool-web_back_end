#!/usr/bin/env python3
"""function async """


import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """return number generator"""
    for _ in range(0, 10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
