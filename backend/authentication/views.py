from .serializers import UserSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
# Create your views here.

class CreateUserAPIView(APIView):
    # Allow any user (authenticated or not) to access this url 
    permission_classes = (AllowAny,)
    def post(self, request):
        user = request.data
        print(user)
        serializer = UserSerializer(data=user)
        serializer.is_valid(raise_exception=True)
        password = serializer.validated_data.get('password')
        serializer.validated_data['password']=make_password(password)
        serializer.save()
        return JsonResponse({"message":"success"}, status=200)
                
