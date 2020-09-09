import { Request, Response } from "express";
import Persona from '../models/persona';

export const todesPersonas = async (req: Request, res: Response) => {
    const consulta = Persona.find({}); // Se arma la query
    try {
        if (req.query.nombre) {
          consulta.where('nombre').equals(RegExp('^.*' + req.query.nombre + '.*$', 'i'))
        }
        if (req.query.apellido) {
          consulta.where('apellido').equals(RegExp('^.*' + req.query.apellido + '.*$', 'i'))
        }
        if (req.query.email) {
          consulta.where('email').equals(RegExp('^.*' + req.query.email + '.*$', 'i'))
        }
        if (req.query.documento) {
            consulta.where('documento').equals(req.query.documento);
        }
        if (req.query.activo) {
            consulta.where('activo').equals(true);
        }
        const persona = await consulta.exec();
        res.send(persona);
    } catch (err) {
        res.send(err);
    }
};

export const verPersona = async (req: Request, res: Response) => {
  try {
        const persona = await Persona.findById(req.params.id)
        res.send(persona)
  } catch (err) {
        res.send(err)
    }
};

export const addPersona = async (req: Request, res: Response) => {
  const persona = new Persona(req.body);
  await persona.save()
    try {
        res.send(persona)
    } catch (err) {
        res.send(err)
    }
};

export const updatePersona = async (req: Request, res: Response) => {
  try {
      const persona = await Persona.findByIdAndUpdate( req.params.id, req.body);
      res.send('La persona ha sido modificada correctamente');
  } catch (err) {
    res.send(err);
  }
};

export const deletePersona = async (req: Request, res: Response) => {
  try {
      const persona = await Persona.deleteOne({ _id: req.params.id })
      res.send('La persona fue eliminada correctamente');
  } catch (err) {
      res.send(err);
  }
};