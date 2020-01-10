from rest_framework import routers
from .api import CellViewSet, CharacterViewSet
from django.conf.urls import url
# from game.views import moveCharacterView

router = routers.DefaultRouter()

router.register('api/cells', CellViewSet, 'cells')
router.register('api/characters', CharacterViewSet, 'characters')
# router.register('api/move', moveCharacterView, 'move')
# router.register('api/map', MapViewSet, 'map')

urlpatterns = router.urls

