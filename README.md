# WebdriverIO-My-Store
Project Name: Automation Practice
This app is shopping app, the automation framework is implemented using WebdriverIO
Pre-requisites:
Following configuration should be done in the system
Installation: 
1. Java
2. Node.js installation 
3. NPM installation 
To check the version of node and npm open terminal/command line: 
node -v 
npm -v 

Install VSC editor

Import the project folder into VSC editor

WebdriverIO setup and installation commands: 
-- npm init 
-- npm install webdriverio --save-dev 
-- npm install @wdio/cli 
-- ./node_modules/.bin/wdio config 
-- npm install chai --save-dev 
-- npm install chai-webdriverio --save-dev
 -- npm install local-runner --save-dev
To Execute the test run the below cmd in project terminal
Please change the email mentioned in inputdata.js file before running the test each time
npm run test 

To get View the report
-Allure should be installed in the system
Open command prompt-> Go to the project directory
Run below command 
	allure generate && allure open 
Note: Delete the existing allure-report and allure-results before executing the test in case if the latest report is not reflecting in the report

Note: Some how chai assertion is not working in system, however I have added the code for assertion and commented the same.

The Complete E2E flow is covered in a single .js file ‘appflow.test.js’ 



