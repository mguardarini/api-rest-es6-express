var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Telemetry Server Senior - Control iD',
  description: 'The nodejs.org example web server.',
  script: 'C:\\Users\\Mauro\\Documents\\Projetos\\express-es6-rest-api\\src\\index.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.uninstall();