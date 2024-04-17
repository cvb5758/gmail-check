import mongoose, { Schema, models } from 'mongoose';

export const TestSchema = new Schema({
  companyName: {
    type: Number,
    required: true,
  },
  dateApplied: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Test = models?.Test || mongoose.model('Test', TestSchema);

export default Test;
