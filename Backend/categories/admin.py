from django.contrib import admin

# Register your models here.
from .models import Category, CategoryCourse, Course


admin.site.register(Category)
admin.site.register(CategoryCourse)
