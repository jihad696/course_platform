from django.db import models
from courses.models import Course
from accounts.models import Student

# create your models here


class Quiz(models.Model):
    quiz = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    is_pass_reached = models.BooleanField(default=False)
    min_pass_score = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name


class QuizQuestion(models.Model):
    question = models.AutoField(primary_key=True)
    question_title = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)

    def __str__(self):
        return self.question_title[:50]


class QuizAnswer(models.Model):
    quiz_ans = models.AutoField(primary_key=True)
    quiz_question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)
    answer_text = models.TextField()

    def __str__(self):
        return self.answer_text[:50]


class StudentQuizAttempt(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    attempt_datetime = models.DateTimeField(auto_now_add=True)
    score_achieved = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"{self.student} - {self.quiz} ({self.score_achieved})"
