exports.config = {
    // Especifica la ubicación de tus archivos de prueba
    specs: [
      'src\app\home\home.page.spec.ts' // Ruta a tus archivos de prueba
    ],
  
    // Configuración para ejecutar pruebas en Chrome
    capabilities: {
      browserName: 'chrome'
    },
    directConnect: true,
  
    // URL base para las pruebas
    baseUrl: 'http://localhost:4200/', // Cambia la URL según tu aplicación
  
    // Marco de ejecución de pruebas
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function () { }
    },
  
    // Antes de ejecutar las pruebas, realiza esta configuración
    onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.e2e.json') // Ruta al tsconfig para las pruebas
      });
    }
  };