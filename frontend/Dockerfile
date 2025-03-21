# Usa a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários para instalar as dependências
COPY package.json package-lock.json ./
# COPY .env ./

# Instala as dependências
RUN npm install 

# Copia o restante do código para dentro do container
COPY . .

# Compila o Next.js
RUN rm -rf .next && npm run build

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação em produção
CMD ["npm", "run", "start"]
