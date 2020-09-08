import mongoose, { Schema } from "mongoose";
import { IPersona } from '../interfaces/persona';

const PersonaSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  documento: { type: Number, required: true },
  email: {type: String},
  activo: {type: Boolean, required: true}
});

const Persona = mongoose.model<IPersona>('persona', PersonaSchema);
export default Persona;