from django.urls import path #Para poder usar path()
from .import views # Estoy importando las views de la misma aplicación
urlpatterns = [
<<<<<<< HEAD
    path('mapa/',views.mapa),
    path('menu/',views.menu), 
=======
    path('index/',views.index), #index 
    path('about/',views.about), #about
>>>>>>> parent of 9fa2185 (a punto de implementar movimiento)
]
