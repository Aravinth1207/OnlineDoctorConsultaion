from django.urls import path
from . import views

urlpatterns = [
    path('doctor-details/',views.doctorList,name='doctor-details'),
    path('doctor-details/<int:pk>/',views.doctorDetail,name='doctor-detail'),
    path('clinic-details/<int:pk>/',views.clinicDetail,name='clinic-detail'),
    path('clinic-details/',views.clinicList,name='clinic-details'),
    path('add-doctor/',views.addDoctor,name='add-doctor'),
    path('add-clinic/',views.addClinic,name='add-clinic'),
    path('update-doctor/<int:pk>/',views.updateDoctor,name='update-doctor'),
    path('update-clinic/<int:pk>/',views.updateClinic,name='update-clinic'),
    path('delete-doctor/<int:pk>/',views.deleteDoctor,name='delete-doctor'),
    path('delete-clinic/<int:pk>/',views.deleteClinic,name='delete-clinic'),
    
]
