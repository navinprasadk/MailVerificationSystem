# MailVerificationSystem
  - This microservice will send the verification code to the client's mail id and verify it. 
  - The mail has been sent using nodemailer package

Steps to Start with Boilerplate :
  - open command prompt / terminal from the Boilerplate root directory
  - run $->npm i  (It will install all the packages from package.json which is required for development)
  - if npm package has old version, then use $-> npm update
  - npm run dev -> start the development server
      - Go to browser and visit https://localhost:5000 and check the app
  - npm run start -> start the app in production mode

Note :
  - package installation should be made in the root of the project folder
  - only one package.json should be maintained for the app (which acts as core when dockerize)
  - jQuery shouldn't be used in development (jQuery interacts with browser DOM but React interacts with Virtual DOM)

Installed Packages :
  - React
  - Express
  - Webpack
  - NodeMailer

