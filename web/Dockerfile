FROM node:12

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=8192

WORKDIR /app

COPY . /app

RUN npm install

RUN cd ..

CMD npm run start

EXPOSE 5000