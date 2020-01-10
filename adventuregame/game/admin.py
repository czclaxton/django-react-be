from django.contrib import admin
from game.models import Character
from game.models import GameMap

# Register your models here.
admin.site.register(Character)
admin.site.register(GameMap)
