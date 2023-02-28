FROM node:14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm run build



FROM nginx:alpine
COPY ./Nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build  /etc/nginx/html/ 
