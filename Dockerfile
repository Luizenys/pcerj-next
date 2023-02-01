FROM node:18.9.0

# Criando diretório do app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Instalando as dependencias
COPY package*.json ./
RUN npm install

COPY .babelrc ./
COPY next.config.js ./

# Copiando src
COPY . ./

# Buildando o app
RUN npm run build
EXPOSE 3000

# Iniciando o app
CMD [ "npm", "start" ]