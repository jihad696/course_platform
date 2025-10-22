from django.db import models
from django.core.validators import MinValueValidator
from module.models import Module
from accounts.models import Student
from django.utils import timezone


class Lesson(models.Model):
    lesson_id = models.AutoField(primary_key=True)
    lesson_video_url = models.CharField(max_length=255)
    module_id = models.ForeignKey(
        Module, on_delete=models.CASCADE, related_name="lessons"
    )
    name = models.CharField(max_length=255)
    number = models.IntegerField(validators=[MinValueValidator(1)])
    details = models.TextField(blank=True, null=True)
    course_order = models.IntegerField(default=1, validators=[MinValueValidator(1)])

    def __str__(self):
        return self.name


class LessonStudent(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="lesson_progress"
    )
    lesson = models.ForeignKey(
        Lesson, on_delete=models.CASCADE, related_name="student_progress"
    )
    is_completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)

    def mark_completed(self):
        """Mark lesson as completed and save completion time."""
        self.is_completed = True
        self.completed_at = timezone.now()
        self.save()

    def __str__(self):
        return f"{self.student} - {self.lesson} ({'Completed' if self.is_completed else 'In Progress'})"
