from django.shortcuts import render
from django.http import HttpResponse

def Hola(request):
    return HttpResponse ("<h1>hello world</h1>")
def about(request):
    return HttpResponse("<h1>About</h1>")
# Create your views here.
