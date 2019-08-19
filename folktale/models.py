from django.db import models

# Create your models here.
class Character(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    image = models.ImageField(upload_to = 'images/')

    def save_character(self):
        """
        This is the function that we will use to save the instance of this class
        """
        self.save()


    def __str__(self):
        return self.name

class Folktale(models.Model):
    title = models.CharField(max_length=120)
    body = models.TextField()
    image = models.ImageField(upload_to = "images/")

    def save_folktale(self):
       """
       This is the function that we will use to save the instance of this class
       """
       self.save()


    def __str__(self):
        return self.title