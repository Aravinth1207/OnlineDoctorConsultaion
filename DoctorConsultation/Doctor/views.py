from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializer import *



# Create your views here.


@api_view(['GET'])
def doctorList(request):
    doctors = Doctor.objects.all()
    serializer = DoctorSerializer(doctors,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def doctorDetail(request,pk):   
    doctor = Doctor.objects.get(pk=pk)
    serializer = DoctorSerializer(doctor)
    return Response(serializer.data)

@api_view(['POST'])
def addDoctor(request):
    serializer = DoctorSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def updateDoctor(request,pk):
    doctor = Doctor.objects.get(id=pk)
    serializer = DoctorSerializer(instance=doctor,data=request.data)
    if serializer.is_valid(): 
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteDoctor(request,pk):
    doctor = Doctor.objects.get(id=pk)
    doctor.delete()
    return Response('Doctor Deleted')

@api_view(['GET'])
def clinicList(request):
    clinics = Clinic.objects.all()
    serializer = ClinicSerializer(clinics,many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def clinicDetail(request,pk):
    clinic = Clinic.objects.get(id=pk)
    serializer = ClinicSerializer(clinic)
    return Response(serializer.data)
    
@api_view(['POST'])
def addClinic(request):
    serializer = ClinicSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def updateClinic(request,pk):
    clinic = Clinic.objects.get(id=pk)
    serializer = ClinicSerializer(instance=clinic,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteClinic(request,pk):
    clinic = Clinic.objects.get(id=pk)
    clinic.delete()
    return Response('Clinic Deleted')