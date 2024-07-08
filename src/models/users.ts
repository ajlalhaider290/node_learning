import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isDisabled: boolean;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isDisabled: { type: Boolean, required: true, default: false },
  }, {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
  });

export default mongoose.model<IUser>('User', UserSchema);
