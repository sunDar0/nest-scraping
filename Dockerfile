# 1. npm 패키지를 모두 설치한 이미지 1개를 생성함
FROM node:14-alpine as installer
RUN apk update
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

# 2. 번들링함.
FROM installer as builder
WORKDIR /app

COPY . .
RUN ls -al

RUN npm install -g @nestjs/cli 

RUN nest build


# 번들링된 프로젝트를 실행함.
FROM installer
WORKDIR /app

ENV NODE_ENV=prod

COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/hermes-config.env.dev ./

CMD ["node", "dist/apps/nest-scraping/main.js"]

EXPOSE 3000
