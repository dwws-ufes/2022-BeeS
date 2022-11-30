# Image to create Node Express backend
FROM node:14-alpine

# Setting timezone
ENV TZ=America/Sao_Paulo

ENV APPHOME=/app/
# ENV NODE_ENV=production

WORKDIR ${APPHOME}

ADD package.json yarn.lock ${APPHOME}

RUN yarn install

ADD . ${APPHOME}

RUN yarn build

CMD ["node", "build/src/app.js", "--unhandled-rejections=strict"]
