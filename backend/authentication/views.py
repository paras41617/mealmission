from .serializers import UserSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.decorators import api_view
    
@api_view(['GET', 'POST'])
def CreateUserAPIView(request):
    if request.method == 'POST':
        user = request.data
        serializer = UserSerializer(data=user)
        serializer.is_valid(raise_exception=True)
        password = serializer.validated_data.get('password')
        serializer.validated_data['password']=make_password(password)
        serializer.save()
        return JsonResponse({"message":"success"}, status=200)      
    elif request.method == 'POST':
        return JsonResponse({"message":"failure"}, status=404) 
