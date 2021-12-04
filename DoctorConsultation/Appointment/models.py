from django.db import models
from Doctor.models import *
from Patient.models import Patient



# Create your models here.
class Slot(models.Model):
    TimeSlot = models.CharField(max_length=100, null=False, blank=False)
    SlotSession = models.CharField(max_length=100,null=False,blank=False)

    def __str__(self):
        return self.TimeSlot

class Appointment(models.Model):
    AppointmentDate = models.DateField(null=False, blank=False)
    AppointmentDoctor = models.ForeignKey(Doctor, on_delete=models.CASCADE,default=None)
    AppointmentPatient = models.ForeignKey(Patient, on_delete=models.CASCADE,default=None)
    AppointmentClinic = models.ForeignKey(Clinic, on_delete=models.CASCADE,default=None)
    AppointmentSlot = models.ForeignKey(to_field='id', to='Slot', on_delete=models.CASCADE,default=None)
    AppointmentStatus = models.CharField(max_length=100, null=False, blank=False,default='Pending')
    AppointmentCreatedAt = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.AppointmentPatient.PatientName}'s Appointment"
