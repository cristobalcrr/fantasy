exports.config = { baseUrl: 'https://mi-aplicacion.com', specs: ['./test/e2e/*.spec.js'], multiCapabilities: [{ browserName: 'chrome', 'goog:chromeOptions': { args: ['--headless', '--disable-gpu'] } }] }; 
