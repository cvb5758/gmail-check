import mongoose, { Schema, models } from 'mongoose';

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Tag = models?.Tag || mongoose.model('Tag', tagSchema);

export default Tag;
