# build

FROM node:20-alpine AS build

WORKDIR /minecraft

ENV NODE_ENV=production

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

# production

FROM node:20-alpine AS prod

ENV NODE_ENV=production

ENV REACT_APP_ENV=prod

ENV TZ=Asia/Jakarta

RUN apk update && apk add --no-cache tzdata

RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm i -g pm2

COPY --from=build /minecraft/build ./build

COPY --from=build /minecraft/ecosystem.config.js ./ecosystem.config.js

CMD ["pm2-runtime", "start", "ecosystem.config.js"]