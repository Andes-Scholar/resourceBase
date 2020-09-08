import { Request, Response } from "express";
import Persona from '../models/persona';

export const todesPersonas = async (req: Request, res: Response) => {
    try {
        const personas = await Persona.find();
        res.send(personas);
    } catch (err) {
        res.send(err);
    }
};

export const verPersona = async (req: Request, res: Response) => {
  const persona = await Persona.findById(req.params.id)
    try {
        res.send(persona)
    } catch (err) {
        console.log('palo:', err );
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