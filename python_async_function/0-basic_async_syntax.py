#!/usr/bin/env python3
"""function async that generate number random"""


import async
import random


async def wait_random(max_delay: int = 10) -> float:
    """return number random"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
