from django.db import models
from accounts.models import MyUser

# Create your models here.


class Notification(models.Model):
    notification_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        MyUser, on_delete=models.CASCADE, related_name="notifications"
    )
    message = models.TextField()
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notification for {self.user.UserName}: {self.message}"
