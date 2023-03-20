from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Donation(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE , related_name='donations')
    title = models.CharField(max_length=100)
    text = models.TextField()
    type = models.CharField(max_length=50)
    veg = models.BooleanField()
    location = models.CharField(max_length=200)
    contributor = models.CharField(max_length=100)
    booked = models.BooleanField()

    def __str__(self):
        return self.title

class Order(models.Model):
    donation = models.ForeignKey(Donation , on_delete=models.CASCADE , related_name='orders')
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username
