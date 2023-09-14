from django.core.validators import MaxValueValidator
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username


class Comment(models.Model):
    username = models.CharField(max_length=255)
    logo = models.CharField(max_length=255, null=True, blank=True)
    post_stars = models.IntegerField(default=0, validators=[MaxValueValidator(5)])
    platform_name = models.CharField(max_length=255, null=True, blank=True)
    platform_handle = models.CharField(max_length=255, null=True, blank=True)
    post_image = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.username} comment from {self.platform_name}"


class SavedNote(models.Model):
    username = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.username} saved a Note"
