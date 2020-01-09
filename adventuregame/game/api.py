from game.models import Cell, Character
from rest_framework import viewsets, permissions
from .serializers import CellSerializer, CharacterSerializer


class CellViewSet(viewsets.ModelViewSet):
    queryset = Cell.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CellSerializer


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CharacterSerializer


# class MapViewSet(viewsets.ModelViewSet):
#     queryset = Map.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = MapSerializer
