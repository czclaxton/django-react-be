from django.db import models
from django.contrib.auth.models import User


class Cell(models.Model):
    cell_type = models.CharField(max_length=20)
    opacity = models.FloatField(default=0)
    cell_id = models.AutoField(primary_key=True)
    cell_location_x = models.IntegerField(default=0)
    cell_location_y = models.IntegerField(default=0)


class Character(models.Model):
    owner = models.ForeignKey(
        User, related_name="game", on_delete=models.CASCADE, null=True)
    character_location_x = models.IntegerField(default=0)
    character_location_y = models.IntegerField(default=0)
    # username = models.CharField(max_length=30, unique=True)
    # password = models.CharField(max_length=30)

    # helper method to find the cell
    # find_cell(self, x, y, grid):
    #         for cell in grid[y]:
    #             if cell[x] == = x
    #             return cell['type']

    # def player_movement(self, charLocation_x, charLocation_y, direction, cells):
    #     character_position = {'x': charLocation_x, 'y': charLocation_y}

    #     if direction == = 'n':
    #             check_tile = character_position['y'] - 1
    #             if check_tile =


# class Map(models.Model):
#     cells = []
