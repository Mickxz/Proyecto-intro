from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.

def index(request):
    template = "main/index.html"
    return render (request, template)

def menu(request): #Página menú
    return render(request,"menu.html")
def f(request,x,y):
    
    #response.render()
    return JsonResponse({'x': x, 'y':y})