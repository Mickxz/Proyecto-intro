from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def mapa(request): #Para el mapa
    return render(request,"mapa.html")
# Create your views here.

def index(request):
    template = "main/index.html"
    return render (request, template)
#tener como fondo el mapa, canva html, movement xy, plano cartesiano, js.