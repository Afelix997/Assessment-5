from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from .models import AppUser as User



# Create your views here.

def send_the_homepage(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)


@api_view(['POST'])
def sign_up(request):
    dupe= 'duplicate'
    print('signup is loading')
    try:
        User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
        return JsonResponse({'success':True})
    except Exception as e:
        print('you got an error signing up!', str(e))
        return JsonResponse({'success': False, 'reason': 'sign up failed'})

@api_view(['POST'])
def log_in(request):
    print(request.data)
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username=email, password=password)
    print('user?')
    print(email)
    print(password)

    if user is not None:
        if user.is_active:
            try:
                login(request._request, user)
                print(f"{email} is logged in")
                return JsonResponse({'success': True})
            except Exception as e:
                print('you got an error logging in!', str(e))
                return JsonResponse({'success': False, 'reason': 'failed to login'})
        else:
            return JsonResponse({'success': False, 'reason': 'account disabled'})
    else:
        return JsonResponse({'success': False, 'reason': 'account doesn\'t exist'}) 

@api_view(['POST'])
def log_out(request):
    logout(request)
    return HttpResponse('Logged you out!')

@api_view(['GET'])
def who_am_i(request):
    # Make sure that you don't send sensitive information to the client, such as password hashes
    # raise Exception('oops')
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=['email', 'username','first_name','last_name'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})
