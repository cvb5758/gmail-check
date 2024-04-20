import mongoose, { Schema, models } from 'mongoose';

export const emailSchema = new Schema({
  id: String,
  snippet: String,
});

const Email = models?.Email || mongoose.model('Email', emailSchema);

export default Email;
