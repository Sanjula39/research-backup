
const mongoose = require('mongoose');
const ausSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const ausModal = mongoose.model("aus",ausSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= ausModal;

