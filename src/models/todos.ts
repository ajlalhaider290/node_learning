import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  userId: mongoose.Types.ObjectId;
  isCompleted: boolean;
  createdDate: Date;
  updatedDate: Date;
}

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  isCompleted: { type: Boolean, required: true, default: false },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
