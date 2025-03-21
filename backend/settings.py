import os
from datetime import timedelta
from pathlib import Path
import environ

BASE_DIR = Path(__file__).resolve().parent.parent


# Inicializa o ambiente
env = environ.Env()
environ.Env.read_env()  # Carrega as variáveis de ambiente do arquivo .env


ALLOWED_HOSTS = ["*"]  # Defina os hosts adequados para produção

# Aplicações instaladas
INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    'authentication',  # Nossa app de autenticação
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

WSGI_APPLICATION = 'backend.wsgi.application'

# Banco de Dados PostgreSQL
# Configuração do banco de dados
DATABASES = {
    'default': {
       'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('POSTGRES_DB', default='db_cn'),  
        'USER': env('POSTGRES_USER', default='computacao_nuvem'),
        'PASSWORD': env('POSTGRES_PASSWORD', default='DB_cn7'),
        'HOST': 'db',  # Nome do serviço do PostgreSQL no docker-compose
        'PORT': '5432',
    }
}

# Cache com Redis
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://redis:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}

# Configuração JWT
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

# Configuração do JWT - Tokens
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
}

# CORS
CORS_ALLOW_ALL_ORIGINS = True
