#=============== BUILD ================
FROM node:16

WORKDIR /usr/app/weweb-server
COPY . .

RUN npm install --quiet
RUN npm run build

#============ EXPOSE PORTS ============
EXPOSE 4000

ENV NODE_ENV="production"

#============= START CMD ==============
CMD npm run start