import { PersonaModel } from '../models/persona';
import { ResourceBase, MongoQuery } from '@andes/core';

class PersonaResource extends ResourceBase {
    Model = PersonaModel;
    resourceName = 'personas';
    searchFileds = {
        nombre: (value: string) => MongoQuery.partialString(`^${value}`),
        apellido: (value: string) => MongoQuery.partialString(`^${value}`),
        activo: MongoQuery.equalMatch,
        email:  (value: string) => MongoQuery.partialString(`^${value}`),
        documento: MongoQuery.equalMatch
    };
}

export const PersonaCtr = new PersonaResource({})
export const PersonaRouter = PersonaCtr.makeRoutes();