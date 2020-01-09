from rest_framework import serializers
from game.models import Cell, Character


# Cell Serializer
class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cell
        fields = '__all__'

# Character Serializer


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'
