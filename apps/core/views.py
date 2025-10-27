from django.shortcuts import render


# Create your views here.
def trial(request):
    return render(request, 'core/trial.html')


def home_view(request):
    return render(request, 'core/index.html')


def about_view(request):
    return render(request, 'core/about.html')