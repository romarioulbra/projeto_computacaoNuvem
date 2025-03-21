#!/bin/sh
set -e

echo "Aguardando o banco de dados..."
until pg_isready -h db -p 5432 -U "$POSTGRES_USER"; do
    echo "Aguardando o banco de dados..."
    sleep 3
done

echo "Banco de dados pronto, aplicando migrações..."
python manage.py migrate
python manage.py collectstatic --noinput

echo "Iniciando o Servidor..."
exec gunicorn backend.wsgi:application --bind 0.0.0.0:8000
