FROM nginx

ENV TZ="Europe/Berlin" 
ENV DEBIAN_FRONTEND="noninteractive" 

COPY ./build/  /var/www/html/website.sky-mind.eu
