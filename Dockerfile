#=============== BUILD ================
FROM node:16

WORKDIR /usr/app/server
COPY . .

RUN npm install --quiet
RUN npm run build

#============ EXPOSE PORTS ============
EXPOSE 80


#============= START CMD ==============
CMD npm run start