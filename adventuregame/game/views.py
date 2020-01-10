from django.shortcuts import render
from rest_framework import viewsets
from .models import Cell
from .serializers import moveCharacterSerializer

# Create your views here.

class moveCharacterView(viewsets.ModelViewSet):

    queryset = Cell.objects.all()
    serializer_class = moveCharacterSerializer


    def move_character(self):
        pass

