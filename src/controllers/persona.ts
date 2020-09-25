import { PersonaModel } from '../models/persona';
import { ResourceBase, MongoQuery } from '@andes/core';

class PersonaResource extends ResourceBase {
    Model = PersonaModel;
    resourceName = 'personas';
    searchFileds = {
        // TIP: Para partialString, tener en cuenta desde la app o desde postman enviar la expresión para realizar la búsqueda.
        // Ejemplo: `/personas?nombre=^${stringDeBusqueda}`) (desde el servicio de la app)
        nombre: MongoQuery.partialString,
        apellido: MongoQuery.partialString,
        activo: MongoQuery.equalMatch,
        email: MongoQuery.partialString,
        documento: MongoQuery.equalMatch
    };
}

export const PersonaCtr = new PersonaResource({})
export const PersonaRouter = PersonaCtr.makeRoutes();