from django.urls import path
from . import views

urlpatterns = [
    path('appointment-details/',views.appointmentList,name='appointment-details'),
    path('appointment-details/<int:pk>/',views.appointmentDetail,name='appointment-detail'),
    path('add-appointment/',views.addAppointment,name='add-appointment'),
    path('update-appointment/<int:pk>/',views.updateAppointment,name='update-appointment'),
    path('delete-appointment/<int:pk>/',views.deleteAppointment,name='delete-appointment'),
    
]



