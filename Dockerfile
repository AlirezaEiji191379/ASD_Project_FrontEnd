FROM nginx:alpine
COPY ./Nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./build/*.* /etc/nginx/html/ 