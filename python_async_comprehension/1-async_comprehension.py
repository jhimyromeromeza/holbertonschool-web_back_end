#!/usr/bin/env python3
"""function"""


from async_generator import async_generator
import asyncio
import List


async def async_comprehension() -> List[float]:
    """return list of date float generator for a function"""
    return [i async for i in async_generator()]
