from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
#def navbar(request):
    #return render(request,'navbar.html')
def index(request):
    return render(request,'index.html')