from django.urls import path
from . import views

urlpatterns = [
    path('patient-details/',views.patientList,name='patient-details'),
    path('patient-details/<int:pk>/',views.patientDetail,name='patient-detail'),
    path('add-patient/',views.addPatient,name='add-patient'),
    path('update-patient/<int:pk>/',views.updatePatient,name='update-patient'),
    path('delete-patient/<int:pk>/',views.deletePatient,name='delete-patient'),

]
