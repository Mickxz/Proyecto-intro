from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def Hola(request):
    return HttpResponse ("<h1>hello world</h1>")

def about(request):
    return HttpResponse("<h1>About</h1>")
    
def index(request):  #Funcion que permite renderizar el archivo html que está ubicado en templates
    return render(request,"index.html")
# Create your views here.
