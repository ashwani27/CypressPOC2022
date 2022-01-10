#Base image : https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.13.0-chrome95-ff94
#Create a project folder
RUN mkdir /cypress-poc-project
#Work directory
WORKDIR /cypress-poc-project
#Copying essential files
COPY ./package.json .
COPY ./cypress.json .
COPY ./cucumber-html-report.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the workdirectory
RUN npm install
#Executable commands
ENTRYPOINT ["npm","run","test"]