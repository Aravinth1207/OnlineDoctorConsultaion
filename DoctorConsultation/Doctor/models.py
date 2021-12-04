from django.db import models


# Create your models here.



class Clinic(models.Model):
    ClinicName = models.CharField(max_length=100, null=False, blank=False)
    ClinicAddress = models.CharField(max_length=100, null=False, blank=False)
    ClinicCity = models.CharField(max_length=100, null=False, blank=False)
    ClinicPhone = models.CharField(max_length=100, null=False, blank=False)
    ClinicEmail = models.EmailField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.ClinicName


class Doctor(models.Model):
    DoctorImage = models.ImageField(upload_to='images/', null=True, blank=True)
    DoctorName = models.CharField(max_length=100, null=False, blank=False)
    DoctorEmail = models.EmailField(max_length=100, null=False, blank=False)
    DoctorPhone = models.CharField(max_length=100, null=False, blank=False)
    DoctorCity = models.CharField(max_length=100, null=False, blank=False)
    DoctorSpecialization = models.CharField(max_length=100, null=False, blank=False)
    DoctorAge = models.IntegerField(null=False, blank=False)
    DoctorGender = models.CharField(max_length=100, null=False, blank=False)
    DoctorAvailability1 = models.CharField(max_length=100, null=False, blank=False)
    DoctorAvailability2 = models.CharField(max_length=100, null=False, blank=False)
    DoctorClinic = models.ForeignKey(Clinic,related_name="clinic", on_delete=models.CASCADE)
    
    

    def __str__(self):
        return self.DoctorName
