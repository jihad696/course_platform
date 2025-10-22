from django.contrib import admin

# Register your models here.

from .models import Quiz, QuizAnswer, QuizQuestion, StudentQuizAttempt

admin.site.register(Quiz)
admin.site.register(QuizAnswer)
admin.site.register(QuizQuestion)
admin.site.register(StudentQuizAttempt)
