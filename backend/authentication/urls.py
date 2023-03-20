from django.urls import path,include

from rest_framework_simplejwt.views import TokenBlacklistView
from rest_framework_simplejwt.views import TokenVerifyView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt import views as jwt_views
from .views import CreateUserAPIView

urlpatterns = [
    path("create_user/", CreateUserAPIView.as_view()),
    path("logout/", TokenBlacklistView.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(
        "api/token/refresh/", jwt_views.TokenRefreshView.as_view(), name="token_refresh"
    ),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]