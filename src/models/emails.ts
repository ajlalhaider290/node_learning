import mongoose, { Schema, Document } from 'mongoose';

export interface IEmail extends Document {
  to: string;
  subject: string;
  body: string;
  date: Date;
}

const EmailSchema: Schema = new Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now }
});

export default mongoose.model<IEmail>('Email', EmailSchema);
