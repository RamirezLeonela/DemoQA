# Imagen base con Node + Cypress
FROM cypress/included:12.17.4

WORKDIR /app

# Copia todos los archivos al contenedor
COPY . .

# Instala dependencias
RUN npm install

# Comando para correr los tests
CMD ["npx", "cypress", "run"]
