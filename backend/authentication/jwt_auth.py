from datetime import timedelta
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings

class CustomJWTAuthentication(JWTAuthentication):
    def get_jwt_value(self, request):
        return request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
