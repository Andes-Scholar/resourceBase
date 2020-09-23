import mongoose, { Schema } from "mongoose";
import { IPersona } from '../interfaces/persona';

const schema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  documento: { type: Number, required: true },
  email: {type: String},
  activo: {type: Boolean, required: true}
});

export const PersonaModel = mongoose.model<IPersona>('persona', schema);
export default PersonaModel;