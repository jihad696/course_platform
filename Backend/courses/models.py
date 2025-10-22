from django.db import models
from accounts.models import Instructors, Student

# Create your models here.


class Course(models.Model):

    course_id = models.AutoField(primary_key=True)
    address = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="courses/images/", null=True, blank=True)
    language = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    credit_hours = models.IntegerField()
    content = models.TextField()
    instructor = models.ForeignKey(
        Instructors, on_delete=models.CASCADE, related_name="courses", null=True
    )
    reviews = models.TextField(blank=True)
    enroll_numbers = models.IntegerField(default=0)
    in_progress_limited = models.IntegerField(default=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.address


class StudentEnrollment(models.Model):

    course = models.ForeignKey(
        Course, on_delete=models.CASCADE, related_name="enrollments"
    )
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="enrollments"
    )
    enrollment_date = models.DateTimeField(auto_now_add=True)
    completed_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=20,
        choices=[("in_progress", "In Progress"), ("completed", "Completed")],
        default="in_progress",
    )

    class Meta:
        unique_together = ("course", "student")

    def __str__(self):
        return f"{self.student} enrolled in {self.course}"
