from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import *


# Create your views here.

@api_view(['GET'])
def appointmentList(request):
    appointments = Appointment.objects.all()
    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def appointmentDetail(request, pk):
    appointment = Appointment.objects.get(id=pk)
    serializer = AppointmentSerializer(appointment)
    return Response(serializer.data)



@api_view(['POST'])
def addAppointment(request):
    seriazlier = AppointmentSerializer(data=request.data)
    if seriazlier.is_valid():
        seriazlier.save()
    return Response(seriazlier.data)

@api_view(['POST'])
def updateAppointment(request,pk):
    appointment = Appointment.objects.get(id=pk)
    serializer = AppointmentSerializer(instance=appointment,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)







@api_view(['DELETE'])
def deleteAppointment(request, pk):
    appointment = Appointment.objects.get(id=pk)
    appointment.delete()
    return Response("Appointment deleted successfully!")