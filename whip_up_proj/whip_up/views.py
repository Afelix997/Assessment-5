from textwrap import dedent
from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from .models import AppUser as User,SaveList
import requests
import json



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
        data = serializers.serialize("json", [request.user], fields=['email', 'username'])
        print('hello:',request.user)
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})


@api_view(['POST'])
def createLiked(request):
    if request.user.is_authenticated:
        user = User.objects.get(id=request.user.id)
        typeOf = request.data['type']
        item = request.data['item']
        newItem = SaveList(type = typeOf, searchItem= item,user = user )
        newItem.save()
        print(typeOf,'|||',item)
        data = 'createLiked response'
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})

@api_view(['POST'])
def removeLiked(request):
    if request.user.is_authenticated:
        user = User.objects.get(id=request.user.id)
        item = request.data['item']
        byeItem = SaveList.objects.get(searchItem=item,user_id=user)
        SaveList.objects.get(searchItem=item,user_id=user).delete()
        print(byeItem,'|||',item)
        data = 'removed like response'
        return HttpResponse(byeItem)
    else:
        return JsonResponse({'user':None})

@api_view(['GET'])
def getLiked(request):
    if request.user.is_authenticated:
        user = User.objects.get(id=request.user.id)
        userObjects = SaveList.objects.filter(user_id=user)
        dessertObj= userObjects.exclude(type='main course').exclude(type='drink')
        mealObj= userObjects.filter(type='main course')
        drinkObj= userObjects.filter(type='drink')
        print(len(drinkObj))
        likedMealList=[]
        likedDessertList=[]
        likedDrinkList=[]
        if len(mealObj) >0:
            for item in mealObj:
                response = requests.get(f'https://api.edamam.com/api/recipes/v2/{item.searchItem}?type=public&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98')
                JSON_API_response = json.loads(response.content)
                likedMealList.append(JSON_API_response)
        if len(dessertObj) >0:
            for item in dessertObj:
                response = requests.get(f'https://api.edamam.com/api/recipes/v2/{item.searchItem}?type=public&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98')
                JSON_API_response = json.loads(response.content)
                likedDessertList.append(JSON_API_response)
        if len(drinkObj) >0:
            for item in drinkObj:
                response = requests.get(f'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={item.searchItem}')
                JSON_API_response = json.loads(response.content)
                likedDrinkList.append(JSON_API_response['drinks'][0])
            
        return JsonResponse({'meals':likedMealList,'desserts':likedDessertList,'drinks':likedDrinkList})
    else:
        return JsonResponse({'user':None})
        
@api_view(['POST'])
def checkLiked(request):
    if request.user.is_authenticated:
        user = User.objects.get(id=request.user.id)
        userObjects = SaveList.objects.filter(user_id=user)
        if userObjects.filter(searchItem=request.data['item']).exists():
            return HttpResponse(True)
        else:
            return HttpResponse(False)
    else:
        return JsonResponse({'user':None})