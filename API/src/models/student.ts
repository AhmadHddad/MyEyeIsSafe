import { model, Schema } from '../data/mongoose';
import { STUDENT_MODEL } from './modelsNames';

interface IStudent {
  name: string;
  email?: string;
  createdAt: Date;
  archived: boolean;
  archivedAt?: Date;
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  email: String,
  createdAt: { type: Date, default: new Date() },
  archived: { type: Boolean, default: false, required: true },
  archivedAt: Date,

});

const StudentModel = model<IStudent>(STUDENT_MODEL, studentSchema);
export default StudentModel;
