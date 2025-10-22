from django.contrib import admin

# Register your models here.

from .models import MyUser, Instructors, Student, Role, Permission, UserRole

admin.site.register(MyUser)
admin.site.register(Instructors)
admin.site.register(Student)
admin.site.register(Role)
admin.site.register(Permission)
admin.site.register(UserRole)
