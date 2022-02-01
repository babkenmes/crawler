
import json
from inspect import getmembers, isfunction
import random
from fields import ANIMATION_FIELD
import requests
from exceptions import AnimationError

def getAnimationGroupName(id):
    group = requests.get(f'http://app:5000/api/groups/{id}').json()
    return group["name"]

def callAnimation(key_data, driver):
    try:
        group = getAnimationGroupName(key_data["animation_group"])
        animations = [o for o in getmembers(__import__(group)) if isfunction(o[1])]
        animation = random.choice(animations)
        print(f"got animation {animation[0]}")
        animation[1](driver)
    except Exception as e:
        raise AnimationError(e)

