FROM node:20-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app/backend

# Copie o package.json e o yarn.lock para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código-fonte para o contêiner
COPY . .

# Exponha a porta onde o aplicativo estará em execução
EXPOSE 4000


ENV DATABASE_URL="postgresql://postgres:postgres1q2w3e@postgres:5432/delliv?schema=public"

RUN chmod 755 /app/backend
RUN npm install -g prisma

RUN npx prisma generate
RUN npx prisma migrate dev

# Comando para iniciar o aplicativo
CMD [ "npm", "start"]