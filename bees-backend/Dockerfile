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

CMD ["/bin/sh", "-c", "yarn typeorm migration:run -d ${APPHOME}build/ormconfig.js && node build/src/index.js --unhandled-rejections=strict"]

