import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isDisabled: boolean;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true , match: /.+\@.+\../},
  password: { type: String, required: true },
  isDisabled: { type: Boolean, required: true, default: false },
  }, {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }
  });

// Encrypt the password before saving
UserSchema.pre<IUser>('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash; // Set hashed password
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword: string, cb: (arg: any, isMatch?: boolean) => void) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  })
}



export default mongoose.model<IUser>('User', UserSchema);
