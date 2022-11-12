from django.urls import path #Para poder usar path()
from .import views # Estoy importando las views de la misma aplicación
urlpatterns = [
    path('mapa/',views.mapa),
    path('menu/',views.menu), 
]
