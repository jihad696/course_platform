from django.db import models
from courses.models import Course
from accounts.models import Student

# Create your models here.


class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(
        Course, on_delete=models.CASCADE, related_name="reviews_course"
    )
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="reviews_student"
    )
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.course.address} by {self.student.UserName}"
