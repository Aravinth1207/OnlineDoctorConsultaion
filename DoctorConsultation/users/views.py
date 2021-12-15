
from re import T
from django.db.models.fields import EmailField
from django.db.models.query import QuerySet
from rest_framework.response import Response
from .serializers import *
from rest_framework import generics,status,viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view

# class PatientViewSet(viewsets.ModelViewSet):
#     queryset = Patient.objects.all()
#     serializer_class = PatientSerializer

class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self,request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        return Response(user_data,status=status.HTTP_201_CREATED)
    
@api_view(['GET'])
def patientList(request):
    patients = User.objects.all()
    serializer =PatientSerializer(patients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def patientDetail(request,pk):
    patient = User.objects.get(id=pk)
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
    patient = User.objects.get(id=pk)
    serializer = PatientSerializer(instance=patient,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deletePatient(request,pk):
    patient = User.objects.get(id=pk)
    patient.delete()
    return Response("Patient Deleted Successfully!")