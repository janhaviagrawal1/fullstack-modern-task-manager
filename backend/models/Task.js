import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  text: String,

  priority: {
    type: String,
    default: 'medium'
  },

  order: Number
});

export default mongoose.model('Task', taskSchema);