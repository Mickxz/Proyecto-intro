from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def index(request):
    return render(request,"index.html")
def about(request):
    return render(request,"about.html")
def base(request):
    return render(request,"base.html")

# Create your views here.