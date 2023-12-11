const { Eyes, Target } = require('@applitools/eyes-webdriverio');
const { remote } = require('webdriverio');

async function runVisualTest() {
    const eyes = new Eyes();
   eyes.setApiKey('tKDWgoPcjtErGQJjJ99Qz7PqdhdxZqqC98J9u2DEGvO9M110');
    const browsers = [
        { browserName: 'chrome' },
        { browserName: 'firefox'},
    ];

    for (const browserConfig of browsers) {
        const browser = await remote({
            capabilities: browserConfig,
        });

        try {
            await eyes.open(browser, 'Personal Budget Management App', `Cross Browser Testing, Browser Name - ${browserConfig.browserName}`);
            await browser.url('http://localhost:3001');
            await eyes.check('React App Page', Target.window());
            await eyes.close();
        } finally {
            await browser.deleteSession();
            await eyes.abortIfNotClosed();
        }
    }
}

runVisualTest();