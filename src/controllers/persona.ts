import { PersonaModel } from '../models/persona';
import { ResourceBase, MongoQuery } from '@andes/core';

class PersonaResource extends ResourceBase {
    Model = PersonaModel;
    resourceName = 'persona';
    searchFileds = {
        nombre: (text: string) => new RegExp(`^${text}`),
        apellido: (text: string) => new RegExp(`^${text}`),
        activo: MongoQuery.equalMatch,
        email:  MongoQuery.partialString,
        documento: MongoQuery.partialString,
        search: ['nombre', 'apellido', 'documento']
    };
}

export const PersonaCtr = new PersonaResource({})
export const PersonaRouter = PersonaCtr.makeRoutes();