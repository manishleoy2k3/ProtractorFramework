var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,
	//seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/ElementBasics.js'],
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
    framework: 'jasmine',

    onPrepare: () => {
        // set browser size...
        browser.manage().window().maximize();

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        	savePath: 'target/screenshots'
        		})  
        );
        
        // better jasmine 2 reports...
        //const SpecReporter = require('jasmine-spec-reporter');
        //jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true
    }
};