import {application} from './src/app'

const PersonaRouter = require('./src/controllers/persona').PersonaRouter;

application.add({ path: '/', router: PersonaRouter });
application.start();