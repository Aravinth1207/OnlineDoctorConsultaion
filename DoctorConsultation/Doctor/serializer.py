from . models import *
from rest_framework import serializers



class ClinicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields ='__all__'

class DoctorSerializer(serializers.ModelSerializer):
    clinic = ClinicSerializer(many=True, read_only=True)
    class Meta:
        model = Doctor
        fields = '__all__'
        depth = 1
