import express, { Application } from "express";
import bodyParser from "body-parser";
import connect from "./connect";
import *  as PersonaController from './controllers/persona';

export const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db: string = 'mongodb://localhost:27017/prueba'
connect(db);

// endpoints
app.get('/personas/:id', PersonaController.verPersona);
app.get('/personas', PersonaController.todesPersonas);
app.post("/personas", PersonaController.addPersona);
app.patch("/personas/:id", PersonaController.updatePersona);
app.delete("/personas/:id", PersonaController.deletePersona);
