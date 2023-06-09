FROM nginx:latest

COPY index.html /usr/share/nginx/html
COPY road.js /usr/share/nginx/html
COPY utils.js /usr/share/nginx/html
COPY car.js /usr/share/nginx/html
COPY controls.js /usr/share/nginx/html
COPY main.js /usr/share/nginx/html
COPY network.js /usr/share/nginx/html
COPY style.css /usr/share/nginx/html

EXPOSE 80

