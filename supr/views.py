from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def journey(request):
    return render(request, 'journey.html')

def reason(request):
    return render(request, 'reason.html')

def suprise(request):
    return render(request, 'surprise.html')

def musicmix(request):
    return render(request,'mixmu.html')
