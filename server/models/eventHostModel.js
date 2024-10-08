const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventHostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  organization: {
    type: String,
    required: true
  },
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const EventHost = mongoose.model('EventHost', EventHostSchema);
module.exports = EventHost;
