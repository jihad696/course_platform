from django.db import models
from accounts.models import Student
from courses.models import Course

# Create your models here.


class Transaction(models.Model):
    transaction_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name="transactions"
    )
    course = models.ForeignKey(
        Course, on_delete=models.CASCADE, related_name="cstransactions"
    )
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    status = models.CharField(
        max_length=20,
        choices=[
            ("pending", "Pending"),
            ("completed", "Completed"),
            ("failed", "Failed"),
        ],
    )
    created_at = models.DateTimeField(auto_now_add=True)
