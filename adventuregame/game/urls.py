from rest_framework import routers
from .api import CellViewSet, CharacterViewSet

router = routers.DefaultRouter()

router.register('api/cells', CellViewSet, 'cells')
router.register('api/characters', CharacterViewSet, 'characters')
# router.register('api/map', MapViewSet, 'map')

urlpatterns = router.urls
