from .models import *
from rest_framework import serializers
from Doctor.serializer import DoctorSerializer
from users.serializers import PatientSerializer
from Doctor.serializer import ClinicSerializer


    
class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    appointmentdoctor = DoctorSerializer(read_only=True,many=False)
    appointmentpatient = PatientSerializer(read_only=True,many=False)
    appointmentclinic = ClinicSerializer(read_only=True,many=False)
    slot = SlotSerializer(read_only=True,many=False)
    class Meta:
        model = Appointment
        fields = '__all__'
        depth = 1

