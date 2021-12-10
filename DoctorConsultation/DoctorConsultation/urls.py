from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Doctor.urls')),
    path('', include('Appointment.urls')),
    path('', include('patient.urls')),
]
