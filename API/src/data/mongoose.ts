import { Mongoose } from 'mongoose';

const mongoose = new Mongoose();

export default mongoose;

export const Schema = mongoose.Schema;
export const Document = mongoose.Document;
export const model = mongoose.model