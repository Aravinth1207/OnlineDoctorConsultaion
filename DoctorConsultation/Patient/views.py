from django.shortcuts import render
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . serializer import *
from . models import *
# Create your views here.

@api_view(['GET'])
def patientList(request):
    patients = Patient.objects.all()
    serializer =PatientSerializer(patients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def patientDetail(request,pk):
    patient = Patient.objects.get(id=pk)
    serializer = PatientSerializer(patient)
    return Response(serializer.data)

@api_view(['POST'])
def addPatient(request):
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def updatePatient(request,pk):
    patient = Patient.objects.get(id=pk)
    serializer = PatientSerializer(instance=patient,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deletePatient(request,pk):
    patient = Patient.objects.get(id=pk)
    patient.delete()
    return Response("Patient Deleted Successfully!")