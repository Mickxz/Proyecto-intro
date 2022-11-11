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


#tener como fondo el mapa, canva html, movement xy, plano cartesiano, js.