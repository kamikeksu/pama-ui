FROM node:18.18.0

ENV REACT_APP_ENV prod

RUN mkdir /tmp/build
WORKDIR /opt/www
ADD pama /opt/www
RUN npm install -g env-cmd
RUN cd /opt/www && ls && yarn install && yarn build
CMD ["yarn", "start"]
