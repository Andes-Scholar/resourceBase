import { Document } from "mongoose";

export interface IPersona extends Document {
    nombre: string;
    apellido: string;
    documento: number;
    email: string;
    activo: boolean
  }