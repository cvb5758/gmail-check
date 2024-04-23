import mongoose, { Schema, models } from 'mongoose';

const emailSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    subject: String,
    receivedAt: Date,
    isChecked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Email = models?.Email || mongoose.model('Email', emailSchema);

export default Email;
