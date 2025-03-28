import os
from pathlib import Path
import environ
from datetime import timedelta

# Diretório base do projeto
BASE_DIR = Path(__file__).resolve().parent.parent

# Inicializa o ambiente
env = environ.Env()
environ.Env.read_env()  # Carrega as variáveis de ambiente do arquivo .env

# Hosts permitidos
ALLOWED_HOSTS = ["localhost", "127.0.0.1", "frontend", "backend"]

# Aplicações instaladas
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "rest_framework_simplejwt",
    "authentication",
    "corsheaders",
]

# Middlewares
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# Configuração das URLs
ROOT_URLCONF = "backend.urls"
WSGI_APPLICATION = "backend.wsgi.application"

# Configuração do banco de dados PostgreSQL
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": env("POSTGRES_DB", default="db_cn"),
        "USER": env("POSTGRES_USER", default="computacao_nuvem"),
        "PASSWORD": env("POSTGRES_PASSWORD", default="DB_cn7"),
        "HOST": "db",  # Nome do serviço no Docker
        "PORT": "5432",
    }
}

# Configuração de Cache com Redis
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://redis:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

# Configuração do Django REST Framework
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
}

# Configuração JWT
SIMPLE_JWT = {
    "AUTH_COOKIE": "access_token",
    "AUTH_COOKIE_REFRESH": "refresh_token",
    "AUTH_COOKIE_SECURE": False,  # Defina como True em produção (HTTPS)
    "ACCESS_TOKEN_LIFETIME": timedelta(hours=1),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
    "AUTH_HEADER_TYPES": ("Bearer",),
    "AUTH_COOKIE_HTTP_ONLY": True,  # Evita acesso a tokens via JavaScript
    "AUTH_COOKIE_SAMESITE": "Lax",  # Melhor para compatibilidade
}

# Configuração CORS
CORS_ALLOW_ALL_ORIGINS = False  # Melhor prática para segurança
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://frontend:3000",
]
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
CORS_ALLOW_HEADERS = [
    "accept",
    "accept-encoding",
    "authorization",
    "content-type",
    "dnt",
    "origin",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
]

# Configuração CSRF
CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",
    "http://frontend:3000",
]
SESSION_COOKIE_SAMESITE = "None"
SESSION_COOKIE_SECURE = False  # Altere para True em produção com HTTPS
CSRF_COOKIE_SAMESITE = "None"
CSRF_COOKIE_SECURE = False  # Altere para True em produção com HTTPS

# Modelo de usuário personalizado
AUTH_USER_MODEL = "authentication.CustomUser"