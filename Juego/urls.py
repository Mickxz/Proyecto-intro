from django.urls import path #Para poder usar path()
from .import views # Estoy importando las views de la misma aplicación
urlpatterns = [
    path('index/',views.index), #index 
    path('about/',views.about), #about
]
