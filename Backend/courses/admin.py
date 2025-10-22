from django.contrib import admin

# Register your models here.
from .models import Course, StudentEnrollment

admin.site.register(StudentEnrollment)
admin.site.register(Course)
