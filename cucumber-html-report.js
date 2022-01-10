const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/Reports/cucumber-json',
    reportPath: './CucumberHtmlreports',
    metadata:{
        browser: {
            name: 'Electron',
            version: '94'  
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress_POC'},
            {label: 'Release', value: '0.0.1'},
            {label: 'Cycle', value: 'B11221.34321'}
        ]
    }
});