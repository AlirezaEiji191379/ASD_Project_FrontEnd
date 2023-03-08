FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN npm install
RUN npm run build



FROM nginx:alpine
COPY ./Nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build  /etc/nginx/html/
COPY ./wait-for-it.sh .
RUN chmod 777 ./wait-for-it.sh
ENTRYPOINT [ "./wait-for-it","--timeout=300","--host=app","--port=8080","-s","--","nginx","-g","daemon off;" ] 
