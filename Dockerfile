FROM cypress/browsers

WORKDIR /app

RUN npm i cypress

ENTRYPOINT '/app/node_modules/.bin/cypress' 'run'
