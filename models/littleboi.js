const mongoose = require('mongoose');

const littleboiSchema = new mongoose.Schema({
  blast_radius: Number,
  lol: Number,
  luckyNumber: Number,
});

module.exports = mongoose.model('littleboi', littleboiSchema);
// Added a new line using Octokit