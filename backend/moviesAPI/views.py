from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import Movie
from .serializers import MovieSerializer
from rest_framework import viewsets

# Create your views here.
class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer