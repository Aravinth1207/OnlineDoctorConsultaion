from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from . import views
from .views import RegisterView


urlpatterns = [
    path('patients/', RegisterView.as_view(),name='patients'),
    path('patient-details/',views.patientList,name='patient-details'),
    path('patient-details/<int:pk>/',views.patientDetail,name='patient-detail'),
    path('add-patient/',views.addPatient,name='add-patient'),
    path('update-patient/<int:pk>/',views.updatePatient,name='update-patient'),
    path('delete-patient/<int:pk>/',views.deletePatient,name='delete-patient'),

]
