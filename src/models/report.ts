
import mongoose, { Schema, Document } from 'mongoose';

export interface IReport extends Document {
  date: Date;
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
}

const ReportSchema: Schema = new Schema({
  date: { type: Date, required: true, default: Date.now },
  totalTasks: { type: Number, required: true },
  completedTasks: { type: Number, required: true },
  pendingTasks: { type: Number, required: true }
});

export default mongoose.model<IReport>('Report', ReportSchema);
