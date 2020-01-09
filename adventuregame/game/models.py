from django.db import models


class Cell(models.Model):
    cell_type = models.CharField(max_length=20)
    opacity = models.FloatField(default=0)
    cell_id = models.AutoField(primary_key=True)
    cell_location_x = models.IntegerField(default=0)
    cell_location_y = models.IntegerField(default=0)


class Character(models.Model):
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    character_location_x = models.IntegerField(default=0)
    character_location_y = models.IntegerField(default=0)
