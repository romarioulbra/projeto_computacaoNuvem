#!/bin/bash

TIMEOUT=30
HOST="$1"
PORT="$2"

echo "Aguardando $HOST:$PORT por até $TIMEOUT segundos..."

while ! timeout 1 bash -c "echo > /dev/tcp/$HOST/$PORT"; do
  sleep 1
  TIMEOUT=$((TIMEOUT - 1))
  if [ $TIMEOUT -le 0 ]; then
    echo "Tempo limite excedido!"
    exit 1
  fi
done

echo "$HOST:$PORT está disponível!"
