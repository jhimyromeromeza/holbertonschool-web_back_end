#!/usr/bin/env python3
"""fnction that return asyncio"""


import asyncio
from basic_async_syntax import wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """return asyncio task"""
    return asyncio.create_task(wait_random(max_delay))
