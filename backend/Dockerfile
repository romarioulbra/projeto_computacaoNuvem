# Usa a imagem oficial do Python
FROM python:3.10

# Define o diretório de trabalho no container
WORKDIR /projeto

# Instala dependências do sistema (incluindo netcat e cliente PostgreSQL)
RUN apt-get update && apt-get install -y netcat-openbsd postgresql-client && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y postgresql-client
# Copiar arquivos de dependências primeiro (para aproveitar cache do Docker)
COPY requirements.txt .

# Instala dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia todos os arquivos do backend para dentro do container
COPY . .

# Copia os scripts necessários
COPY scripts/ /projeto/scripts/

# Dá permissão de execução aos scripts necessários
RUN chmod +x /projeto/scripts/entrypoint.sh /projeto/scripts/wait-for-it.sh

# Expõe a porta 8000
EXPOSE 8000

# Define o ponto de entrada
ENTRYPOINT ["/projeto/scripts/entrypoint.sh"]

