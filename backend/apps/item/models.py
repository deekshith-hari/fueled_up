from django.db import models
from config.constants import *
from cloudinary.models import CloudinaryField

# Create your models here.



class Item(models.Model):
    class Meta(object):
        db_table = 'item'

    status = models.CharField(
        'status', blank=False, default='inactive', max_length=15, db_index=True, choices=STATUS
    )
    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True
    )
    description = models.CharField(
        'Description', blank=True, null=True, max_length=200, db_index=True
    )
    price = models.DecimalField(
        'Price', blank=False, null=False, max_digits=11, decimal_places=2
    )
    image = CloudinaryField(
        'Image', blank=False, null=False
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )

    
