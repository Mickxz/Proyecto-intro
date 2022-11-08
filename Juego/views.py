from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404

def Hola(request):
    return HttpResponse ("<h1>hello world</h1>")
def about(request):
    return HttpResponse("<h1>About</h1>")
# Create your views here.
