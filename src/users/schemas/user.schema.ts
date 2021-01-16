import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  username: {
    // 同じ名前のusernameは存在できない
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  }
});
