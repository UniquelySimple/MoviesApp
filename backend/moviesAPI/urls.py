from django.contrib import admin
from django.urls import path,include

from moviesAPI.views import MovieViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'movies', MovieViewSet)

urlpatterns = [
	path('', include(router.urls))
]
