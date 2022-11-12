from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def index(request):
    return render(request,"index.html")
def about(request):
    return render(request,"about.html")
def base(request):
    return render(request,"base.html")
def mapa(request): #Para el mapa
    return render(request,"mapa.html")
# Create your views here.

<<<<<<< HEAD
def index(request):
    template = "main/index.html"
    return render (request, template)
#tener como fondo el mapa, canva html, movement xy, plano cartesiano, js.
def menu(request):
    return render(request,"menu.html")
def estilos(request):
    return render(request,"estilos.css")
=======

#tener como fondo el mapa, canva html, movement xy, plano cartesiano, js.
>>>>>>> parent of 9fa2185 (a punto de implementar movimiento)
