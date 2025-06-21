import { Schema, model } from 'mongoose';

const LikeSchema = new Schema({
  count: { type: Number, default: 0 },
});

export default model('Like', LikeSchema);