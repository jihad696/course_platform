from django.db import models
from courses.models import Course


# Create your models here.
class Module(models.Model):
    module_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="module",null=True)
