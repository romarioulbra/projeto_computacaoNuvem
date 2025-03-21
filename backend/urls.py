from django.contrib import admin
from django.urls import path, include
from .views import health_check
from django.http import JsonResponse

def health_check(request):
    return JsonResponse({"status": "ok"})

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/", include("authentication.urls")),
     path("health/", health_check),
]
