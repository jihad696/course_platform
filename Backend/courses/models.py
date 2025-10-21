from django.db import models

# Create your models here.



class Course(models.Model):
    
    Course_id = models.AutoField(primary_key=True)
    address = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='trainee/images/')

    language = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    credit_hours = models.IntegerField()
    content = models.TextField()
    # instructor_id = models.ForeignKey('Instructor', on_delete=models.CASCADE)
    reviews = models.TextField()
    enroll_numbers = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updateddate = models.DateTimeField(auto_now=True)
    isactive = models.BooleanField(default=True)
