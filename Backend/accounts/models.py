from django.db import models

# Create your models here.


class MyUser(models.Model):
    user_id = models.AutoField(primary_key=True)
    UserName = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=120)
    image = models.ImageField(upload_to="imagePath")
    phone_number = models.BigIntegerField(unique=True)
    is_activate = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    # role_id = models.IntegerField()

    ROLE_CHOICES = (
        ("student", "Student"),
        ("instructor", "Instructor"),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default="student")

    def __str__(self):
        return self.UserName


class Instructors(MyUser):
    instructor_id = models.AutoField(primary_key=True)
    cv = models.FileField(upload_to="instructor/cv/")
    speciality = models.CharField(max_length=50)
    heighest_degree = models.CharField(max_length=100)
    number_of_published_courses = models.IntegerField(default=0)
    student_rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    experience_years = models.IntegerField(default=0)

    def __str__(self):
        return super().__str__()


class Student(MyUser):
    enrollment_number = models.CharField(max_length=20, unique=True)
    grade_level = models.CharField(max_length=50, blank=True, null=True)
    total_credits = models.IntegerField(default=0)
    gpa = models.DecimalField(max_digits=4, decimal_places=2, default=0.0)
    badges = models.TextField(blank=True, null=True)
    reviews = models.TextField(blank=True, null=True)

    def __str__(self):
        return super().__str__()


class Permission(models.Model):
    permission_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Role(models.Model):
    role_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    permissions = models.ManyToManyField(Permission, blank=True, related_name="roles")

    def __str__(self):
        return self.name


class UserRole(models.Model):
    user_role_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        MyUser, on_delete=models.CASCADE, related_name="user_roles"
    )
    role = models.ForeignKey(Role, on_delete=models.CASCADE, related_name="user_roles")

    class Meta:
        unique_together = ("user", "role")

    def __str__(self):
        return f"{self.user.UserName} - {self.role.name}"
