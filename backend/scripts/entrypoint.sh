#!/bin/sh

echo "Aguardando o banco de dados..."
until PGPASSWORD=$POSTGRES_PASSWORD pg_isready -h db -p 5432 -U $POSTGRES_USER; do
  sleep 3
done

echo "Banco de dados está pronto!"

# Aplicar migrações
python manage.py migrate

# Iniciar servidor
exec gunicorn backend.wsgi:application --bind 0.0.0.0:8000
