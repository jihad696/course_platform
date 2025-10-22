from django.contrib import admin

# Register your models here.

from .models import Lesson, LessonStudent

admin.site.register(Lesson)
admin.site.register(LessonStudent)
