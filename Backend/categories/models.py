from django.db import models
from courses.models import Course


class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to="categories/images/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class CategoryCourse(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    class Meta:
        unique_together = (
            "category",
            "course",
        )  # علشان مايتكررش نفس الكورس في نفس الكاتيجوري مرتين

    def __str__(self):
        return f"{self.category.name} - {self.course.title}"
