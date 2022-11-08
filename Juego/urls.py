from django.urls import path #Para poder usar path()
from .import views # Estoy importando las views de la misma aplicación
urlpatterns = [
    path('hello/',views.Hola),
    path('about/',views.about),
    path('',views.index)

]
