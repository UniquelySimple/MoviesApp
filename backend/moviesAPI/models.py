from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=32)
    poster = models.CharField(default="none",max_length=256)
    desc = models.CharField(max_length=656)
    year = models.IntegerField()
    rating = models.IntegerField()


# https://www.themoviedb.org/movie