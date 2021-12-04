from django.db import models


# Create your models here.

class Patient(models.Model):
    PatientName = models.CharField(max_length=100, null=False, blank=False)
    PatientEmail = models.EmailField(max_length=100, null=False, blank=False)
    PatientPhone = models.CharField(max_length=100, null=False, blank=False)
    PatientAge = models.IntegerField(null=False, blank=False)
    PatientGender = models.CharField(max_length=100, null=False, blank=False)
    

    def __str__(self):
        return self.PatientName

    