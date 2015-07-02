FROM dorongrinstein/ubuntu

COPY ./app.js ./app.js
COPY ./package.json ./package.json
COPY ./node_modules ./node_modules

EXPOSE 8080
ENTRYPOINT ["nodejs", "app"]
