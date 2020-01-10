from game.models import Cell, Character
from rest_framework import viewsets, permissions
from .serializers import CellSerializer, CharacterSerializer
from django.http import JsonResponse
# from decouple import config
from .models import *
from rest_framework.decorators import api_view
import json


class CellViewSet(viewsets.ModelViewSet):
    queryset = Cell.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CellSerializer


class CharacterViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CharacterSerializer

    def get_queryset(self):
        return Character.objects.all()

    def perform_create(self, serializer):
        c = Character.objects.create(owner_id = self.request.data['user_id'])
        b = c.save()
        return b


# class MapViewSet(viewsets.ModelViewSet):
#     queryset = Map.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = MapSerializer
