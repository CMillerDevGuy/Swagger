var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personModel = new Schema({
	first_name: { type: String },
	middle_name: { type: String },
	last_name: { type: String },
});
module.exports = mongoose.model('Person', personModel);
