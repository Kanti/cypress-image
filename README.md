# kanti/cypress
Cypress image with build in cypress (unzipped) ready to use

## bitbucket-pipelines.yml standalone Step
````yml
- step:
    name: Frontend Tests (E2E)
    image: kanti/cypress
    script:
     - /app/node_modules/.bin/cypress run --browser chrome
````

## bitbucket-pipelines.yml inside a step with docker
````yml
- step:
    name: Install with Frontend Tests (E2E)
    image: kanti/buildy:7.3
    script:
     - composer install
     - php -S 0.0.0.0:80 &
     - docker run --rm -it -v $(pwd)/cypress/:/app/cypress/ -v $(pwd)/cypress.json:/app/cypress.json kanti/cypress
````
