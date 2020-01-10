from django.db import models
from django.contrib.auth.models import User
from .mapgenerator import CreateDungeon


class Cell(models.Model):
    cell_type = models.CharField(max_length=20)
    opacity = models.FloatField(default=0)
    cell_id = models.AutoField(primary_key=True)
    cell_location_x = models.IntegerField(default=0)
    cell_location_y = models.IntegerField(default=0)


class Character(models.Model):
    owner = models.ForeignKey(
        User, related_name="game", on_delete=models.CASCADE, null=True)
    character_location_x = models.IntegerField(default=13)
    character_location_y = models.IntegerField(default=3)
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


class GameMap(models.Model):
    generated_map = models.CharField(max_length = 500)
    def __ini__(self, grid = []):
        self.grid = None
        self.cells_list = []

    def createMap(self, GRID_HT, GRID_WH):
        ii = 0
        jj = 0

        while ii < GRID_HT:
            self.grid.append([])
            for jj in range(GRID_WH):
                self.grid[ii].append(
                    {'type': 0, 'opacity': random.uniform(0.3, 0.8)}
                )
            ii += 1
        [mini, maxi] = [7, 12]
        firstRoom = {
        'x': 10,
        'y': 9,
        'height': 4,
        'width': 4,
        }
        dungeon = CreateDungeon()
        dungeoun.placeCells(self.grid, firstRoom)
        the_grid = dungeoun.growMap(grid,[firstRoom])

        tx = 0
        ty = 0
        for row in the_grid:
            for tile in row:

                tile['x'] = tx
                tile['y'] = ty

                tx += 1
                self.cells_list(tile)
            tx = 0
            ty += 1
        generated_map = self.cells_list.save()

        return cc




