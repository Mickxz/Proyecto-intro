from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def index(request):
    return render(request,"index.html")
def about(request):
    return render(request,"about.html")
def base(request):
    return render(request,"base.html")
def menu(request):
    return render(request,"menu.html")
def estilos(request):
    return render(request,"estilos.css")

# Create your views here.