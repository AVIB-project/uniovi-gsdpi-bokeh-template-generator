# Usa una imagen base con Python
FROM python:3.8-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo de requerimientos a la imagen
COPY requirements.txt /app

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el código de la aplicación a la imagen
COPY ./ /app

# Expone el puerto que va a utilizar Bokeh
EXPOSE <%= appPort %>

# Comando para ejecutar el servidor de Bokeh
CMD ["python", "bootstrap.py"]