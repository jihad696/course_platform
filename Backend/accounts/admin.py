from django.contrib import admin

# Register your models here.

from .models import MyUser,Instructors,Student

admin.site.register(MyUser)
admin.site.register(Instructors)
admin.site.register(Student)

