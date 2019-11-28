const mongoose = require('mongoose');

const celebSchema = new mongoose.Schema ({
  name: {
    type: String, 
  }, 
  occupation: {
    type: String, 
  }, 
  catchPrase: {
    type: String, 
  }
});

const Celebrity = mongoose.model('Celebrity', celebSchema);
module.exports = Celebrity;