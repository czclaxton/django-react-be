from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url


urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('accounts.urls')),
    path('', include('game.urls')),
    url(r'^admin/', admin.site.urls)
]
