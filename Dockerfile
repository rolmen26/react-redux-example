FROM node:20.11.1-alpine3.19 as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine3.18 as production-stage

COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./etc/nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]